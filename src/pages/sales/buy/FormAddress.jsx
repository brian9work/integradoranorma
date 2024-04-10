import React, { useEffect, useState } from 'react';
import Input from '../../../components/Input';


const FormAddress = ({address}) => {
    const [valuesAddress, setValuesAddress] = useState({
        inputBuyState:address.id==1 ? "" : address.state,
        inputBuylocality:address.id==1 ? "" : address.locality,
        inputBuyMainStreet:address.id==1 ? "" : address.main_street,
        inputBuyStreet1:address.id==1 ? "" : address.street1,
        inputBuyStreet2:address.id==1 ? "" : address.street2,
        inputBuyReferences:address.id==1 ? "" : address.references,
    })
    const change = (e)=>{
        setValuesAddress({
            ...valuesAddress,
            [e.target.name] : e.target.value
        })
    }
    const Inputs = [
        {
            nombre: 'Estado:', maxLength: 100,
            attributs: { type: 'text', minLength: '1', required: true, name: 'inputBuyState', placeholder: '',
            defaultValue : valuesAddress.inputBuyState
            }
        },
        {
            nombre: 'Localidad:', maxLength: 100,
            attributs: { type: 'text', minLength: '1', required: true, name: 'inputBuylocality', placeholder: '',
            defaultValue : valuesAddress.inputBuylocality
            }
        },
        {
            nombre: 'Calle principal:', maxLength: 100,
            attributs: { type: 'text', minLength: '1', required: true, name: 'inputBuyMainStreet', placeholder: '',
            defaultValue : valuesAddress.inputBuyMainStreet
            }
        },
        {
            nombre: 'Calle 1:', maxLength: 100,
            attributs: { type: 'text', minLength: '1', required: false, name: 'inputBuyStreet1', placeholder: '',
            defaultValue : valuesAddress.inputBuyStreet1
            }
        },
        {
            nombre: 'Calle 2:', maxLength: 100,
            attributs: { type: 'text', minLength: '1', required: false, name: 'inputBuyStreet2', placeholder: '',
            defaultValue : valuesAddress.inputBuyStreet2
            }
        },
    ]
    return (
        <div className="container-fluid mt-3">
            <h5>Datos de dirección: </h5>
            <div className="row mt-2">
                <div className="container-fluid col-12 col-md-6 col-lg-4 mb-2">
                    <label htmlFor="">Pais
                        <small style={{ fontSize: "20px", marginLeft: "3px", color: "red" }}>
                            *
                        </small>
                    </label>
                    <select name="inputBuyCountry" className="form-control" required>
                        <option value="1">México</option>
                        {/* <option value="2">USA</option> */}
                    </select>
                </div>
                {Inputs.map((inp, i) => {
                    return (
                        <div className="container-fluid col-12 col-md-6 col-lg-4 mb-2" key={i}>
                            <label htmlFor="">{inp.nombre}
                                <small style={{ fontSize: "20px", marginLeft: "3px", color: "red" }}>
                                    {(inp.attributs.required) && "*"}
                                </small>
                            </label>
                            <input
                                className='form-control'
                                // nombre={inp.nombre}
                                maxLength={inp.maxLength}
                                {...inp.attributs}
                                onChange={(e)=>{change(e)}}
                                
                                // value={valuesAddress[inp.attributs.name]}

                            // <Input
                            //     nombre={inp.nombre}
                            //     maxLength={inp.maxLength}
                            //     attributs={{ ...inp.attributs }}
                            />
                        </div>
                    )
                })}
                <div className="container-fluid col-12 mb-2">
                    <label htmlFor="">Referencias:</label>
                    <input
                        className='form-control'
                        maxLength={50}
                        type={'text'}
                        minLength={'1'}
                        required={false}
                        name={'inputBuyReferences'}
                        placeholder={''}
                        defaultValue={valuesAddress.inputBuyReferences}
                        // {...Inputs[4].attributs}
                    />
                </div>
            </div>
        </div>
    );
}

export default FormAddress;
