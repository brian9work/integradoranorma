import React, { useEffect, useState } from 'react';
import Header from '../../Dashboard/Header';
import Nav from '../components/Nav';
import { useNavigate, useParams } from 'react-router-dom'
import { ComponentOrderDetail, Card } from '../../sales/details/OrderDetails';
import RutasBackend from '../../../constants/RoutesBackend';
import Button from '../../../components/Button'

const DetailsOfBuy = () => {
    const nav = useNavigate();
    const [details, setdetails] = useState(false);
    const [historyProcess, sethistoryProcess] = useState(false);
    const { id } = useParams()

    const actualizarEstado = async () => {
        await fetch(RutasBackend.updateProcess+"?id_pedido="+id
        ).then((response) =>response.json())
        .then((response) => {
            if(response.success){
                alert(response.data)
                window.location.reload()
            }
            // console.log(response)
        })
        .catch((error) => console.error(error))
        // alert('Actualizar Estado')
    }

    const getDetails = async (id) => {
        await fetch(`${RutasBackend.getDetailsOfSale}?id_pedido=${id}`)
            .then(response => response.json())
            .then(json => {
                if (!json.success) {
                    alert(json.data)
                    nav(Rutas.sales.path)
                }
                const { sale, process } = json.data[0]
                setdetails(sale)
                sethistoryProcess(process)
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        getDetails(id)
    }, [])
    return (
        <>
            <Header />
            <div className="container">
                <Nav>Detalles #{id}</Nav>
                {
                    details &&
                    Card(details)
                }
                {
                    (historyProcess && details.id_process) &&
                    <div className="mt-5 row p-5">
                        {ComponentOrderDetail(historyProcess, details.id_process)}
                    </div>
                }
                <Button
                    type="button"
                    funcion={()=>{
                        actualizarEstado()
                    }}
                >
                    Actualizar Proceso
                </Button>
            </div>
        </>
    );
}

export default DetailsOfBuy;
