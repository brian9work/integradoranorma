const Rutas ={
    login: {
        path: '/sesion/login',
    },
    logup: {
        path: '/sesion/logup',
    },
    store:{
        path: '/home',
        slash: '/home',
        origin: '/home',
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
            detailsOrigin: '/admin/sale/details/',
            details: '/admin/sale/details/:id',
        },
        admins:{
            origin: '/admin/admins',
        }
    },
}

export default Rutas;