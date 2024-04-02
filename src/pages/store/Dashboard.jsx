import React, { useState, useEffect, useContext } from 'react';
import Header from '../Dashboard/Header';
import Presentation from '../Dashboard/Presentation';
import Categorias from '../Dashboard/Categorias';
import { useNavigate, useParams } from 'react-router-dom'
import RutasBrackend from '../../constants/RoutesBackend'
import Products from '../../components/Products';
import Loader from '../../components/Loader';
import SaoContext from '../Context';

const tipoDeTienda = () => {
    const { type } = useParams()
    if (type === "papeleria") return ["", (RutasBrackend.store + "?category=1")]
    if (type === "electronica") return ["e", (RutasBrackend.store + "?category=2")]
    if (type === "moviliario") return ["m", (RutasBrackend.store + "?category=3")]
    if (type === "ofertas") return ["o", (RutasBrackend.store + "?category=4")]

    return ["", (RutasBrackend.store + "?category=0")]
}

const Dashboard = () => {
    const [imagen, ruta] = tipoDeTienda();
    const [products, setProducts] = useState([])

    const getProducts = async (ruta)=>{
        await fetch(ruta,{
            method: "GET",
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setProducts(json.data)
        })
        .catch(err => console.log(err))
    }

    // const { sesionIniciada } = useContext(SaoContext);
    // let nav = useNavigate();
    useEffect(() => {
        getProducts(ruta)
    },[ruta])
    // useEffect(() => {
    //    if (!sesionIniciada[0]) {
    //       nav(Rutas.login.path)
    //    }
    // }, [])

    return (
        <>
            <Header />
            <Presentation i={imagen} />
            <Categorias />
            {
                (!products) ? <Loader /> : 
                    <Products 
                        data={{
                            typeofProducts: "Recomendados",
                            data: products
                        }}
                    />
            }
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
}

export default Dashboard;
