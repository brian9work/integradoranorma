import React from 'react';
import Header from './Dashboard/Header';
import Presentation from './Dashboard/Presentation';
import Categorias from './Dashboard/Categorias';
import Products from '../components/Products';

const Furniture = () => {
    return (
        <>
            <Header />
            <Presentation i={"m"} />
            <Categorias />
            <Products data={{
                typeofProducts: "Moviliario",
                data: [
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw90bf1c04/images/product/010343958104_A.jpg?sw=1000&sh=1000&sm=fit",
                        name: "Impresora 1",
                        price: "1,000.00 MXN"
                    },
                    {
                        imagen: "https://www.achemex.com/cdn/shop/products/313MxVBi3sL.jpg?v=1682008150",
                        name: "Impresora 2",
                        price: "2,000.00 MXN"
                    },
                    {
                        imagen: "https://http2.mlstatic.com/D_NQ_NP_651013-MLU72836543473_112023-O.webp",
                        name: "Impresora 3",
                        price: "3,000.00 MXN"
                    },
                    {
                        imagen: "https://pcoax.com.mx/14400-large_default/impresora-multifuncional-canon-maxify-gx7010-tinta-continua.jpg",
                        name: "Impresora 4",
                        price: "4,000.00 MXN"
                    },
                    {
                        imagen: "https://www.achemex.com/cdn/shop/products/313MxVBi3sL.jpg?v=1682008150",
                        name: "Impresora 2",
                        price: "2,000.00 MXN"
                    },
                    {
                        imagen: "https://http2.mlstatic.com/D_NQ_NP_651013-MLU72836543473_112023-O.webp",
                        name: "Impresora 3",
                        price: "3,000.00 MXN"
                    },
                    {
                        imagen: "https://pcoax.com.mx/14400-large_default/impresora-multifuncional-canon-maxify-gx7010-tinta-continua.jpg",
                        name: "Impresora 4",
                        price: "4,000.00 MXN"
                    },
                ]
            }} />
        </>
    );
}

export default Furniture;
