import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RutasBackend from '../../../constants/RoutesBackend'
import Header from '../../Dashboard/Header'
import Button from '../../../components/Button'
import Rutas from '../../../constants/Routes'

export default function ViewProduct() {
   let nav = useNavigate();
   const { id } = useParams()
   const [product, setProduct] = useState({})

   
   const addToCart = async (e,{ id_user, id_product }) => {
      e.preventDefault();
      let data = new FormData()
      data.append("id_user", id_user)
      data.append("id_product", id_product)
      await fetch(RutasBackend.addToCart, {
          method: 'POST',
          body: data
      })
          .then(res => res.json())
          .then(json => {
            if(!json.success){
                alert(json.data)
                nav(Rutas.logup.path)
                return;
            }
          })
          .catch(err => console.log(err))
  }

   const getProduct = async () => {
      await fetch(RutasBackend.getProductById + "?id_product=" + id)
         .then(res => res.json())
         .then(json => {
            setProduct(json.data[0])
            if(json.data[0].name === undefined){
               nav(Rutas.store.origin)
            }
            console.log(product)
         })
         .catch(err => console.log(err))
   }

   useEffect(() => {
      getProduct()
   }, [])

   return (
      <>
         <Header />
         <div className='container mt-5'>
            <h3>Producto #{id}</h3>
            <div className="mt-3 row">
               <div className="col-6">
                  {/* <img src={RutasBackend.imagenes + "/" + product.imagen} alt={product.name} className="img-fluid" /> */}
                  <img src={product.gif} alt={product.name+" / "+product.gif} className="img-fluid" />
               </div>
               <div className="col-6">
                  <h4>{product.name}</h4>
                  <small className='fs-6'>{product.description}</small><br />
                  <small className='fs-6'>{product.specifications}</small><br />
                  <small className='fs-6'>{product.dimensions}</small><br />
                  <small className='fs-6'>Precio: {product.price}</small><br />
                  <small className='fs-6'>stock: {product.stock}</small><br />
                  <br />
                  <button className='btn btn-light border'>{product.category}</button>
                  <button className='btn btn-light border'>{product.brand}</button>
                  <br /><br />
                  <form onSubmit={e =>{
                           addToCart(e,{
                              id_user: localStorage.getItem('iduser'),
                              id_product: product.id
                           })
                  }}>
                     <Button
                        type='submit'
                        funcion={e => {
                        }}
                     >
                        Agregar
                     </Button>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}
