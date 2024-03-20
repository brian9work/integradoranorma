import React, { useState } from 'react';

const Input = ({
    nombre = "Input",
    maxLength,
    attributs = {
        tipo: "text",
        minLength: "0",
        name: "",
        required: true,
    }
}) => {
    let [length, setLength] = useState(0)
    let [value, setValue] = useState("")
    let [focus, setFocus] = useState(false)

    return (
        <div className="inputSaoSec">
            <label htmlFor="name">{nombre}
                <small>{attributs.required ? "*" : ""}</small> 
            </label>
            <input 
                {...attributs}
                maxLength={maxLength}
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value);
                    setLength(e.target.value.length);
                }}
                onBlur={()=>{
                    setFocus(length>=1)
                }}
           />
            <span><b> {length} </b> / {maxLength} </span>
        </div>
    );
}
const Select = ({nombre,name,data=[]})=>{
    return (
        <div className="inputSaoSec select">
            <label htmlFor="name">{nombre}</label>
            <select name={name}>
                {data.map((d,i) =>{
                    return <option key={i} value={d.id}>{d.text}</option>
                })}
            </select>
        </div>
    )
}
const Button = ({
    funcion=(e)=>{alert("Hola Mundo");console.log(e.target);},
    type="submit",text="Button",tipo="",children
}) => {
return (
    <div className="buttonSao">
        <button type={type}
            onSubmit={e =>{funcion(e)}}
            className={`btn btn-danger rounded-4 ${tipo}`}>{children}</button>
    </div>
);
}

export {Input,Select,Button};
