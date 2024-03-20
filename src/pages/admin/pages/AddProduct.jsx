import React, { useEffect, useState } from 'react';
import { Input, Select,Button } from '../../../components/InputSec';
import RutasBackend from '../../../constants/RoutesBackend';
// import Button from '../../../components/Button';

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    const getCategories = async () => {
        await fetch(RutasBackend.getCategories)
            .then(res => res.json())
            .then(data => setCategories(data.data))
            .catch(err => console.log(err))
    }
    const getBrands = async () => {
        await fetch(RutasBackend.getBrands)
            .then(res => res.json())
            .then(data => setBrands(data.data))
            .catch(err => console.log(err))
    }
    const addProduct = async (e) => {
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
        data.append("id_category",selectCategory.value)
        data.append("id_brand",selectBrand.value)
        data.append("name",InputName.value)
        data.append("imagen","")
        data.append("description",InputDescription.value)
        data.append("specifications",InputSpecification.value)
        data.append("dimensions",InputDimencions.value)
        data.append("stock",InputQuantity.value)
        data.append("price",InputPrice.value)
        data.append("discount","0.0")

        await fetch(RutasBackend.addProduct, {
            method: 'POST',
            body:data,
        })
        .then(res => res.text())
        .then(data => {
            console.log(data)
            // setBrands(data.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getCategories()
        getBrands()
    }, [])
    return (
        <div className='container'>
            <form className='shadow-sm py-4 px-2' onSubmit={e=>{addProduct(e)}}>
                <div className="container mx-auto" style={{ widows: "90%" }}>
                    <h5>Agregar Producto</h5>
                    <div className="container">
                        <div className="row">
                            <div className="mt-3 col-12 col-md-6">
                                {categories.length > 0 &&
                                    <Select
                                        nombre={"Categoria:"}
                                        data={categories}
                                        name="selectCategory"
                                    // data={categories.map(c => {return {text:c.name}})}
                                    ></Select>
                                }
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                {brands.length > 0 &&
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
                                        // required: true,
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
                                        // required: true,
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
                                        // required: true,
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
                                Agregar Producto
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default AddProduct;
