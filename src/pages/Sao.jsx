import React, { useContext, useEffect } from 'react';
import SaoContext from './Context';
import { useNavigate } from "react-router-dom";
import Rutas from '../constants/Routes';
import Header from './Dashboard/Header';
import { Link } from 'react-router-dom'
import Presentation from './Dashboard/Presentation';

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
