import React, { useContext, useEffect } from 'react';
import SaoContext from './Context';
import { useNavigate } from "react-router-dom";
import Rutas from '../constants/Routes';
import Header from './Dashboard/Header';
import { Link } from 'react-router-dom'
import Presentation from './Dashboard/Presentation';
import Categorias from './Dashboard/Categorias';
import Products from '../components/Products';

const Categories = ({ icon, text, link }) => {
   return (
      <div className="cotainer col-6 py-2 shadow-sm row">
         <span className="d-block col-12 col-lg-3 col-md-3 fs-1">
            {icon}
         </span>
         <Link to={link} className="d-block col-12 col-lg-9 col-md-9 fs-5">{text}</Link>
      </div>
   )
}

const SaoHome = () => {
   const { sesionIniciada } = useContext(SaoContext);
   let nav = useNavigate();
   // useEffect(() => {
   //    if (!sesionIniciada[0]) {
   //       nav(Rutas.login.path)
   //    }
   // }, [])
   return (
      <>
         <Header />
         <Presentation />
         <Categorias />
         <Products data={{
            typeofProducts: "Recomendados",
            data:[
               {
                  imagen:"https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                  name:"Impresora 1",
                  price:"1,000.00 MXN"
               },
               {
                  imagen:"https://www.achemex.com/cdn/shop/products/313MxVBi3sL.jpg?v=1682008150",
                  name:"Impresora 2",
                  price:"2,000.00 MXN"
               },
               {
                  imagen:"https://http2.mlstatic.com/D_NQ_NP_651013-MLU72836543473_112023-O.webp",
                  name:"Impresora 3",
                  price:"3,000.00 MXN"
               },
               {
                  imagen:"https://pcoax.com.mx/14400-large_default/impresora-multifuncional-canon-maxify-gx7010-tinta-continua.jpg",
                  name:"Impresora 4",
                  price:"4,000.00 MXN"
               },
               {
                  imagen:"https://www.achemex.com/cdn/shop/products/313MxVBi3sL.jpg?v=1682008150",
                  name:"Impresora 2",
                  price:"2,000.00 MXN"
               },
               {
                  imagen:"https://http2.mlstatic.com/D_NQ_NP_651013-MLU72836543473_112023-O.webp",
                  name:"Impresora 3",
                  price:"3,000.00 MXN"
               },
               {
                  imagen:"https://pcoax.com.mx/14400-large_default/impresora-multifuncional-canon-maxify-gx7010-tinta-continua.jpg",
                  name:"Impresora 4",
                  price:"4,000.00 MXN"
               },
            ]
         }} />

   

         <div>
            <h1>SaoHome</h1>
            {sesionIniciada[0] ? "Sesion Iniciada" : "Error en la sesion"}
            <br />
            <button
               onClick={e => {
                  sesionIniciada[1](false)
                  nav(Rutas.login.path)
               }}
            >Cerrar Sesion</button>
         </div>
      </>
   );
}

export default SaoHome;
