import React, { useEffect, useState } from 'react';
import Header from '../Dashboard/Header';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import FormAddress from './buy/FormAddress';
import { useNavigate } from "react-router-dom";
import FormBuy from './buy/FormBuy';
import Cart from './buy/Cart';
import RutasBackend from '../../constants/RoutesBackend';
import { Button } from '../../components/InputSec';
import Rutas from '../../constants/Routes';
// import Button from '../../components/Button';


const Buy = () => {
   let nav = useNavigate();
   const [load,setLoad] = useState(false)
   const [arrayProducts, setArrayProducts] = useState([])
   const [arrayAddress, setArrayAddress] = useState([[]])
   const [arrayPaymentMethod, setArrayPaymentMethod] = useState([])

   const getData=async()=>{
      const d = new FormData()
      d.append("id_user",localStorage.getItem("iduser")) 
      await fetch(RutasBackend.getAllPaymentInformation,{
         method: 'POST',
         body: d
      })
      .then(response => response.json())
      .then(json => {
         const {data} = json
         const {cart,address,paymentMethods} = data
         setArrayPaymentMethod(paymentMethods)
         setArrayAddress(address[0])
         setArrayProducts(cart)
         setLoad(true)
      })
      .catch(error => {
         console.log(error)
      })
   }

   const buy = async (e)=>{
      e.preventDefault()
      const form = e.target
      const {
         inputBuyCountry,
         inputBuyState,
         inputBuylocality,
         inputBuyMainStreet,
         inputBuyStreet1,
         inputBuyStreet2,
         inputBuyReferences,

         inputBuyPM,
         inputBuyTitular,
         inputBuyNumberCard,
         inputBuyExpiration,
         inputBuyCVV,
      } = form
      const data = new FormData()
      data.append("id_user",localStorage.getItem("iduser"))
      data.append("inputBuyCountry",inputBuyCountry.value)
      data.append("inputBuyState",inputBuyState.value)
      data.append("inputBuylocality",inputBuylocality.value)
      data.append("inputBuyMainStreet",inputBuyMainStreet.value)
      data.append("inputBuyStreet1",inputBuyStreet1.value)
      data.append("inputBuyStreet2",inputBuyStreet2.value)
      data.append("inputBuyReferences",inputBuyReferences.value)
      data.append("inputBuyPM","1")
      data.append("inputBuyTitular",inputBuyTitular.value)
      data.append("inputBuyNumberCard",inputBuyNumberCard.value)
      data.append("inputBuyExpiration",inputBuyExpiration.value)
      data.append("inputBuyCVV",inputBuyCVV.value)

      await fetch(RutasBackend.addPayment,{
         method: "POST",
         body: data,
      })
      .then(response => response.json())
      .then(json => {
         // console.log(json)
         // return;
         if(json.success) {
            alert(json.data)
            nav(Rutas.sales.path)
            return
         }

         alert(json.data)
      })
      .catch(err => console.log(err))
   }

   useEffect(() => {
      getData()
   },[])
   return (
      <>
         <Header />
         <div className="container mb-2 mt-5" >
            <form className="row" onSubmit={e=>{buy(e)}}>
               {
                  !load ? <Loader /> :
                  <>
                     <Cart data={arrayProducts} /> 
                     <div className="container col-12 mb-2" style={{maxWidth: '700px'}} >
                        <FormAddress address={arrayAddress} />
                        <FormBuy paymentMethod={arrayPaymentMethod} />
                     </div>
                  </>
               }
               <Button
                  type='submit'
                  // funcion={e =>{
                  //    buy(e)
                  // }}
               >Pagar</Button>
            </form>
         </div >
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
   );
}

export default Buy;
