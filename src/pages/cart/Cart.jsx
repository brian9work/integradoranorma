import React, { useEffect, useState } from 'react';
import RutasBackend from '../../constants/RoutesBackend';
import Rutas from '../../constants/Routes';
import Header from '../Dashboard/Header';
import Button from '../../components/Button';
import { useNavigate, useParams } from 'react-router-dom'

const Product = ({ data }) => {
    const [pz, setPz] = useState(parseInt(data.quantity))
    let nav = useNavigate();
    const deleteProduct = (id_product) => {
        const comp = document.getElementById("productInCart" + id_product)

        let data = new FormData()
        data.append("id_user", localStorage.getItem("iduser"))
        data.append("id_product", id_product)
        fetch(RutasBackend.remove, {
            method: "POST",
            body: data,
        })
            .then(res => res.json())
            .then(json => {
                alert(json.data)
                if (json.success) {
                    comp.parentNode.removeChild(comp)
                    // window.location.reload()
                }
            })
            .catch(err => console.log(err))
    }
    const quantity = (type, id_product) => {
        let data = new FormData()
        data.append("id_user", localStorage.getItem("iduser"))
        data.append("id_product", id_product)
        data.append("add", type)
        fetch(RutasBackend.quantity, {
            method: "POST",
            body: data,
        })
            .then(res => res.json())
            .then(json => {
                alert(json.data)
                if (json.success) {
                    setPz(type ? pz + 1 : pz - 1)
                    // data={
                    //     ...data,
                    //     quantity:5
                    // }
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='productCartSao shadow-sm mb-4 py-2 px-3 rounded-3 row'
            id={'productInCart' + data.id_product}
            >
            <div className='col-lg-4 col-md-4 col-12 productCartSaoImg'
                style={{ backgroundImage: `url(${RutasBackend.imagenes}${data.imagen})` }}
            >
            </div>
            <div className="col-lg-5 col-md-5 col-12 mt-3 mt-md-0">
                <h5>{data.name}</h5>
                <p>{data.description}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-12 row mt-3 mt-lg-0" style={{ height: "50%" }}>
                <span className='col-12 '>Costo: <b>$ {data.price}</b></span>
                <span className='col-12 mb-3'>Total: <b> ${data.price * pz}</b></span>
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <span className="input-group-text"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            quantity(0, data.id_product)
                        }}
                    >-</span>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center bg-white">
                    <span className="input-group-text">{pz}</span>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <span className="input-group-text"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            quantity(1, data.id_product)
                        }}
                    >+</span>
                </div>
                <button className='btn btn-danger mt-3'
                    onClick={(e) => {
                        deleteProduct(data.id_product)
                    }}
                >Eliminar</button>
            </div>
        </div>
    )
}

const Cart = () => {
    let nav = useNavigate();
    const [products, serProducts] = useState([])
    const [paymenMethods, serPaymenMethods] = useState([])
    const getProducts = async () => {
        let data = new FormData()
        data.append("id_user", localStorage.getItem("iduser"))
        await fetch(RutasBackend.getCart, {
            method: "POST",
            body: data,
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (!json.success) {
                    alert(json.data)
                    // nav(Rutas.store.origin)
                    return
                }
                if (json.data.length <= 0) {
                    alert("Carrito vacio por favor escoja algo")
                    nav(Rutas.store.origin)
                    return
                }
                serProducts(json.data)
            })
            .catch(err => console.log(err))
    }
    const getBrands = async () => {
        await fetch(RutasBackend.getAllPaymentMethods)
            .then(res => res.json())
            .then(json => {
                serPaymenMethods(json.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getProducts()
        getBrands()
    }, [])
    return (
        <>
            <Header />
            <div className="container my-5 pd-5 row mx-auto" style={{ maxWidth: '1100px' }}>
                <h5 className='col-12' >Todos los productos</h5>
                <div className="container mb-5 col-12 col-md-7">
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
                <div className="container mb-5 shadow-sm py-3 col-12 col-md-4">
                    <h5>Resumen del pedido:</h5>
                    <div className="row">
                        <div className="col-4">
                            <p>Total:</p>
                        </div>
                        <div className="col-8 text-end row">
                            <p>$
                                {(products) &&
                                    <>
                                        {products.reduce((acc, cur) => {
                                            return (parseFloat(acc) + (parseFloat(cur.price) * parseFloat(cur.quantity))).toFixed(2);
                                        }, 0)}
                                    </>
                                }
                            </p>
                        </div>
                    </div>
                    <Button
                        funcion={() => {
                            nav(Rutas.sales.buy)
                        }}
                    >Pagar</Button>
                    <div className="mt-4">
                        <p>Métodos de pago:</p>
                        <div className="row mt-2">
                            {paymenMethods.map((pm, index) => {
                                return (
                                    <div className="col" key={index}>
                                        <img src={pm.imagen} alt={pm.payment_method} />
                                        {/* <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={"flexRadioDefault"+index} />
                                            <label className="form-check-label" htmlFor={"flexRadioDefault"+index}>
                                                {pm.payment_method}
                                            </label>
                                        </div> */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
