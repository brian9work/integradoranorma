import { useEffect, useState } from 'react';
import { Input, Select, Button } from '../../../components/InputSec';
import RutasBackend from '../../../constants/RoutesBackend';
import { useNavigate } from "react-router-dom";
import Rutas from '../../../constants/Routes';

const AddProduct = () => {
   let nav = useNavigate();
   const [categories, setCategories] = useState([])
   const [brands, setBrands] = useState([])

   const getCategories = async () => {
      await fetch(RutasBackend.getCategories)
         .then(res => res.json())
         .then(data => {
            setCategories(data.data)
         })
         .catch(err => console.log(err))
   }
   const getBrands = async () => {
      await fetch(RutasBackend.getBrands)
         .then(res => res.json())
         .then(data => {
            setBrands(data.data)
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
   const addProduct = async (e) => {
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

      if (InputQuantity.value <= 0) return alert("La cantidad no debe ser menor que 0")
      if (InputPrice.value <= 0) return alert("El precio no debe ser menor que 0")

      const data = new FormData()
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

      await fetch(RutasBackend.addProduct, {
         method: 'POST',
         body: data,
      })
         .then(res => res.json())
         .then(data => {
            if (data.success) {
               alert("Producto agregado correctamente")
               nav(Rutas.admin.products.getAll)
            }
            setBrands(data.data)
         })
         .catch(err => console.log(err))
   }
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

   useEffect(() => {
      getCategories()
      getBrands()
   }, [])
   return (
      <div className='container'>
         <form className='shadow-sm py-4 px-2' onSubmit={e => { addProduct(e) }}>
            <div className="container mx-auto" style={{ widows: "90%" }}>
               <h5>Agregar Producto</h5>
               <div className="container">
                  <div className="row">
                     <div className="col-12 row mt-4 mb-3">
                        <div className="col-6 mx-auto" style={{ cursor: "pointer" }}>
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
                              onChange={(e) => {
                                 loadImage(e)
                              }}
                           />
                        </div>
                     </div>
                     <div className="row col-12">
                        <div className="mt-3 col-12 col-md-6">
                           {categories.length > 0 &&
                              <Select
                                 nombre={"Categoria: *"}
                                 data={categories}
                                 name="selectCategory"
                              ></Select>
                           }
                        </div>
                        <div className="mt-3 col-12 col-md-6">
                           {brands.length > 0 &&
                              <Select
                                 nombre={"Marca: *"}
                                 data={brands}
                                 name="selectBrand"
                              ></Select>
                           }
                        </div>
                        <div className="mt-3 col-12 col-md-6">
                           <Input
                              nombre="Nombre: *"
                              maxLength={45}
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
                              nombre="Detalles del producto: *"
                              maxLength={45}
                              attributs={{
                                 type: 'text',
                                 minLength: '0',
                                 // // required: true,
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
                                 // // required: true,
                                 name: 'InputSpecification',
                                 placeholder: ""
                              }}
                           />
                        </div>
                        <div className="mt-3 col-12 col-md-6">
                           <Input
                              nombre="Dimensiones: *"
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
                              nombre="Cantidad: *"
                              maxLength={45}
                              attributs={{
                                 type: 'number',
                                 minLength: '0',
                                 // // required: true,
                                 name: 'InputQuantity',
                                 placeholder: "1"
                              }}
                           />
                        </div>
                        <div className="mt-3 col-12 col-md-6">
                           <Input
                              nombre="Precio: *"
                              maxLength={45}
                              attributs={{
                                 type: 'text',
                                 minLength: '0',
                                 // // required: true,
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
            </div>
         </form>
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
   );
}

export default AddProduct;
