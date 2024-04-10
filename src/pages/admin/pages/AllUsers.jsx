import React, { useEffect, useState } from 'react';
import RutasBackend from '../../../constants/RoutesBackend';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    
    const getUsers = async () => {
        await fetch(RutasBackend.getAllUsers)
            .then(res => res.json())
            .then(data => {
                setUsers(data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="container mb-5" >
            <div className="row">
                <div className="col-12 mb-2">
                    <h3>Usuarios</h3>
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
                        <th className='py-3' >apellidos</th>
                        <th className='py-3' >correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (!users) ?
                            <td className='text-center py-4' colSpan="7">
                                <h4>Cargando ... </h4>
                            </td> :
                            users.map((u, i) => {
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

export default AllUsers;
