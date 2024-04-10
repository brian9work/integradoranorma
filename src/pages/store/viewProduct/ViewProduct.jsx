import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RutasBackend from '../../../constants/RoutesBackend'
import Header from '../../Dashboard/Header'

export default function ViewProduct() {
   const { id } = useParams()
   const [product, setProduct] = useState({})

   const getProduct = async () => {
      await fetch(RutasBackend.getProductById + "?id_product=" + id)
         .then(res => res.json())
         .then(json => {
            setProduct(json.data[0])
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
         <div>ViewProduct: {id}</div>
      </>
   )
}
