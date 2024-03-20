
const host= "http://localhost/normaint/backend/"
// const host= "https://portafolio.xantheapp.com/api/integradoranorma/backend/"

const RutasBackend ={
    iniciarSesion: host+"sesion.php",
    registrar: host+"registrar.php",
    store: host+"products/getProductsByCategory.php",
    addToCart: host+"cart/add.php",
    getCart: host+"cart/get.php",
    quantity: host+"cart/quantity.php",
    remove: host+"cart/remove.php",
    getAllProducts: host+"products/getAllProducts.php",
    getCategories: host+"categories/getAll.php",
    getBrands: host+"brands/getAll.php",
    addProduct: host+"products/add.php",
    updateProduct: host+"products/update.php",
    getProductById: host+"products/getById.php",
    deleteProduct: host+"products/delete.php",


}
export default RutasBackend;