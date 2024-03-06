import React from 'react';
import Images from '../assets/Images';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import Rutas from '../constants/Routes';
import RoutesBackend from '../constants/RoutesBackend';
import axios from 'axios';

const Logup = () => {
   let nav = useNavigate();
   const formulario = async (e) => {
      e.preventDefault()
      const form = e.target.parentElement.parentElement
      const {
         InputLogupName,
         InputLogupSpelitP,
         InputLogupSpelitM,
         InputLogupEmail,
         InputLogupPass,
      } = form

      let data = new FormData()
      data.append("name", InputLogupName.value)
      data.append("spelitF", InputLogupSpelitP.value)
      data.append("spelitM", InputLogupSpelitM.value)
      data.append("email", InputLogupEmail.value)
      data.append("password", InputLogupPass.value)

      await fetch(RoutesBackend.r, {
         method: 'POST',
         body: data
      }).then(res => res.json())
         .then(json => {
            if(!json.success) alert(json.error)
            else {
               alert("Registrado correctamente"); 
               sesionIniciada[1](true);
               nav(Rutas.sesion.path)
            }
         })
         .catch(err => console.log(err))
   }
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
               <form className="rounded-5" onSubmit={e => { formulario(e) }}>
                  <h2 className="mb-3">Registrarse</h2>
                  <div className="">
                     <Input nombre="Nombre"
                        maxLength={50}
                        attributs={{
                           minLength: '0',
                           required: true,
                           name: 'InputLogupName',
                        }}
                     />
                     <Input nombre="Apellido Paterno"
                        maxLength={50}
                        attributs={{
                           minLength: '0',
                           required: true,
                           name: 'InputLogupSpelitP',
                        }}
                     />
                     <Input nombre="Apellido Materno"
                        maxLength={50}
                        attributs={{
                           minLength: '0',
                           required: true,
                           name: 'InputLogupSpelitM',
                        }}
                     />
                     <Input nombre="Correo Electronico"
                        maxLength={50}
                        attributs={{
                           type: 'email',
                           minLength: '0',
                           required: true,
                           name: 'InputLogupEmail',
                        }}
                     />
                     <Input nombre="Contraseña"
                        maxLength={50}
                        attributs={{
                           type: 'password',
                           minLength: '0',
                           required: true,
                           name: 'InputLogupPass',
                        }}
                     />
                  </div>
                  <Button
                     type='submit'
                     funcion={e => {
                        formulario(e)
                     }}
                  >Registrarse</Button>
                  <Button
                     type='button'
                     funcion={e => {
                        {nav(Rutas.login.path)}
                     }}
                     tipo="sec">
                        Iniciar Sesion
                  </Button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Logup;
