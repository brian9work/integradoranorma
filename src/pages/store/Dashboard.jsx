import React, { useState, useEffect } from 'react';
import Header from '../Dashboard/Header';
import Presentation from '../Dashboard/Presentation';
import Categorias from '../Dashboard/Categorias';
import { useNavigate, useParams } from 'react-router-dom'
import RutasBrackend from '../../constants/RoutesBackend'
import Products from '../../components/Products';
import Loader from '../../components/Loader';
import Recommendations from '../../components/Recommendations';
import Rutas from '../../constants/Routes';
import RutasBackend from '../../constants/RoutesBackend';

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
    const [recomendations, setRecomendations] = useState([])

    const getProducts = async (ruta)=>{
        await fetch(ruta,{
            method: "GET",
        })
        .then(res => res.json())
        .then(json => {
            setProducts(json.data)
        })
        .catch(err => console.log(err))
    }
    const getRecommnedations = async ()=>{
        await fetch(RutasBackend.recommendations+"?id_user="+localStorage.getItem("iduser"),{
            method: "GET",
        })
        .then(res => res.json())
        .then(json => {
            if(json.success === false) {
                return console.log(json.data)
            }
            setRecomendations(json.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProducts(ruta)
        getRecommnedations()
    },[ruta])

    return (
        <>
            <Header />
            <Presentation i={imagen} />
            <Categorias />
            {
                (!recomendations) ? <Loader /> : 
                <Products 
                    data={{
                        typeofProducts: "Recomendaciones:",
                        data: recomendations
                    }}
                />
            }
            {
                (!products) ? <Loader /> : 
                    <Products 
                        data={{
                            typeofProducts: "Productos:",
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
