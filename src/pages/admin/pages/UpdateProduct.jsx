import React, { useEffect, useState } from 'react';
import { Input, Select, Button } from '../../../components/InputSec';
import RutasBackend from '../../../constants/RoutesBackend';
import { useNavigate, useParams } from 'react-router-dom'
import Rutas from '../../../constants/Routes';
// import Button from '../../../components/Button';

const UpdateProduct = () => {
    let nav = useNavigate();
    const { page } = useParams()
    const id_product = window.location.search.split("?")[1]
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])


    const traerProducto = async () => {
        const data = new FormData()
        await fetch(RutasBackend.getProductById + "?id_product=" + id_product, {
            method: 'POST',
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                const d = data.data[0]
                if (!data.success) {
                    alert("Hubo un error al traer el producto verifique el id")
                    nav(Rutas.admin.products.getAll)
                }
                const {
                    selectCategory,
                    selectBrand,
                    InputName,
                    InputDescription,
                    InputSpecification,
                    InputDimencions,
                    InputQuantity,
                    InputPrice,
                } = document.getElementById("formUpdateProduct")
                selectCategory.innerHTML = `<option value="${d.id_category}">${d.category}</option>`
                selectBrand.innerHTML = `<option value="${d.id_brand}">${d.brand}</option>`
                InputName.value = d.name
                InputDescription.value = d.description
                InputSpecification.value = d.specifications
                InputDimencions.value = d.dimensions
                InputQuantity.value = d.stock
                InputPrice.value = d.price
                document.getElementById("imagen").setAttribute("src",d.imagen)
            })
            .catch(err => console.log(err))
    }
    const UpdateProduct = async (e) => {
        e.preventDefault()
        const form = e.target
        const {
            selectCategory,
            selectBrand,
            InputName,
            InputDescription,
            InputSpecification,
            InputDimencions,
            InputQuantity,
            InputPrice,
        } = form

        const data = new FormData()
        data.append("id", id_product)
        data.append("id_category", selectCategory.value)
        data.append("id_brand", selectBrand.value)
        data.append("name", InputName.value)
        data.append("imagen", "")
        data.append("description", InputDescription.value)
        data.append("specifications", InputSpecification.value)
        data.append("dimensions", InputDimencions.value)
        data.append("stock", InputQuantity.value)
        data.append("price", InputPrice.value)
        data.append("discount", "0.0")

        await fetch(RutasBackend.updateProduct, {
            method: 'POST',
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success) {
                    alert("Producto editado correctamente")
                    nav(Rutas.admin.products.getAll)
                }
                console.log(data)
                // setBrands(data.data)
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        traerProducto()
    }, [])
    return (
        <div className='container'>
            <form className='shadow-sm py-4 px-2' method='POST' onSubmit={e => { UpdateProduct(e) }} id='formUpdateProduct'>
                <div className="container mx-auto" style={{ widows: "90%" }}>
                    <h5>Editar Producto: {id_product} </h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 row mt-4 mb-3">
                                <div className="col-6 mx-auto">
                                    <img src="" alt="" style={{width:"100%",height:"100px"}} id='imagen' />
                                </div>
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                {
                                    <Select
                                        nombre={"Categoria:"}
                                        data={categories}
                                        name="selectCategory"
                                    ></Select>
                                }
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                {
                                    <Select
                                        nombre={"Marca:"}
                                        data={brands}
                                        name="selectBrand"
                                    ></Select>
                                }
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                <Input
                                    nombre="Nombre:"
                                    maxLength={50}
                                    attributs={{
                                        type: 'text',
                                        minLength: '0',
                                        required: true,
                                        name: 'InputName',
                                        placeholder: ""
                                    }}
                                />
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                <Input
                                    nombre="Descripcion:"
                                    maxLength={500}
                                    attributs={{
                                        type: 'text',
                                        minLength: '0',
                                        required: true,
                                        name: 'InputDescription',
                                        placeholder: ""
                                    }}
                                />
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                <Input
                                    nombre="Especificaciones:"
                                    maxLength={50}
                                    attributs={{
                                        type: 'text',
                                        minLength: '0',
                                        required: true,
                                        name: 'InputSpecification',
                                        placeholder: ""
                                    }}
                                />
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                <Input
                                    nombre="Dimenciones:"
                                    maxLength={50}
                                    attributs={{
                                        type: 'text',
                                        minLength: '0',
                                        name: 'InputDimencions',
                                        placeholder: ""
                                    }}
                                />
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                <Input
                                    nombre="Cantidad:"
                                    maxLength={50}
                                    attributs={{
                                        type: 'number',
                                        minLength: '0',
                                        // required: true,
                                        name: 'InputQuantity',
                                        placeholder: "1"
                                    }}
                                />
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                <Input
                                    nombre="Precio:"
                                    maxLength={50}
                                    attributs={{
                                        type: 'text',
                                        minLength: '0',
                                        // required: true,
                                        name: 'InputPrice',
                                        placeholder: ""
                                    }}
                                />
                            </div>
                            <Button
                                funcion={e => {
                                    addProduct(e)
                                }}>
                                Editar Producto
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default UpdateProduct;
