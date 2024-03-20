import React from 'react';
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

const typeOfPage = () => {
    const { page } = useParams()
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
    return (
        <>
        <Header />
        {typeOfPage()}
        </>
    );
}

export default Admin;
