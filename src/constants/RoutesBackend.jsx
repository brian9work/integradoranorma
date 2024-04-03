
const host= "http://localhost/normaint/backend/"
// const host= "https://portafolio.xantheapp.com/api/integradoranorma/backend/"

const RutasBackend ={
    imagenes: host+"products",

    iniciarSesion: host+"users/login.php",
    registrar: host+"users/logup.php",
    store: host+"products/getProductsByCategory.php",
    
    addToCart: host+"cart/add.php",
    getCart: host+"cart/get.php",
    quantity: host+"cart/quantity.php",
    remove: host+"cart/remove.php",

    getCategories: host+"categories/getAll.php",
    getBrands: host+"brands/getAll.php",

    getAllProducts: host+"products/getAllProducts.php",
    addProduct: host+"products/add.php",
    updateProduct: host+"products/update.php",
    getProductById: host+"products/getById.php",
    deleteProduct: host+"products/delete.php",

    getAllUsers: host+"users/getAll.php",
    getAdmins: host+"users/getAdmins.php",

    getAllSales: host+"sales/getAllSales.php",
    getSalesByIdUser: host+"sales/getSaleByIdUser.php",
    getDetailsOfSale: host+"sales/details.php",

    getAllPaymentMethods:host+"catalogs/getAll.php",

    getAllPaymentInformation: host+"buy/getAllPaymentInformation.php",
    addPayment: host+"buy/add.php",
    updateProcess: host+"buy/updateProcess.php",





}
export default RutasBackend;