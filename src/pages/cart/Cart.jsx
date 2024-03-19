import React, { useEffect, useState } from 'react';
import RutasBackend from '../../constants/RoutesBackend';
import Header from '../Dashboard/Header';
import Button from '../../components/Button';

const Product = ({ data }) => {
    const deleteProduct = (id_product)=>{
        let data = new FormData()
        data.append("id_user", sessionStorage.getItem("iduser"))
        data.append("id_product", id_product)
        fetch(RutasBackend.remove, {
            method: "POST",
            body: data,
        })
        .then(res => res.json())
        .then(json => {
            alert(json.data)
            if(json.success) window.location.reload()
            console.log(json)
        })
        .catch(err => console.log(err))
    }
    const quantity = (type,id_product)=>{
        let data = new FormData()
        data.append("id_user", sessionStorage.getItem("iduser"))
        data.append("id_product", id_product)
        data.append("add", type)
        fetch(RutasBackend.quantity, {
            method: "POST",
            body: data,
        })
        .then(res => res.json())
        .then(json => {
            alert(json.data)
            if(json.success) window.location.reload()
            console.log(json)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='productCartSao shadow-sm mb-4 py-2 px-3 rounded-3 row' style={{maxHeight:"250px"}}>
            <div className='col-4 productCartSaoImg'
                style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png)'}}
            >
            </div>
            <div className="col-5">
                <h5>{data.name}</h5>
                <p>{data.description}</p>
            </div>
            <div className="col-3 row" style={{ height: "50%" }}>
                <span className='col-12 '>Costo: <b>$ {data.price}</b></span>
                <span className='col-12 mb-3'>Total: <b> ${data.price * data.quantity}</b></span>
                <span className="input-group-text col-4"
                    style={{cursor: 'pointer'}}
                    onClick={()=>{
                        quantity(0,data.id_product)
                    }}
                >-</span>
                <span className="input-group-text col-4 bg-white">{data.quantity}</span>
                <span className="input-group-text col-4"
                    style={{cursor: 'pointer'}}
                    onClick={()=>{
                        quantity(1,data.id_product)
                    }}
                >+</span>
                <button className='btn btn-danger mt-3'
                    onClick={()=>{
                        deleteProduct(data.id_product)
                    }}
                >Eliminar</button>
            </div>
        </div>
    )
}

const Cart = () => {
    const [products, serProducts] = useState([])
    const getProducts = async () => {
        let data = new FormData()
        data.append("id_user", sessionStorage.getItem("iduser"))
        await fetch(RutasBackend.getCart, {
            method: "POST",
            body: data,
        })
            .then(res => res.json())
            .then(json => {
                console.log(json.data)
                serProducts(json.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <Header />
            <div className="container my-5 pd-5 row mx-auto" style={{maxWidth:'1100px'}}>
                <h5>Todos los productos</h5>
                <div className="container mb-5 col-7">
                    {(!products) ? <h2>Cargando</h2> :
                        products.map((product, index) => {
                            return (
                                <Product
                                    key={index}
                                    data={product}
                                />
                            )
                        })
                    }
                </div>
                <div className="container mb-5 shadow-sm pt-3 col-4">
                    <h5>Resumen del Pedido:</h5>
                    <div className="row">
                        <div className="col-8">
                            <p>Total:</p>
                        </div>
                        <div className="col-4">
                            <p>$
                                {(!products) ? <>-</> :
                                    <>
                                        {products.reduce((acc, cur) => {
                                            return parseInt(acc) + parseInt(cur.price)
                                        }, 0)}
                                    </>
                                }
                            </p>
                        </div>
                    </div>
                    <Button>Pagar</Button>
                </div>
            </div>
        </>
    );
}

export default Cart;
