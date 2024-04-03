import React, { useContext } from 'react';
import SaoContext from './Context';
import { useNavigate } from "react-router-dom";
import Rutas from '../constants/Routes';

const Index = () => {
    const { sesionIniciada} = useContext(SaoContext);
    let nav = useNavigate();
    if(!sesionIniciada[0]){
        nav(Rutas.login.path)
    }
    return (
        <div>
            <h1>Index</h1>
            {sesionIniciada[0] ? "Sesion Iniciada" : "Error en la sesion"}
            <br/>
            <button
                onClick={e =>{
                    sesionIniciada[1](false)
                }}
            >Cerrar Sesion</button>
        </div>
    );
}

export default Index;
