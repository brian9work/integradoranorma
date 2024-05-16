import React from 'react';
import { useNavigate } from "react-router-dom";
import { Input } from '../../../components/InputSec';
import Button from '../../../components/Button';
import RoutesBackend from '../../../constants/RoutesBackend';
import Rutas from '../../../constants/Routes';

const AddAdmin = () => {
    const regexPatterns = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\ ]{1,45}$/,
        apellidoPaterno: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\ ]{1,45}$/,
        apellidoMaterno: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\ ]{1,45}$/,
        correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,3}$/,
        contraseña: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,45}$/,
      };
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
  
        if(!regexPatterns.nombre.test(InputLogupName.value)) return alert("Nombre inválido")
        if(!regexPatterns.apellidoPaterno.test(InputLogupSpelitP.value)) return alert("Apellido paterno inválido")
        if(!regexPatterns.apellidoMaterno.test(InputLogupSpelitM.value)) return alert("Apellido materno inválido")
        if(!regexPatterns.correo.test(InputLogupEmail.value)) return alert("Correo inválido")
        if(!regexPatterns.contraseña.test(InputLogupPass.value)) return alert("Contraseña inválida")
  
  
        let data = new FormData()
        data.append("name", InputLogupName.value)
        data.append("spelitF", InputLogupSpelitP.value)
        data.append("spelitM", InputLogupSpelitM.value)
        data.append("email", InputLogupEmail.value)
        data.append("password", InputLogupPass.value)

        console.log(InputLogupName.value)
        console.log(InputLogupSpelitP.value)
        console.log(InputLogupSpelitM.value)
        console.log(InputLogupEmail.value)
        console.log(InputLogupPass.value)
  
        await fetch(RoutesBackend.addAdmin, {
           method: 'POST',
           body: data
        }).then(res => res.json())
           .then(json => {
            
            if(!json.success) alert(json.data)
            else {
                alert(json.data)
                console.log(json)
                nav(Rutas.admin.admins.origin)
            }
              // code
           })
           .catch(err => console.log(err))
     }
    return (
        <div className='container mt-5'>
            <h3 className='text-center'>Agregar Administrador</h3>
            <form action="">
               <form className="rounded-5" onSubmit={e => { formulario(e) }}>
                  <div className="">
                     <Input nombre="Nombre"
                        maxLength={45}
                        attributs={{
                           minLength: '1',
                           required: true,
                           name: 'InputLogupName',
                        }}
                     />
                     <Input nombre="Apellido paterno"
                        maxLength={45}
                        attributs={{
                           minLength: '1',
                           required: true,
                           name: 'InputLogupSpelitP',
                        }}
                     />
                     <Input nombre="Apellido materno"
                        maxLength={45}
                        attributs={{
                           minLength: '1',
                           required: true,
                           name: 'InputLogupSpelitM',
                        }}
                     />
                     <Input nombre="Correo electrónico"
                        maxLength={45}
                        attributs={{
                           type: 'email',
                           minLength: '1',
                           required: true,
                           name: 'InputLogupEmail',
                           pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
                        }}
                     />
                     <Input nombre="Contraseña"
                        maxLength={45}
                        attributs={{
                           type: 'password',
                           minLength: '1',
                           required: true,
                           name: 'InputLogupPass',
                        }}
                     />
                     <div>
                        <ul>
                           <li><small>Al menos 8 caracteres de longitud.</small></li>
                           <li><small>Al menos una letra minúscula.</small></li>
                           <li><small>Al menos una letra mayúscula.</small></li>
                           <li><small>Al menos un dígito.</small></li>
                           <li><small>Al menos un carácter especial (!@#$%^&*).</small></li>
                        </ul>
                     </div>
                  </div>
                  <Button
                     type='submit'
                     funcion={e => {
                        formulario(e)
                     }}
                  >Registrar</Button>
               </form>
            </form>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default AddAdmin;
