import React, { useEffect, useState } from 'react';
import RutasBackend from '../../../constants/RoutesBackend';
import { useNavigate } from "react-router-dom";
import Rutas from '../../../constants/Routes';

const Sales = () => {
   let nav = useNavigate();
   const [sales, setSales] = useState([])

   const getUsers = async () => {
      const data = new FormData()
      data.append("id_user", localStorage.getItem("iduser"))
      await fetch(RutasBackend.getAllSales, {
         method: 'POST',
         body: data
      })
         .then(res => res.json())
         .then(data => {
            setSales(data.data)
         })
         .catch(err => console.log(err))
   }

   useEffect(() => {
      getUsers()
   }, [])

   return (
      <div className="container mb-5" >
         <div className="row">
            <div className="col-12 mb-2">
               <h3>Ventas</h3>
            </div>
         </div>
         <div className="table-responsive">
         <table
            className=" table table-striped shadow-sm"
            style={{ background: "red" }}
         >
            <thead>
               <tr className=''>
                  <th className='py-3'>#</th>
                  <th className='py-3'>Usuario</th>
                  <th className='py-3'>Email</th>
                  <th className='py-3'>Imagen</th>
                  <th className='py-3'>Producto</th>
                  <th className='py-3'>Categoria</th>
                  <th className='py-3'>Método</th>
                  <th className='py-3'>Estatus</th>
                  <th className='py-3'>Cantidad</th>
                  <th className='py-3'>Precio</th>
                  <th className='py-3'>Total</th>
                  <th className='py-3'></th>
                  <th className='py-3'></th>
               </tr>
            </thead>
            <tbody>
               {
                  (!sales) ?
                     <td className='text-center py-4' colSpan="7">
                        <h4>Cargando ... </h4>
                     </td> :
                     sales.map((u, i) => {
                        return (
                           <tr key={i} className='' style={{ fontSize: "15px" }} >
                              <td className='py-3'>{u.id}</td>
                              <td className='py-3'>{u.id_user}</td>
                              <td className='py-3'>{u.email}</td>
                              <td className='py-3'>
                                 <img src={RutasBackend.imagenes + u.imagen}
                                    style={{ width: "50px", height: "50px" }}
                                    alt="" />
                              </td>
                              <td className='py-3'>{u.name_product}</td>
                              <td className='py-3'>{u.category}</td>
                              <td className='py-3'>{u.payment_method}</td>
                              <td className='py-3'>
                                 {/* <span
                                    style={{
                                       display: 'block',
                                       fontWeight: "bold",
                                       textTransform: "uppercase",
                                       fontSize: "12px",
                                       textAlign: "center",
                                       color: (
                                          (u.id_payment_status == "1") ? "#b70000" :
                                             (u.id_payment_status == "2") ? "#0a7200" :
                                                (u.id_payment_status == "3") ? "#de7e00" :
                                                   "#b70000"
                                       )
                                    }}
                                 >
                                    {u.payment_status}
                                 </span> */}
                                 
                                 <span>
                                       <b className={'colorStatus'+u.id_payment_status} >
                                          {u.payment_status}
                                       </b>
                                    </span>
                              </td>
                              <td className='py-3'>{u.quantity}</td>
                              <td className='py-3'>$ {u.price}</td>
                              <td className='py-3'>{u.quantity * u.price}</td>
                              <td>
                                 <button className="btn btn-primary"
                                    onClick={() => {
                                       nav(Rutas.admin.sales.detailsOrigin + u.id)
                                    }}
                                 >Editar</button>
                              </td>
                              <td>
                                 <button className="btn btn-danger">Eliminar</button>
                              </td>
                           </tr>
                        )
                     })
               }
            </tbody>
         </table>
         </div>
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
   );
}

export default Sales;
