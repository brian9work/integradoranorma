import React, { useEffect, useState } from 'react';
import RutasBackend from '../../../constants/RoutesBackend';
import { Button } from '../../../components/InputSec';
import { useNavigate } from "react-router-dom";
import Rutas from '../../../constants/Routes';

const Admins = () => {
    let nav = useNavigate();
    const [admins, setAdmins] = useState([])
    
    const getAdmins = async () => {
        await fetch(RutasBackend.getAdmins)
            .then(res => res.json())
            .then(data => {
                setAdmins(data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAdmins()
    }, [])

    return (
        <div className="container mb-5" >
            <div className="container-fluid mt-5 row justify-content-end">
                <button 
                    className="btn btn-primary col py-2" 
                    style={{maxWidth: "250px"}}
                    onClick={e => {
                        console.log("click")
                        nav(Rutas.admin.addAdmin.origin)
                    }}    
                >Agregar administrador</button>
            </div>
            <div className="row">
                <div className="col-12 mb-2">
                    <h3>Administradores</h3>
                </div>
            </div>
            <table 
                className="table table-striped shadow-sm" 
                style={{background:"red"}}
            >
                <thead>
                    <tr className=''>
                        <th className='py-3' >#</th>
                        <th className='py-3' >Nombre</th>
                        <th className='py-3' >Apellidos</th>
                        <th className='py-3' >Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (!admins) ?
                            <td className='text-center py-4' colSpan="7">
                                <h4>Cargando ... </h4>
                            </td> :
                            admins.map((u, i) => {
                                return (
                                    <tr key={i} className=''>
                                        <td>#{u.id}.{i + 1}</td>
                                        <td>{u.name}</td>
                                        <td>{u.lastnameF} {u.lastnameM}</td>
                                        <td>{u.email}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Admins;
