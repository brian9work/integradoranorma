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
    closeSesion:{ 
        path:'/store/closeSesion'
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
            update: '/admin/updateproduct?',
        },
        brands:{
            origin: '/admin/brands',
        }
    },
}

export default Rutas;