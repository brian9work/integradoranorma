import React, { useEffect, useState } from 'react';
import Header from '../Dashboard/Header';
import RutasBackend from '../../constants/RoutesBackend';
import { useNavigate, useParams } from 'react-router-dom'
import Rutas from '../../constants/Routes';

const Sales = () => {
   const nav = useNavigate();
   const [users, setUsers] = useState([])

   const getUsers = async () => {
      const data = new FormData()
      data.append("id_user", localStorage.getItem("iduser"))
      await fetch(RutasBackend.getSalesByIdUser, {
         method: 'POST',
         body: data
      })
         .then(res => res.json())
         .then(data => {
            setUsers(data.data)
         })
         .catch(err => console.log(err))
   }

   useEffect(() => {
      getUsers()
   }, [])

   return (
      <>
         <Header />
         <div className="container mb-2 mt-5 table-responsive" >
            <div className="row">
               <div className="col-12 mb-2">
                  <h5>Mis compras</h5>
               </div>
            </div>
            <table
               className="tableSao table table-striped shadow-sm"
            >
               <thead>
                  <tr className=''>
                     <th className='py-3'>#</th>
                     <th className='py-3'>Imagen</th>
                     <th className='py-3'>Producto</th>
                     <th className='py-3'>Categoria</th>
                     <th className='py-3'>Método</th>
                     <th className='py-3'>Estatus</th>
                     <th className='py-3'>Cantidad</th>
                     <th className='py-3'>Precio</th>
                     <th className='py-3'>Total</th>
                     <th className='py-3'></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     (!users) ?
                        <td className='text-center py-4' colSpan="7">
                           <h4>Cargando ... </h4>
                        </td> :
                        users.map((u, i) => {
                           return (
                              <tr key={i} className='' style={{ fontSize: "15px" }} >
                                 <td>
                                    <span>{u.id}</span>
                                 </td>
                                 <td className=''>
                                    <img src={RutasBackend.imagenes+u.imagen}
                                       style={{ width: "100%", height: "70px" }}
                                       alt="" />
                                 </td>
                                 <td className=''>
                                    <span>{u.name_product}</span>
                                 </td>
                                 <td className=''>
                                    <span>{u.category}</span>
                                 </td>
                                 <td className=''>
                                    <span>{u.payment_method}</span>
                                 </td>
                                 <td className=''>
                                    <span>
                                       <b className={'colorStatus'+u.id_payment_status} >
                                          {u.payment_status}
                                       </b>
                                    </span>
                                 </td>
                                 <td className=''>
                                    <span>{u.quantity}</span>
                                 </td>
                                 <td className=''>
                                    <span>${u.price}</span>
                                 </td>
                                 <td className=''>
                                    <span>{(u.quantity * u.price).toFixed(2)}</span>
                                 </td>
                                 <td>
                                    <span>
                                       <button
                                          onClick={() => {
                                             nav(Rutas.sales.details+"/"+u.id)
                                          }}
                                          className="btn btn-info text-light">Detalles ss</button>
                                    </span>
                                 </td>
                              </tr>
                           )
                        })
                  }
               </tbody>
            </table>
         </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
   );
}

export default Sales;
