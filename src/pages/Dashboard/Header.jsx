import React, { useEffect, useState } from 'react';
import Images from '../../assets/Images'
import { Link } from 'react-router-dom'
import Rutas from '../../constants/Routes';
import { FaRegUser, FaRegHeart, FaUserSecret } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";
import { FiShoppingCart } from "react-icons/fi";
import { MdStorefront } from "react-icons/md";

let menuItems = [
   { path: Rutas.store.origin, icon: <MdStorefront />, text: "Tienda" },
   { path: "/", icon: <FaRegUser />, text: "Mi cuenta" },
   // { path: "/", icon: <FaRegHeart />, text: "Favoritos" },
   { path: Rutas.cart.path, icon: <FiShoppingCart />, text: "Carrito" },
   { path: Rutas.closeSesion.path, icon: <ImSwitch />, text: "Cerrar Sesion" },
]

const Header = () => {
   // let nav = useNavigate();
   useEffect(() => {
       if(sessionStorage.getItem("sesion")!=="1"){
           menuItems = []
       }
   },[])
   // let nav = useNavigate();
   let [menu, setMenu] = useState(false)
   return (
      <div className="headerSao">
         <header>
            <div className='imagen'>
               <Link to={Rutas.sesion}>
                  <img src={Images.logo} alt="logo-Sao" />
               </Link>
            </div>
            <div className='buscador'>
               <form>
                  <div>
                     <span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                           height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                           </path>
                        </svg>
                     </span>
                     <input type="text" placeholder="¿Que desea encontrar?" />
                  </div>
               </form>
            </div>
            <div className={`menu ${menu ? "act" : ""}`}>
               <span
                  onClick={() => {
                     setMenu(!menu);
                  }}
               >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
               </span>
               <nav>
                  {
                  menuItems.map((menuItem, i) => {
                     return (
                        <Link to={menuItem.path} key={i}>
                           {menuItem.icon}
                           <p>{menuItem.text}</p>
                        </Link>
                     )
                  })}
                  {
                     (sessionStorage.getItem("is_user") === "true") ? <></> :
                     <Link to={Rutas.admin.origin}>
                           <FaUserSecret />
                           <p>Admin</p>
                        </Link>
                  }
               </nav>
            </div>
         </header>
      </div>
   );
}
export default Header;
