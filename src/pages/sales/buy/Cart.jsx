import React from 'react';
import RutasBackend from '../../../constants/RoutesBackend';

const ComponentCart = ({ data }) => {
   return (
      <div className="container-fluid col-12 col-md-6 col-lg-4 mb-3">
         <div className="container shadow-sm rounded-3 row p-2 mx-auto">
            <div className="col-4">
               <img src={RutasBackend.imagenes+data.imagen} alt={data.name} />
            </div>
            <div className="col-8 pl-2">
               <h5>{data.name}</h5>
               <p>{data.description}</p>
               <span>{data.quantity} x {data.price} = <b>${data.quantity * data.price} MX </b></span>
            </div>
         </div>
      </div>
   )
}

const Cart = ({ data }) => {
   return (
      <>
         <h5>Carrito:</h5>
         <div className="container-fluid col-12 mb-1 row">
            {
               data.map((d, i) => {
                  return (
                     <ComponentCart
                        key={i}
                        data={d}
                     />
                  )
               })
            }
         </div>
         <div className="container shadow-sm rounded-4 py-3 px-5 mb-5">
            <p>Su total es de:
               <b className='d-block fs-5'>$
                  {(data) &&
                     <>
                        {data.reduce((acc, cur) => {
                           return (parseFloat(acc) + (parseFloat(cur.price) * parseFloat(cur.quantity))).toFixed(2)
                        }, 0)}
                     </>
                  }
               </b>
            </p>
         </div>
      </>
   );
}

export default Cart;
