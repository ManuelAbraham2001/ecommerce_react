import React from 'react'


const Prodcuts = (props /*recibo propiedades */) => {

    return (
        <div className='newProducts_grid_item'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-xl min-h-20">{props.nombre}</h2>
                    <p>$<span>{props.precio}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full font-bold">Comprar ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Prodcuts