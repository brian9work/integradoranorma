import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Rutas from '../../constants/Routes';
import SaoContext from '../Context';

const CloseSesion = () => {
    let nav = useNavigate();
    const { sesionIniciada } = useContext(SaoContext);
    localStorage.removeItem("is_user")
    localStorage.removeItem("sesion")
    localStorage.removeItem("iduser")
    useEffect(()=>{
        nav(Rutas.login.path)
        sesionIniciada[1](false)
    },[])
    return (
        <div>
            <h1>Cerrando Sesion</h1>
        </div>
    );
}

export default CloseSesion;
