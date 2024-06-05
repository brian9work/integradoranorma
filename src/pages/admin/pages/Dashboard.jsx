import React from 'react';
import Rutas from '../../../constants/Routes';
import { FaRegAddressCard, FaRegAddressBook } from "react-icons/fa";
import { PiStorefrontBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiAddFill,RiAddLine } from "react-icons/ri";
import { FaRegRegistered } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { GrMoney, GrUserAdmin } from "react-icons/gr";
import { GrDocumentPdf } from "react-icons/gr";


const dataMain = [
    { path: Rutas.admin.products.add, icon: <RiAddFill />, name: "Agregar producto" },
    { path: Rutas.admin.products.getAll, icon: <PiStorefrontBold />, name: "Ver productos" },
    { path: Rutas.admin.sales.origin, icon: <GrMoney  />, name: "Ventas" },
    // { path: Rutas.admin.brands.origin, icon: <FaRegRegistered />, name: "Marcas" },
    { path: Rutas.admin.admins.origin, icon: <GrUserAdmin  />, name: "Administradores" },
    { path: Rutas.admin.users.origin, icon: <LuUsers />, name: "Usuarios" },
    { path: Rutas.admin.reports.origin, icon: <GrDocumentPdf />, name: "Generar Reporte" },
]
const ComponentMain = ({ path, icon, children }) => {
    let nav = useNavigate();
    return (
        <div className="container col-12 col-md-4"
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
        <div className="container mt-5 row mx-auto mb-5">
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
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Dashboard;
