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
    const [categories, setCategories] = useState([
        {id: 1,text: "papeleria" },
        {id: 2,text: "electronica"},
        {id: 3,text: "moviliario"},
        {id: 4,text: "ofertas"},
    ])
    const [brands, setBrands] = useState([
        {id:1,text: "Desconocida"},
        {id:2,text: "Desconocidas"},
        {id:3,text: "hp"},
        {id:4,text: "empos"},
        {id:5,text: "canon"},
        {id:6,text: "sony"},
        {id:7,text: "kingston"},
        {id:8,text: "ikea"},
        {id:9,text: "hon"},
        {id:10,text: "office star"},
        {id:11,text: "ashley"},
        {id:12,text: "steelcase"},
        {id:13,text: "hni"},
        {id:14,text: "post-it"},
        {id:15,text: "five star"},
        {id:16,text: "bik"},
        {id:17,text: "faber-caste"},
        {id:18,text: "papermate"},
        {id:19,text: "papermatesharpie"}
    ])

    const loadImage = async (e) => {
        const imagen = document.getElementById('imagen')
        const file = e.target.files[0]
        if(!file) return
        if(!file.type.includes("image/")) return alert("Selecciones un formato de imagen")
        const reader = new FileReader()
        reader.onload = function (e) {
            imagen.src = e.target.result
        }
        reader.readAsDataURL(file)
    }

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
                    InputDimensions,
                    InputQuantity,
                    InputPrice,
                } = document.getElementById("formUpdateProduct")
                // setCategories(
                //     ...categories,
                //     { id: d.id_category, text: d.category }
                // )
                // setBrands(
                //     ...brands,
                //     { id: d.id_brand, text: d.brand }
                // )

                selectCategory.innerHTML = 
                    `<option value="${d.id_category}">${d.category} - ${d.id_category}</option>`;
                selectCategory.innerHTML +=
                    // categories.filter((ca) => ca.id != d.id_category).map((category) =>{
                    categories.map((category) =>{
                        return (`
                            <option value="${category.id}">${category.text} - ${category.id}</option>`
                        )
                    })
                // `<option value="${d.id_category}">${d.category}</option>`

                selectBrand.innerHTML = 
                `<option value="${d.id_brand}">${d.brand}</option>`;
                selectBrand.innerHTML+= 
                brands.map((brand) =>{
                    return (`
                        <option value="${brand.id}">${brand.text}</option>`
                    )
                })
                InputName.value = d.name
                InputDescription.value = d.description
                InputSpecification.value = d.specifications
                InputDimensions.value = d.dimensions
                InputQuantity.value = d.stock
                InputPrice.value = d.price
                document.getElementById("imagen").setAttribute("src", RutasBackend.imagenes + d.imagen)
            })
            .catch(err => console.log(err))
    }
    
   const regexPatterns = {
    name: /^[\w\s.,;:!?()'"\-–—¿¡\[\]{}«»“”‘’\*]{1,45}$/,
    description: /^[\w\s.,;:!?()'"\-–—¿¡\[\]{}«»“”‘’\*]{1,45}$/,
    specification: /^[\w\s.,;:!?()'"\-–—¿¡\[\]{}«»“”‘’\*]{1,45}$/, 
    dimensions: /^[\w\s.,;:!?()'"\-–—¿¡\[\]{}«»“”‘’\*]{1,45}$/,
    quantity: /^\d{1,7}(\.\d{1,2})?$/,
    price: /^\d{1,7}(\.\d{1,2})?$/,
 };
    const UpdateProduct = async (e) => {
        e.preventDefault()
        const form = e.target
        const {
            selectCategory,
            selectBrand,
            inputFile,
            InputName,
            InputDescription,
            InputSpecification,
            InputDimensions,
            InputQuantity,
            InputPrice,
        } = form

        if (!regexPatterns.name.test(InputName.value)) return alert("Nombre inválido solo caracteres alfanuméricos")
        if (!regexPatterns.description.test(InputDescription.value)) return alert("Descripción inválida solo caracteres alfanuméricos")
        if (!regexPatterns.specification.test(InputSpecification.value)) return alert("Especificaciones inválidas solo caracteres alfanuméricos")
        if (!regexPatterns.dimensions.test(InputDimensions.value)) return alert("Dimensiones inválidas solo caracteres alfanuméricos")
        if (!regexPatterns.quantity.test(InputQuantity.value)) return alert("Cantidad inválida solo caracteres numéricos")
        if (!regexPatterns.price.test(InputPrice.value)) return alert("Precio inválido solo caracteres numéricos")

        if(InputQuantity.value <=0) return alert("La cantidad no debe ser menor que 0")
        if(InputPrice.value <=0) return alert("El precio no debe ser menor que 0")

        const data = new FormData()
        data.append("id", id_product)
        data.append("id_category", selectCategory.value)
        data.append("id_brand", selectBrand.value)
        data.append("name", InputName.value)
        data.append("imagen", inputFile.files[0])
        data.append("description", InputDescription.value)
        data.append("specifications", InputSpecification.value)
        data.append("dimensions", InputDimensions.value)
        data.append("stock", InputQuantity.value)
        data.append("price", InputPrice.value)
        data.append("discount", "0.0")

        await fetch(RutasBackend.updateProduct, {
            method: 'POST',
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("Producto actualizado correctamente")
                    nav(Rutas.admin.products.getAll)
                }
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
                                    <label
                                        className='d-block container-fluid '
                                        htmlFor="inputFile"
                                        style={{ background: "#eee" }}>
                                        <img
                                            className='mx-auto'
                                            src="https://cdn.icon-icons.com/icons2/2348/PNG/512/image_picture_icon_143003.png" alt="" style={{ width: "100%", height: "300px" }} id='imagen' />
                                    </label>
                                    <input type="file" name="inputFile" id="inputFile"
                                        style={{ display: "none" }}
                                        accept='image/*'
                                        onChange={(e) => {
                                            loadImage(e)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                {
                                    <Select
                                        nombre={"Categoría:"}
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
                                    maxLength={45}
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
                                    nombre="Detalles del producto:"
                                    maxLength={45}
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
                                    maxLength={45}
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
                                    nombre="Dimensiones:"
                                    maxLength={45}
                                    attributs={{
                                        type: 'text',
                                        minLength: '0',
                                        name: 'InputDimensions',
                                        placeholder: ""
                                    }}
                                />
                            </div>
                            <div className="mt-3 col-12 col-md-6">
                                <Input
                                    nombre="Stock:"
                                    maxLength={45}
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
                                    maxLength={45}
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
