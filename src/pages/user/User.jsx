import { useEffect, useState } from 'react'
import Header from '../Dashboard/Header'
import RutasBackend from '../../constants/RoutesBackend';
import ChanguePassword from './ChanguePassword';

const BtnDisabled = ({bol,fn})=>{
    if(bol){
        return <button className='btn btn-danger' onClick={fn}>Suspender Cuenta</button>
    } else {
        return <button className='btn btn-primary' onClick={fn}>Activar Cuenta</button>
    }

}

export default function User() {
    const [page, setPage] = useState(0);
    const [disabled, setDisabled] = useState(1);
    const [load, setload] = useState(false);
    const [account, setaccount] = useState({});

    const disabledAccount= async()=>{
        const body = new FormData();
        if(disabled){
            body.append("email",window.prompt("Escriba su correo"))
            body.append("password",window.prompt("Escriba su contraseña"))
            
            if(!window.confirm("¿Esta seguro de suspender su cuenta?")){
                return;
            }
        }

            await fetch(
                    RutasBackend.disabled + 
                    "?id_user=" + localStorage.getItem("iduser") +
                    "&status=" + !disabled
                ,{
                    method: "POST",
                    body: body
                }
            )
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(!res.success) {
                    alert("Error al suspender")
                }
                alert(res.data)
                window.location.reload()
            })
            .catch(err => { console.log(err) })
        
    }
    const changePassword = async()=>{
        // if(window.confirm("¿Esta seguro de cambiar su contraseña?")){
            setPage(1)
        // }
    }

    const myAccount = async () => {
        await fetch(RutasBackend.getUserById + "?id_user=" + localStorage.getItem("iduser"))
            .then(res => res.json())
            .then(res => {
                setPage(0)
                setaccount(res.data)
                setDisabled(res.data.user.status==="1" ? 1 : 0)
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
                page === 1 ? <ChanguePassword setPage={setPage} />:
                !load ? <></> :
                <div className="container mt-5">
                    <h3>Información de mi cuenta</h3>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <h5 className="form-control-static" id="nombre">
                            {account.user.name} {account.user.lastnameF} {account.user.lastnameM} 
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
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3">
                            <BtnDisabled bol={disabled} fn={() =>{disabledAccount()}} />
                        </div>
                        <div className="col-4 col-lg-3">
                            <button className='btn btn-warning' 
                                onClick={() => {changePassword()}}
                            >Cambiar Contraseña</button>
                        </div>
                    </div>
                </div>
            }
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
        // <div>User</div>
    )
}
