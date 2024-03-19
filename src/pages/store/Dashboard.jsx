import React, { useState, useEffect } from 'react';
import Header from '../Dashboard/Header';
import Presentation from '../Dashboard/Presentation';
import Categorias from '../Dashboard/Categorias';
import { useNavigate, useParams } from 'react-router-dom'
import RutasBrackend from '../../constants/RoutesBackend'
import Products from '../../components/Products';

const tipoDeTienda = () => {
    const { type } = useParams()
    if (type === "electronica") return ["e", (RutasBrackend.store + "?category=2")]
    if (type === "moviliario") return ["m", (RutasBrackend.store + "?category=3")]
    if (type === "ofertas") return ["o", (RutasBrackend.store + "?category=4")]

    return ["", (RutasBrackend.store + "?category=1")]
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
            console.log(json.data)
            setProducts(json.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProducts(ruta)
    },[ruta])

    return (
        <>
            <Header />
            <Presentation i={imagen} />
            <Categorias />
            {
                (!products) ? <h2 className='mt-5'>Cargando</h2> : 
                    <Products 
                        data={{
                            typeofProducts: "Recomendados",
                            data: products
                        }}
                    />
            }
            <h2 className='mt-5'>Cargando</h2>
        </>
    );
}

export default Dashboard;
