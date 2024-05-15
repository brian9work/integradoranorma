import React from 'react';
// import { MdFavoriteBorder } from "react-icons/md";
import RutasBackend from '../constants/RoutesBackend';
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom'
import Button from './Button';
import Rutas from '../constants/Routes';


const Product = ({ id, url, name, price, gif }) => {
    const nav = useNavigate();
    const addToCart = async ({ id_user, id_product }) => {
        let data = new FormData()
        data.append("id_user", id_user)
        data.append("id_product", id_product)
        await fetch(RutasBackend.addToCart, {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(json => {
                if(!json.success){
                    alert(json.data)
                    nav(Rutas.logup.path)
                    return;
                }
                alert(json.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container-fluid col-6 col-lg-3 col-md-4 mb-4">
            <div className="card shadow-sm pt-3 rounded-4">
                <img src={RutasBackend.imagenes+url} className="card-img-top" alt={url} 
                    style={{ width: "100%", height: "150px" }}
                    onClick={e => {
                        nav(Rutas.store.viewProduct + "/" + id)
                    }}
                />
                <div className="card-body">
                    <div className='row'>
                        <div className='col-12'>
                            <h5 className="card-title fs-6">{name}</h5>
                            <h6 className="card-subtitle mb-2 fs-6" style={{ color: "#fe6347" }}>$ {price}</h6>
                            <b>{gif ? <button className='btn btn-light border'>Gif</button> : ""}</b>
                        </div>
                        <div className="col-12 fs-1 text-end" style={{ cursor: "pointer" }}>
                            <Button
                                funcion={e => {
                                    addToCart({
                                        id_user: localStorage.getItem('iduser'),
                                        id_product: id
                                    })
                                }}
                            >
                                Agregar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className="card shadow-sm p-4 col-6 col-lg-3 col-md-4">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fs-3">{name}</h5>
                <h6 className="card-subtitle mb-2  fs-5" style={{ color: "#fe6347" }}>$ {price}</h6>
            </div>
        </div>
    )
}

const Products = ({ data }) => {
    return (
        <div className='mt-5 container mx-auto'>
            <h3>{data.typeofProducts}</h3>
            <div className=" row">
                {
                    data.data.map((product, index) => {
                        return (
                            <Product
                                key={index}
                                id={product.id}
                                url={product.imagen}
                                name={product.name}
                                price={product.price}
                                gif={product.isGif}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;
