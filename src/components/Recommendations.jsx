import React from 'react'

const Item = ()=>{
    return(
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card mb-3">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}

export default function Recommendations() {
  return (
    <div className='mt-5 container mx-auto'>
        <h3>Recommendations</h3>
        <div className=" row">
            <Item></Item>
        </div>
    </div>
  )
}
