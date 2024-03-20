import React, { useState, useContext, useReducer } from 'react';
import Login from './pages/Login'
import Logup from './pages/Logup'
import Rutas from './constants/Routes'
import './styles/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Index from './pages/Index'
import SaoContext from './pages/Context';
// import SaoHome from './pages/Sao';
// import Furniture from './pages/Furniture';
// import Electronics from './pages/Electronics';
// import Offers from './pages/Offers';
import Dashboard from './pages/store/Dashboard';
import Cart from './pages/cart/Cart';
import Admin from './pages/Admin';
import CloseSesion from './pages/Dashboard/CloseSesion';

function Sao(){
   return (
      <div>
         {/* <BrowserRouter basename='/'> */}
         {/* <Route exact path={'/'} element={<SaoHome />} /> */}
         <BrowserRouter basename='/integradoranorma'>
            <Routes>
               {/* <Route exact path={Rutas.sesion.path} element={<SaoHome />} />
               <Route exact path={Rutas.furniture.path} element={<Furniture />} />
               <Route exact path={Rutas.electronics.path} element={<Electronics />} />
               <Route exact path={Rutas.offers.path} element={<Offers />} /> */}
               
               <Route exact path={Rutas.login.path} element={<Login />} />
               <Route exact path={Rutas.logup.path} element={<Logup />} /> 

               <Route exact path={Rutas.store.path+"/:type"} element={<Dashboard />} /> 
               <Route exact path={Rutas.closeSesion.path} element={<CloseSesion />} /> 
               <Route exact path={Rutas.cart.path} element={<Cart />} /> 
               <Route exact path={Rutas.admin.path+"/:page"} element={<Admin />} /> 
              
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
