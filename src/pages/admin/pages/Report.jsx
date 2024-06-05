import React, { useState } from 'react'
import { Button, Input } from '../../../components/InputSec'

export default function Report() {
    const createReport = async(e)=>{
        e.preventDefault()
        console.log(e.target)
        let {
            dateStart,
            dateEnd
        } = e.target

        dateStart= new Date(dateStart.value)
        dateEnd= new Date(dateEnd.value)

        console.log(dateStart)
        console.log(dateEnd)


        if(dateStart.value === "" || dateEnd.value === ""){
            alert('Completa los campos')
            return
        }

        if(dateStart>=dateEnd){
            alert("La fecha de inicio no puede ser mayor que la final")
            return;
        }

        const fullDate = date =>{
            let day = date.getDate().toString().padStart(2, '0')
            let month = date.getMonth().toString().padStart(2, '0')
            let year = date.getFullYear().toString().padStart(2, '0')
            return `${year}-${month}-${day}`
        } 

        console.log(fullDate(dateStart))

        window.open(`https://xihmai.com/sao/backend/reports/report.php?ds=${fullDate(dateStart)}&de=${fullDate(dateEnd)}`)
        // await 
    }
    return (
        <div className='container mx-auto'>
            <form className='container- mx-auto' 
                onSubmit={
                    e =>{createReport(e)}
                }>
                <h3>Generar Reporte</h3>
                <div className="container- mx-auto">
                    <div className="row mx-auto" >
                        <div 
                        className="col-12 col-md-6 mt-4 mb-3">
                            <Input
                                nombre="Periodo Inicial"
                                maxLength={10}
                                attributs={{
                                    type: 'date',
                                    minLength: '0',
                                    required: true,
                                    name: 'dateStart',
                                    placeholder: ""
                                }}
                            />
                        </div>
                        <div 
                            className="col-12 col-md-6 mt-4 mb-3">
                            <Input
                                nombre="Periodo Final"
                                maxLength={10}
                                attributs={{
                                    type: 'date',
                                    minLength: '0',
                                    required: true,
                                    name: 'dateEnd',
                                    placeholder: ""
                                }}
                            />
                        </div>
                    </div>
                    <Button
                        type='submit'
                        // funcion={e =>{createReport(e)}}
                    >
                        Generar Reporte
                    </Button>
                </div>
            </form>
        </div>
    )
}
