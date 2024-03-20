const Rutas ={
    login: {
        path: '/',
    },
    logup: {
        path: '/logup',
    },
    store:{
        path: '/store',
        origin: '/store/papeleria',
    },
    cart:{
        path: '/cart',
    },
    admin:{
        path: '/admin',
        origin: '/admin/dashboard',
        products: {
            getAll: '/admin/products',
            add: '/admin/addproduct',
        }
    },
}

export default Rutas;