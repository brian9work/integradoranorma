import React, { useState } from 'react';

const Input = ({
        nombre="Input",
        maxLength,
        attributs={
            tipo:"text",
            minLength:"0",
            name:"",
            required:true,
        }
    }) => {
    let [length,setLength] = useState(0)
    let [value,setValue] = useState("")
    let [focus,setFocus] = useState(false)

    return (
        <div className={`inputSao ${focus ? "focus" : ""} `}>
            <div>
                <input {...attributs}  
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
                <p onClick={(e)=>{
                    setFocus(!focus)
                    e.target.parentElement.children[0].focus()
                }}
                >
                    {nombre}
                    <small>{attributs.required ? "*" : ""}</small> 
                </p>
                <i></i>
            </div>
            <span><b> {length} </b> / {maxLength} </span>
        </div>
    );
}

export default Input;
