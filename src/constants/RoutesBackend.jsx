
const host= "http://localhost/integradora/backend/"
// const host= "http://localhost/normaint/backend/"
// const host= "https://xihmai.com/sao/backend/"

const RutasBackend ={
    imagenes: host+"products",
    // imagenes:"",

    iniciarSesion: host+"users/login.php",
    registrar: host+"users/logup.php",
    addAdmin: host+"users/addAdmin.php",
    store: host+"products/getProductsByCategory.php",
    changuePassword: host+"users/changuePassword.php",
    
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
    searchProduct: host+"products/search.php",
    recommendations: host+"products/recommendations.php",

    getAllUsers: host+"users/getAll.php",
    getAdmins: host+"users/getAdmins.php",
    getUserById: host+"users/getById.php",
    disabled: host+"users/disabled.php",
    enabled: host+"users/enabled.php",

    getAllSales: host+"sales/getAllSales.php",
    getSalesByIdUser: host+"sales/getSaleByIdUser.php",
    getDetailsOfSale: host+"sales/details.php",

    getAllPaymentMethods:host+"catalogs/getAll.php",

    getAllPaymentInformation: host+"buy/getAllPaymentInformation.php",
    addPayment: host+"buy/add.php",
    updateProcess: host+"buy/updateProcess.php",
    report: host+"reports/report.php",





}
export default RutasBackend;