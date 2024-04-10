import React, { useContext, useEffect } from 'react';
import Images from '../assets/Images';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import Rutas from '../constants/Routes';
import RoutesBackend from '../constants/RoutesBackend';
import SaoContext from './Context';

const Login = () => {
   const { sesionIniciada } = useContext(SaoContext);

   let nav = useNavigate();
   const formulario = async (e) => {
      e.preventDefault()
      const form = e.target.parentElement.parentElement
      const {
         InputLoginEmail,
         InputLoginPass,
      } = form

      let data = new FormData()
      data.append("email", InputLoginEmail.value)
      data.append("password", InputLoginPass.value)


      await fetch(RoutesBackend.iniciarSesion, {
         method: 'POST',
         body: data
      }).then(res => res.json())
         .then(json => {
            if(!json.success) alert(json.data)
            else {
               alert("Sesión iniciada correctamente");
               sesionIniciada[1](true);
               nav(Rutas.store.origin)
               localStorage.setItem("sesion", 1)
               localStorage.setItem("iduser", json.id)
               localStorage.setItem("is_user", json.is_user)
            }
         })
         .catch(err => console.log(err))
   }
   useEffect(() => {
      if(localStorage.getItem("sesion")) nav(Rutas.store.origin)
   })
   return (
      <div>
         <div className="login d-flex justify-content-center align-items-center">
            <div className="logoSao">
               <img src={Images.logo} alt="imagen de fondo" />
            </div>
            <div className="background">
               <img src={Images.background} alt="imagen de fondo" />
            </div>
            <div className="formLogin">
               <form className="rounded-5">
                  <h2 className="mb-3">Inicio de sesión</h2>
                  <div className="">
                     <Input
                        nombre="Correo electrónico"
                        maxLength={50}
                        attributs={{
                           type: 'email',
                           minLength: '0',
                           required: true,
                           name: 'InputLoginEmail',
                        }}
                     />
                     <Input
                        nombre="Contraseña"
                        maxLength={50}
                        attributs={{
                           type: 'password',
                           minLength: '0',
                           required: true,
                           name: 'InputLoginPass',
                        }}
                     />
                  </div>
                  <Button 
                     funcion={e => {
                        formulario(e)
                     }}>
                     Iniciar sesión
                  </Button>
                  <Button tipo="sec"
                     funcion={e => {
                        { nav(Rutas.logup.path) }
                     }}
                  >
                     {/* <a href="./logup"> */}
                        Registrarse
                     {/* </a> */}
                  </Button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Login;
