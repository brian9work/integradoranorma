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
                setProducts(data.data)
            })
            .catch(err => console.log(err))
    }
    const deleteProduct = async (target, id, name) => {
        // console.log(target)
        // const comp=document.getElementById("productoAdmin"+id)
        if (confirm("¿Esta seguro de eliminar el producto?: " + name))
            await fetch(RutasBackend.deleteProduct + "?id_product=" + id)
                .then(res => res.json())
                .then(data => {
                    alert(data.data)
                    // if(data.success) {
                    //     comp.parentNode.removeChild(comp)
                    // }
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
            <div className="table-responsive">
                <table className="table table-striped shadow-sm">
                    <thead>
                        <tr className=''>
                            <th className='py-3' >#</th>
                            <th className='py-3' >Nombre</th>
                            <th className='py-3' >Categoría</th>
                            <th className='py-3' >Stock</th>
                            <th className='py-3' >Detalles del producto</th>
                            <th className='py-3' >Precio</th>
                            <th className='py-3' >Imagen</th>
                            <th className='py-3' ></th>
                            <th className='py-3' ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!products) ?
                            <td className='text-center py-4' colSpan="7">
                                <h4>Cargando ... </h4>
                            </td> :
                            products.map((product, index) => (
                                <tr key={index} id={'productoAdmin' + product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.description}</td>
                                    <td>$ {product.price} MXN</td>
                                    <td><img src={RutasBackend.imagenes + product.imagen} alt={product.imagen} style={{ width: '50px' }} /></td>
                                    <td>
                                        <button className="btn btn-primary"
                                            onClick={() => {
                                                nav(Rutas.admin.products.update + product.id)
                                            }}
                                        >Editar</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={(e) => {
                                                deleteProduct(
                                                    e.target,
                                                    product.id,
                                                    product.name
                                                )
                                            }}
                                        >Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Product;
