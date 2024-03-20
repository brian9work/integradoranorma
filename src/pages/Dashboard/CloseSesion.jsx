import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Rutas from '../../constants/Routes';

const CloseSesion = () => {
    let nav = useNavigate();
    sessionStorage.removeItem("is_user")
    sessionStorage.removeItem("sesion")
    sessionStorage.removeItem("iduser")
    useEffect(()=>{
        nav(Rutas.login.path)
    },[])
    return (
        <div>
            <h1>Cerrando Sesion</h1>
        </div>
    );
}

export default CloseSesion;
