import React, { useEffect, useState } from 'react'
import Header from '../Dashboard/Header'
import RutasBackend from '../../constants/RoutesBackend';
import { Button, Input } from '../../components/InputSec';

export default function ChanguePassword({setPage}) {
    const changuePassword = async (e) => {
        e.preventDefault();
        const form = e.target
        let [
            password1, password2
        ] = form

        console.log(e.target)
        if (password1.value !== password2.value) { return alert('Las contraseñas no coinciden') }
        else {
            console.log("coinciden")
        }
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,45}$/

        if (!regex.test(password1.value)) return alert("Contraseña inválida.\nPor favor revise que cumpla con las condiciones necesarias")

        const body = new FormData();
        body.append("id_user", localStorage.getItem("iduser"))
        body.append("password", password1.value)

        await fetch(RutasBackend.changuePassword,{
                method: "POST",
                body: body
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.success) {
                    alert(res.data)
                    setPage(0)
                } else {
                    alert("Error al cambiar contraseña")
                }
            })
            .catch(err => { console.log(err) })




        // let newPassword = window.prompt(`Escriba su nueva contraseña\nAl menos 8 caracteres de longitud.\nAl menos una letra minúscula.\nAl menos una letra mayúscula.\nAl menos un dígito.\nAl menos un carácter especial (!@#$%^&*).`);


        // if(!regexPatterns.contraseña.test(InputLogupPass.value)) return alert("Contraseña inválida")

        // if()

        //     return 
        //     body.append("password",window.prompt("Escriba su contraseña"))
        //     await fetch(
        //         RutasBackend.disabled + 
        //         "?id_user=" + localStorage.getItem("iduser")
        //     ,{
        //         method: "POST",
        //         body: body
        //     })
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //         if(res.success){
        //             alert(res.data)
        //         } else {
        //             alert("Error al cambiar contraseña")
        //         }
        //     })
        //     .catch(err => { console.log(err) })
    }
    return (
        <div className='container mx-auto my-5'>
            <form className='container- mx-auto'
                onSubmit={
                    e => { changuePassword(e) }
                }>
                <h3>Cambiar Contraseña</h3>
                <div className="container- mx-auto">
                    <div className="row mx-auto" >
                        <div
                            className="col-12 col-md-6 ">
                            <Input
                                nombre="Contraseña"
                                maxLength={45}
                                attributs={{
                                    type: 'text',
                                    minLength: '0',
                                    required: true,
                                    name: 'password1',
                                    placeholder: ""
                                }}
                            />
                        </div>
                        <div
                            className="col-12 col-md-6 ">
                            <Input
                                nombre="Confirmar Contraseña"
                                maxLength={45}
                                attributs={{
                                    type: 'text',
                                    minLength: '0',
                                    required: true,
                                    name: 'password2',
                                    placeholder: ""
                                }}
                            />
                        </div>
                        <div className='mb-3'>
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
                    // funcion={e =>{createReport(e)}}
                    >
                        Cambiar Contraseña
                    </Button>
                </div>
            </form>
        </div>
    )
}
