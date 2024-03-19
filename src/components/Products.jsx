import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import RutasBackend from '../constants/RoutesBackend';


const Product = ({ id, url, name, price }) => {
    const addToCart = async ({id_user,id_product}) => {
        let data = new FormData()
        data.append("id_user", id_user)
        data.append("id_product", id_product)
        await fetch(RutasBackend.addToCart,{
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(json => {
                alert(json.data)
            console.log(json)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="card shadow-sm col-6 col-lg-3 col-md-4">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className='row'>
                    <div className='col-10'>
                        <h5 className="card-title fs-4">{name}</h5>
                        <h6 className="card-subtitle mb-2  fs-5" style={{ color: "#fe6347" }}>$ {price}</h6>
                    </div>
                    <div className="col-2 fs-1 text-end">
                        {/* {id} */}
                        <MdFavoriteBorder
                            onClick={e =>{
                                addToCart({
                                    id_user:sessionStorage.getItem('iduser'),
                                    id_product:id
                                })
                            }}
                        />
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
            <h1>{data.typeofProducts}</h1>
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
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;
