import React from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Rutas from '../../../constants/Routes';

const Nav = ({path,children="Sin nombre"}) => {
    let nav = useNavigate();
    return (
        <div className="container mt-5 mb-2" style={{cursor:"pointer"}}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb p-3 bg-body-tertiary rounded-3">
                    <li className="breadcrumb-item">
                        <a className="link-body-emphasis" href="#">
                            <TiHomeOutline />
                            <span className="visually-hidden">Home</span>
                        </a>
                    </li>
                    <li className="breadcrumb-item"
                        onClick={() =>{
                            nav(Rutas.admin.origin)
                        }}
                    >
                        <span className="link-body-emphasis fw-semibold text-decoration-none" href="#">Admin</span>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page"
                        onClick={() =>{
                            nav(path)
                        }}
                    >
                        {children}
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default Nav;
