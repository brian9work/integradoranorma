import React, { useEffect, useState } from 'react';
import Header from '../Dashboard/Header';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import FormAddress from './buy/FormAddress';
import FormBuy from './buy/FormBuy';
import Cart from './buy/Cart';
import RutasBackend from '../../constants/RoutesBackend';
import { Button } from '../../components/InputSec';
// import Button from '../../components/Button';


const Buy = () => {
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
         // console.log(json)
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

      
      // console.log(inputBuyCountry.value)
      // console.log(inputBuyState.value)
      // console.log(inputBuylocality.value)
      // console.log(inputBuyMainStreet.value)
      // console.log(inputBuyStreet1.value)
      // console.log(inputBuyStreet2.value)
      // console.log(inputBuyReferences.value)
      // console.log(inputBuyPM.checked)
      // console.log(inputBuyTitular.value)
      // console.log(inputBuyNumberCard.value)
      // console.log(inputBuyExpiration.value)
      // console.log(inputBuyCVV.value)

      await fetch(RutasBackend.addPayment,{
         method: "POST",
         body: data,
      })
      .then(response => response.json())
      .then(json => {
         if(json.success) alert(json.data)
         console.log(json)
      })
      .catch(err => console.log(err))
      
      // data.append("inputBuyCountry",localStorage.getItem("iduser"))
      // data.append("inputBuyState",localStorage.getItem("iduser"))
      // data.append("inputBuylocality",localStorage.getItem("iduser"))
      // data.append("inputBuyMainStreet",localStorage.getItem("iduser"))
      // data.append("inputBuyStreet1",localStorage.getItem("iduser"))
      // data.append("inputBuyStreet2",localStorage.getItem("iduser"))
      // data.append("inputBuyReferences",localStorage.getItem("iduser"))
      // data.append("inputBuyPM",localStorage.getItem("iduser"))
      // data.append("inputBuyTitular",localStorage.getItem("iduser"))
      // data.append("inputBuyNumberCard",localStorage.getItem("iduser"))
      // data.append("inputBuyExpiration",localStorage.getItem("iduser"))
      // data.append("inputBuyCVV",localStorage.getItem("iduser"))


      

      // console.log(form)
      // alert("hola")
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
