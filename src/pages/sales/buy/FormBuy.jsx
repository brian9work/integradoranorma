import React from 'react';
import Input from '../../../components/Input';


const CompInt = ({ nombre, maxLength, attributs }) => {
   return (
      <div className="container-fluid mb-3" >
         <label htmlFor="">{nombre}
            <small style={{ fontSize: "20px", marginLeft: "3px", color: "red" }}>
               {(attributs.required) && "*"}
            </small>
         </label>
         <input
            className='form-control'
            maxLength={maxLength}
            {...attributs}
         />
      </div>
   )
}
const Inputs = [
   {
      nombre: 'Nombre del titular', maxLength: 50,
      attributs: { type: 'text', minLength: '1', required: true, name: 'inputBuyTitular' }
   }, {
      nombre: 'Número de tarjeta', maxLength: 16,
      attributs: { type: 'tel', minLength: '16', required: true, name: 'inputBuyNumberCard' }
   }, {
      nombre: 'Fecha de vencimiento', maxLength: 7,
      attributs: { type: 'text', minLength: '4', required: true, name: 'inputBuyExpiration', placeholder: 'MM / YYYY' }
   }, {
      nombre: 'CVV', maxLength: 3,
      attributs: { type: 'number', minLength: '3', required: true, name: 'inputBuyCVV' }
   },
]

const FormBuy = ({paymentMethod}) => {
   return (
      <div className="container-fluid mt-3">
         <h5>Opciones de pago: </h5>
         <div className="row mt-2">
            <div className="container-fluid col-12 row gap-4 mb-5">
               <div className="col-12 ">
                  <h6>Método de pago:</h6>
               </div>
               {paymentMethod.map((pm, index) => {
                  return (
                     <div className="col"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}
                        key={index}
                     >
                        <label htmlFor={"flexRadioDefault" + index}>
                           <img src={pm.imagen} alt={pm.payment_method}
                              style={{ width: '100px', height: '50px' }}
                           />
                           <h6 htmlFor={"flexRadioDefault" + index} className='text-center'>{pm.payment_method}</h6>
                        </label>
                        <input className="form-check-input" type="radio" name="inputBuyPM" id={"flexRadioDefault" + index}
                           style={{ width: '25px', height: '25px' }}
                        />
                     </div>
                  )
               })}
            </div>
            <div className="container-fluid col-12 mb-2">
               <CompInt
                  nombre={Inputs[0].nombre}
                  maxLength={Inputs[0].maxLength}
                  attributs={{ ...Inputs[0].attributs }}
               />
            </div>
            <div className="container-fluid col-12 mb-2">
               <CompInt
                  nombre={Inputs[1].nombre}
                  maxLength={Inputs[1].maxLength}
                  attributs={{ ...Inputs[1].attributs }}
               />
            </div>
            <div className="container-fluid col-12 mb-2 row" >
               <div className="container-fluid col-7">
                  <CompInt
                     nombre={Inputs[2].nombre}
                     maxLength={Inputs[2].maxLength}
                     attributs={{ ...Inputs[2].attributs }}
                  />
               </div>
               <div className="container-fluid col-5">
                  <CompInt
                     nombre={Inputs[3].nombre}
                     maxLength={Inputs[3].maxLength}
                     attributs={{ ...Inputs[3].attributs }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default FormBuy;
