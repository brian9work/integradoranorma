import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Dashboard/Header'
import RutasBackend from '../../../constants/RoutesBackend'
import Products from '../../../components/Products'

export default function Search() {
   const [products, setProducts] = useState([])
   const { search } = useParams()

   const getProducts = async () => {
      await fetch(RutasBackend.searchProduct + "?search=" + search
      ).then(result => result.json())
         .then(res => {
            console.log(res)
            if (res.success) {
               setProducts(res.data)
            }
         })
         .catch(err => console.error(err))
   }

   useEffect(() => {
      getProducts()
   }, [search])
   return (
      <>
         <Header />
         <div className='container mt-5'>
            <h4>Resultados: </h4>
            {/* Search {search} */}
            {
               products.length > 0 &&
               <Products
                  data={{
                     data: products
                  }}

               />
               // products.map((p, i) => {
               //    return (
               //       <div key={i}>
               //          {p.name}
               //       </div>
               //    )
               // })
            }
         </div>
      </>
   )
}
