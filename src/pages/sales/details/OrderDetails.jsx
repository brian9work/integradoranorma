import React, { useEffect, useState } from 'react';
import Header from '../../Dashboard/Header';
import { CgNotes } from "react-icons/cg";
import { GrMoney } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { IoReceiptOutline } from "react-icons/io5";
import { PiPackageBold } from "react-icons/pi";
import { TbCar } from "react-icons/tb";
import { BiReceipt } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom'
import RoutesBackend from '../../../constants/RoutesBackend';
import Rutas from '../../../constants/Routes';
import RutasBackend from '../../../constants/RoutesBackend';

const dataOrderDetails = [
   <CgNotes />,
   <GrMoney />,
   <BsSend />,
   <BiReceipt />,
   <PiPackageBold />,
   <TbCar />,
]
export const ComponentOrderDetail = (orderDetails,id_process) => {
   const dataOrderDetails = [
      <CgNotes />,
      <GrMoney />,
      <BsSend />,
      <BiReceipt />,
      <PiPackageBold />,
      <TbCar />,
   ]
   return orderDetails.map((data, i) => {
      return (
         <div 
            key={i} className="container-fluid col-2"
            style={{ opacity: (!((i+1)<=parseInt(id_process))) ? "0.5" : "1" }}
         >
            <div className="row">
               <div className="col-12 text-center">
                  <span style={{ fontSize: "50px",color: (!((i+1)<=parseInt(id_process))) ? "#999" : "#ffa600" }}>
                     {dataOrderDetails[i]}
                  </span>
               </div>
               <div className='col-12'
                  style={{
                     height: "15px",
                     background: (!((i+1)<=parseInt(id_process))) ? "#aaa" : "#ffa600",

                     borderTopLeftRadius: (i == 0) ? "20px" : "",
                     borderBottomLeftRadius: (i == 0) ? "20px" : "",

                     borderTopRightRadius: (i == 5) ? "20px" : "",
                     borderBottomRightRadius: (i == 5) ? "20px" : "",
                  }}
               >
               </div>
               <div className="col-12 text-center">
                  <p
                     style={{ fontSize: "14px", opacity: "0.6" }}
                  >{data.name_process}</p>
               </div>
               <div className="col-12">
                  <p
                     style={{ fontSize: "12px" }}
                  >{(data.date)}</p>
               </div>
            </div>
         </div>
      )
   })

}
export const Card=(details)=>{
   return (
      <div className="container mx-auto row mt-3 bg-body-tertiary p-4 rounded-4 shadow-sm">
      <div className="col-4">
         <img src={RutasBackend.imagenes+details.imagen} alt="" />
      </div>
      <div className="col-8">
         <h5>{details.name}</h5>
         <h6>{details.description}</h6>
         <h6>Metodo de pago: <b>{details.payment_method}</b> </h6>
         <h6>Status: <b>{details.payment_status}</b> </h6>
         <div className="mt-2">
            <p>Fecha de compra: <b>{details.created_at}</b> </p>
         </div>
      </div>
   </div>
   )
}

const OrderDetails = () => {
   const nav = useNavigate();
   const [details, setdetails] = useState(false);
   const [historyProcess, sethistoryProcess] = useState(false);
   const { id } = useParams()

   const getDetails = async (id) => {
      await fetch(`${RoutesBackend.getDetailsOfSale}?id_pedido=${id}`)
         .then(response => response.json())
         .then(json => {
            if(!json.success) {
               alert(json.data)
               nav(Rutas.sales.path)
            }
            console.log(json)
            const {sale,process} = json.data[0]
            setdetails(sale)
            sethistoryProcess(process)
         })
         .catch(error => {
            console.error(error)
         })
   }
   const actualizarEstado = async () => {
       await fetch(RutasBackend.updateProcess+"?id_pedido="+id
       ).then((response) =>response.json())
       .then((response) => {
           if(!response.success){
               alert(response.data)
               // window.location.reload()
           }
           // console.log(response)
       })
       .catch((error) => console.error(error))
       // alert('Actualizar Estado')
   }

   useEffect(() => {
      actualizarEstado()
      getDetails(id)
   }, [])

   // useState
   return (
      <>
         <Header />
         <div className="container-fluid mt-5">
            <div className="row container mx-auto">
               <div className="col-12">
                  <h5>Detalles de la orden #{id}</h5>
               </div>
            </div>
            {
               details &&
               Card(details)
            }
            {
               (historyProcess && details.id_process) && 
               <div className="mt-5 row p-5">
                  {ComponentOrderDetail(historyProcess,details.id_process)}
               </div>
            }
         </div>
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
   );
}

export default OrderDetails;
