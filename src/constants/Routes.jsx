const Rutas ={
    login: {
        path: '/sesion/login',
    },
    logup: {
        path: '/sesion/logup',
    },
    store:{
        path: '',
        slash: '/',
        origin: '/papeleria',
    },
    closeSesion:{ 
        path:'/store/closeSesion'
    },
    cart:{
        path: '/carrito',
    },
    sales:{
        buy: '/comprar',
        path: '/ventas',
        details: '/ventas/detalles',
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
        },
        users:{
            origin: '/admin/users',
        },
        sales:{
            origin: '/admin/sales',
            details: '/admin/sale/details/:id',
        },
        admins:{
            origin: '/admin/admins',
        }
    },
}

export default Rutas;