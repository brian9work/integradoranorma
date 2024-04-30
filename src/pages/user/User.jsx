import React, { useEffect, useState } from 'react'
import Header from '../Dashboard/Header'
import RutasBackend from '../../constants/RoutesBackend';

const BtnDisabled = ({bol,fn})=>{
    if(bol){
        return <button className='btn btn-danger' onClick={fn}>Suspender Cuenta</button>
    } else {
        return <button className='btn btn-primary' onClick={fn}>Activar Cuenta</button>
    }

}

export default function User() {
    const [disabled, setDisabled] = useState(1);
    const [load, setload] = useState(false);
    const [account, setaccount] = useState({});

    const disabledAccount= async()=>{
        const body = new FormData();
        if(disabled){
            if(window.confirm("Esta seguro de eliminar su cuenta")){
                body.append("email",window.prompt("Escriba su correo"))
                body.append("password",window.prompt("Escriba su contraseña"))
            }
        }

        await fetch(
                        RutasBackend.disabled + 
                        "?id_user=" + localStorage.getItem("iduser") +
                        "&status=" + !disabled
                    ,{
                        method: "POST",
                        body: body
                    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.success){
                alert(res.data)
            } else {
                alert("Error al suspender")
            }
        })
        .catch(err => { console.log(err) })
    }

    const myAccount = async () => {
        await fetch(RutasBackend.getUserById + "?id_user=" + localStorage.getItem("iduser"))
            .then(res => res.json())
            .then(res => {
                setaccount(res.data)
                setDisabled(res.data.user.status==="1" ? 1 : 0)
                console.log(disabled)
                setload(true)
            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        myAccount()
    }, [])
    return (
        <>
            <Header />
            {
                !load ? <></> :
                <div className="container mt-5">
                    <h3>Información de mi cuenta</h3>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <h5 className="form-control-static" id="nombre">
                            {account.user.name} {account.user.lastnameM} {account.user.lastnameF} 
                        </h5>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo electrónico:</label>
                        <h5 className="form-control-static" id="correo">
                            {account.user.email}
                        </h5>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección:</label>
                        <h5 className="form-control-static" id="direccion">
                            Calle: {account.address.main_street} x {account.address.street1} x {account.address.street2}
                            <br/>
                            {account.address.locality}, 
                            {account.address.state}, 
                            Mexico
                        </h5>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="carrito" className="form-label">Productos en Carrito:</label>
                        <h5 className="form-control-static" id="carrito">
                            {account.cart.cart}
                        </h5>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="comprados" className="form-label">Productos Comprados:</label>
                        <h5 className="form-control-static" id="comprados">
                            {account.sale.sale}
                        </h5>
                    </div>
                    <div className="mt-5">
                        <BtnDisabled bol={disabled} fn={e =>{disabledAccount()}} />
                        {/* // {btnDisabled(false,disabledAccount())} */}
                        {/* <button className='btn btn-danger'
                            onClick={e =>{
                                disabledAccount()
                            }}
                        >Suspender Cuenta</button> */}
                    </div>
                </div>
            }
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
        // <div>User</div>
    )
}
