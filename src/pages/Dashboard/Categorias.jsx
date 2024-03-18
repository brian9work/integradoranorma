import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdPrint } from "react-icons/md";
import { LuBook, LuSofa  } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";
import Rutas from '../../constants/Routes';

const Categoria = ({ icon, path, children }) => {
    let nav = useNavigate();
    return (
        <div className="cotainercol-md-3 col-lg-3 col-6 pt-4 shadow-sm row mt-3 rounded-4" style={{ alignItems: "center" }}
            onClick={()=>{
                nav(path)
            }}
        >
            <span className="d-block col-12 col-lg-3 col-md-3 fs-1" style={{ textAlign: "center", transform: "translateY(-10px)" }}>
                {icon}
            </span>
            <h4 className="d-block col-12 col-lg-9 col-md-9 fs-5">{children}</h4>
        </div>
    )
}

const Categorias = () => {
    
    const rutas = [
        {icon:<LuBook />,name:"Papeleria",path:Rutas.sesion.path},
        {icon:<MdPrint />,name:"Electronica",path:Rutas.electronics.path},
        {icon:<LuSofa />,name:"Mobiliario",path:Rutas.furniture.path},
        {icon:<MdOutlineLocalOffer />,name:"Ofertas",path:Rutas.offers.path},
    ]
    return (
        <div className="container mx-auto row mb-1 d-flex justify-content-between">
            {rutas.map((r,i) =>{
                return <Categoria
                    key={i}
                    icon={r.icon}
                    path={r.path}
                > 
                    {r.name}
                </Categoria>
            })}
        </div>
    );
}

export default Categorias;
