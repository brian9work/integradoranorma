import React, { useEffect } from 'react';
import Header from './Dashboard/Header';
import Rutas from '../constants/Routes';
import { FaRegAddressCard, FaRegAddressBook } from "react-icons/fa";
import { PiStorefrontBold } from "react-icons/pi";
import Dashboard from './admin/pages/Dashboard';
import { useNavigate, useParams } from 'react-router-dom'
import RutasBrackend from '../constants/RoutesBackend'
import Product from './admin/pages/Product';
import AddProduct from './admin/pages/AddProduct';
import Nav from './admin/components/Nav';
import UpdateProduct from './admin/pages/UpdateProduct';
import Brands from './admin/pages/Brands';
import AllUsers from './admin/pages/AllUsers';
import Sales from './admin/pages/Sales';
import Admins from './admin/pages/Admins';
import Report from './admin/pages/Report';

const typeOfPage = () => {
    const { page } = useParams()
    if (page === "admins") return (
        <>
            <Nav>Administradores</Nav>
            <Admins/>
        </>
    )
    if (page === "sales") return (
        <>
            <Nav>Ventas</Nav>
            <Sales/>
        </>
    )
    if (page === "users") return (
        <>
            <Nav>Usuarios</Nav>
            <AllUsers/>
        </>
    )
    if (page === "brands") return (
        <>
            <Nav>Marca</Nav>
            <Brands/>
        </>
    )
    if (page === "products") return (
        <>
            <Nav>Productos</Nav>
            <Product/>
        </>
    )
    if (page === "addproduct") return (
        <>
            <Nav>Agregar Producto</Nav>
            <AddProduct />
        </>
    )
    if (page === "reports") return (
        <>
            <Nav> Generar reporte</Nav>
            <Report />
        </>
    )
    const tmpPage = page.split("?")
    if (tmpPage[0] === "updateproduct") return (
        <>
            <Nav>Editar Producto</Nav>
            <UpdateProduct />
        </>
    )

    return (
        <>
            <Nav>Panel</Nav>
            <Dashboard />
        </>
    )
}

const Admin = () => {
    let nav = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("iduser")!=="1"){
            nav(Rutas.store.origin)
        }
    },[])
    
    return (
        <>
        <Header />
        {typeOfPage()}
        </>
    );
}

export default Admin;
