import React from 'react';

const Button = ({
        funcion=(e)=>{alert("Hola Mundo");console.log(e.target);},
        type="submit",text="Button",tipo="",children
    }) => {
    return (
        <div className="buttonSao">
            <button type={type}
                onClick={e =>{funcion(e)}}
                className={`btn btn-danger rounded-4 ${tipo}`}>{children}</button>
        </div>
    );
}

export default Button;
