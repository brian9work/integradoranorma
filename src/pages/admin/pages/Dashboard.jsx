import React from 'react';
import Rutas from '../../../constants/Routes';
import { FaRegAddressCard, FaRegAddressBook } from "react-icons/fa";
import { PiStorefrontBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiAddFill } from "react-icons/ri";


const dataMain = [
    { path: Rutas.admin.products.add, icon: <RiAddFill />, name: "Agregar Producto" },
    { path: Rutas.admin.products.getAll, icon: <PiStorefrontBold />, name: "Ver Productos" }
]
const ComponentMain = ({ path, icon, children }) => {
    let nav = useNavigate();
    return (
        <div className="container col-6 col-md-4"
            onClick={() => {
                nav(path)
            }}
        >
            <div className="card mb-3 rounded-4" style={{ width: "95%", cursor: "pointer" }}>
                <span className='text-center fs-1'>
                    {icon}
                </span>
                <p className='text-center'>{children}</p>
            </div>
        </div>
    )
}
{/* <FaRegAddressCard /> */}
{/* <FaRegAddressBook /> */}
const Dashboard = () => {
    return (
        <div className="container mt-5 row mx-auto">
            {dataMain.map((d, i) => {
                return (
                    <ComponentMain
                        key={i}
                        path={d.path}
                        icon={d.icon}
                    >
                        {d.name}
                    </ComponentMain>
                )
            })}
        </div>
    );
}

export default Dashboard;
