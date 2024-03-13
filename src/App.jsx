import React, { useState, useContext, useReducer } from 'react';
import Login from './pages/Login'
import Logup from './pages/Logup'
import Rutas from './constants/Routes'
import './styles/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import SaoContext from './pages/Context';
import SaoHome from './pages/Sao';
import Furniture from './pages/Furniture';
import Electronics from './pages/Electronics';
import Offers from './pages/Offers';

function Sao(){
   return (
      <div>
         <BrowserRouter basename='/integradoranorma'>
         {/* <BrowserRouter basename='/'> */}
            <Routes>
               {/* <Route exact path={'/'} element={<SaoHome />} /> */}
               <Route exact path={Rutas.sesion.path} element={<SaoHome />} />
               <Route exact path={Rutas.furniture.path} element={<Furniture />} />
               <Route exact path={Rutas.electronics.path} element={<Electronics />} />
               <Route exact path={Rutas.offers.path} element={<Offers />} />
               
               <Route exact path={Rutas.login.path} element={<Login />} />
               <Route exact path={Rutas.logup.path} element={<Logup />} /> 
              
            </Routes>
         </BrowserRouter>
      </div>
   )
}
function App() {
   const sesionIniciada = useState(true);
   return (
      <>
         <SaoContext.Provider value={{
            sesionIniciada:sesionIniciada,
         }}>
            <Sao></Sao>
         </SaoContext.Provider>
      </>
   )
}

export default App
