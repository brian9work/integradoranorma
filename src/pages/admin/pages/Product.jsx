import React, { useEffect, useState } from 'react';
import RutasBackend from '../../../constants/RoutesBackend';
import Rutas from '../../../constants/Routes';
import { useNavigate } from "react-router-dom";

const Product = () => {
    let nav = useNavigate();
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        await fetch(RutasBackend.getAllProducts)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.data)
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 mb-2">
                    <h3>Productos</h3>
                </div>
            </div>
            <table className="table table-striped shadow-sm">
                <thead>
                    <tr className=''>
                        <th className='py-3' >#</th>
                        <th className='py-3' >Nombre</th>
                        <th className='py-3' >Categoria</th>
                        <th className='py-3' >Cantidad</th>
                        <th className='py-3' >Detalles</th>
                        <th className='py-3' >Precio</th>
                        <th className='py-3' >Imagen</th>
                        <th className='py-3' >Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {(!products) ?
                        <td className='text-center py-4' colSpan="7">
                            <h4>Cargando ... </h4>
                        </td> :
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.stock}</td>
                                <td>{product.description}</td>
                                <td>$ {product.price} MXN</td>
                                <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => {
                                            nav(Rutas.admin.products.add+"?id="+product.id)
                                        }}
                                    >Editar</button>
                                    <button className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Product;
