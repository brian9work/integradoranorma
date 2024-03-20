
const host= "http://localhost/normaint/backend/"

const RutasBackend ={
    // r: 'http://localhost/normaint/backend2/registrar.php',
    // s: 'http://localhost/normaint/backend2/sesion.php',
    // registrer: 'http://localhost/normaint/backend/endpoint/user/registrar.php',
    // sesion: 'http://localhost/normaint/backend/endpoint/user/sesion.php',
    // registrerHost: 'https://portafolio.xantheapp.com/api/api/registrar.php',
    // sesionHost: 'https://portafolio.xantheapp.com/api/api/sesion.php',
    // http://localhost/normaint/backend2/cart/add.php?id_user=1&id_product=2
    

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


}
export default RutasBackend;