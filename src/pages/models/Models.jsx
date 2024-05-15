import React from 'react'
import Header from '../Dashboard/Header'
import gifs from '../../assets/gifs/Index'

export default function Models() {
    return (
        <>
            <Header />
            <div className='container mt-5 '>
                <br/>
                <h2 className=''>Conoce nuestros modelos en 3D</h2>
                <div className='row mt-3'>
                    {gifs.map((g,i) =>{
                        return (
                            <div 
                                key={"gif"+i}
                                className="container-fluid col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card shadow-sm rounded-4 py-4">
                                    <img src={g.gif} className="card-img-top" alt={g.name}
                                        style={{ width: "100%", height: "200px" }}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>Models</div>
        </>
    )
}
