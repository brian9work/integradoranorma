import { useContext, useEffect } from 'react';
import Images from '../assets/Images';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import Rutas from '../constants/Routes';
import RoutesBackend from '../constants/RoutesBackend';
import SaoContext from './Context';

const Login = () => {
   // const regexPatterns = {
   //    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]{1,45}$/,
   //    apellidoPaterno: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]{1,45}$/,
   //    apellidoMaterno: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]{1,45}$/,
   //    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,3}$/,
   //    contraseña: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,45}$/,
   //  };
   const { sesionIniciada } = useContext(SaoContext);

   let nav = useNavigate();
   const formulario = async (e) => {
      e.preventDefault()
      const form = e.target.parentElement.parentElement
      const {
         InputLoginEmail,
         InputLoginPass,
      } = form

      // if(!regexPatterns.correo.test(InputLoginEmail.value)) return alert("Correo inválido")
      // if(!regexPatterns.contraseña.test(InputLoginPass.value)) return alert("Contraseña inválida")

      let data = new FormData()
      data.append("email", InputLoginEmail.value)
      data.append("password", InputLoginPass.value)


      await fetch(RoutesBackend.iniciarSesion, {
         method: 'POST',
         body: data
      }).then(res => res.json())
         .then(json => {
            if(!json.success) return alert(json.data)

            alert("Sesión iniciada correctamente");
            sesionIniciada[1](1===1);
            // console.log(sesionIniciada)
            // console.log(sesionIniciada[1]())
            // console.log(sesionIniciada[0])
            nav(Rutas.store.origin)
            localStorage.setItem("sesion", 1)
            localStorage.setItem("iduser", json.id)
            localStorage.setItem("is_user", json.is_user)
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
                        maxLength={45}
                        attributs={{
                           type: 'email',
                           minLength: '0',
                           required: true,
                           name: 'InputLoginEmail',
                        }}
                     />
                     <Input
                        nombre="Contraseña"
                        maxLength={45}
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
                     funcion={()=> {
                        { nav(Rutas.logup.path) }
                     }}
                  >
                  </Button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Login;
