import React, { useContext, useEffect } from 'react';
import SaoContext from './Context';
import { useNavigate } from "react-router-dom";
import Rutas from '../constants/Routes';

const SaoHome = () => {
   const { sesionIniciada } = useContext(SaoContext);
   let nav = useNavigate();
   useEffect(() => {
      if (!sesionIniciada[0]) {
         nav(Rutas.login.path)
      }
   }, [])
   return (
      <>
         <header className="py-3 border-bottom">
            <div className="container-fluid row align-items-center">
               <div className="dropdown col-12 col-lg-3 col-md-3">
                  <a href="#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                     <img src="./assets/logo.png" alt="logo-Sao" className="d-block " width="100" height="40"
                         />
                  </a>
               </div>
               <div className="d-grid gap-2 align-items-center col-12 col-lg-9 col-md-9" >
                  <div className="d-flex align-items-center">
                     <form className="w-100 me-3" role="search">
                        <div className="input-group ">
                           <span className="input-group-text" id="basic-addon1" >
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                 </path>
                              </svg>
                           </span>
                           <input type="text" className="form-control input" placeholder="¿Que desea encontrar?"
                              aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                     </form>

                     <div className="flex-shrink-0 dropdown">
                        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle fs-2"
                           data-bs-toggle="dropdown" aria-expanded="false">
                           <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                              width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                           </svg>
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                           <li><a className="dropdown-item mb-2 py-2 " href="#">
                              <svg className="fs-3" stroke="currentColor" fill="currentColor" strokeWidth="0"
                                 viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z">
                                 </path>
                              </svg>
                              <span className="container">Mi cuenta</span>
                           </a></li>
                           <li><a className="dropdown-item mb-2 py-2 " href="#">
                              <svg className="fs-3" stroke="currentColor" fill="currentColor" strokeWidth="0"
                                 viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z">
                                 </path>
                              </svg>
                              <span className="container">Favoritos</span>
                           </a></li>
                           <li><a className="dropdown-item mb-2 py-2 " href="#">
                              <svg className="fs-3" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                 strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="8" cy="21" r="1"></circle>
                                 <circle cx="19" cy="21" r="1"></circle>
                                 <path
                                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
                                 </path>
                              </svg>
                              <span className="container">Carrito</span>
                           </a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div className="container-fluid row mb-1 d-flex justify-content-between">
            <div className="cotainer col-6 py-2 shadow-sm row">
               <span className="d-block col-12 col-lg-3 col-md-3 fs-1">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                     strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                     <path d="M9 10h6"></path>
                  </svg>
               </span>
               <h4 className="d-block col-12 col-lg-9 col-md-9 fs-5">Papeleria</h4>
            </div>
            <div className="cotainer col-6 py-2 shadow-sm row">
               <span className="d-block col-12 col-lg-3 col-md-3 fs-1">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                     strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <polyline points="6 9 6 2 18 2 18 9"></polyline>
                     <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                     <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
               </span>
               <h4 className="d-block col-12 col-lg-9 col-md-9 fs-5">Electronica</h4>
            </div>
            <div className="cotainer col-6 py-2 shadow-sm row">
               <span className="d-block col-12 col-lg-3 col-md-3 fs-1">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                     strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"></path>
                     <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"></path>
                     <path d="M8 12h8"></path>
                     <path d="M7 19v2"></path>
                     <path d="M17 19v2"></path>
                  </svg>
               </span>
               <h4 className="d-block col-12 col-lg-9 col-md-9 fs-5">Mobiliario</h4>
            </div>
            <div className="cotainer col-6 py-2 shadow-sm row">
               <span className="d-block col-12 col-lg-3 col-md-3 fs-1">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                     xmlns="http://www.w3.org/2000/svg">
                     <path fill="none" d="M0 0h24v24H0V0z"></path>
                     <path
                        d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z">
                     </path>
                     <circle cx="6.5" cy="6.5" r="1.5"></circle>
                  </svg>
               </span>
               <h4 className="d-block col-12 col-lg-9 col-md-9 fs-5">Ofertas</h4>
            </div>
         </div>
         
   <div className="miniImagenDeFondo container-fluid mb-5"></div>
   <div className="container-fluid mb-5">
      <h3>Lo mas Vendido</h3>
      <div className="row">
         <div className="shadow-sm p-4 col-6 col-lg-3 col-md-4">
            <img src="https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit" alt="marca" className="img-fluid" />
            <p className="mb-0">Nombre</p>
            <span>$ 100.99 MXN</span>
         </div>
         <div className="shadow-sm p-4 col-6 col-lg-3 col-md-4">
            <img src="https://www.achemex.com/cdn/shop/products/313MxVBi3sL.jpg?v=1682008150" alt="marca" className="img-fluid" />
            <p className="mb-0">Nombre</p>
            <span>$ 100.99 MXN</span>
         </div>
         <div className="shadow-sm p-4 col-6 col-lg-3 col-md-4">
            <img src="https://http2.mlstatic.com/D_NQ_NP_651013-MLU72836543473_112023-O.webp" alt="marca" className="img-fluid" />
            <p className="mb-0">Nombre</p>
            <span>$ 100.99 MXN</span>
         </div>
         <div className="shadow-sm p-4 col-6 col-lg-3 col-md-4">
            <img src="https://pcoax.com.mx/14400-large_default/impresora-multifuncional-canon-maxify-gx7010-tinta-continua.jpg" alt="marca" className="img-fluid" />
            <p className="mb-0">Nombre</p>
            <span>$ 100.99 MXN</span>
         </div>
      </div>
   </div>
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
