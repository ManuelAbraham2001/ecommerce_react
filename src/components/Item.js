import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Prodcuts = (props) => {

    return (
        <div className='newProducts_grid_item'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={props.img} alt="Shoes"/></figure>
                <div className="card-body text-center">
                    <h2 className="text-xl min-h-20">{props.nombre}</h2>
                    <p>$<span>{props.precio}</span></p>
                    {
                        <ItemCount initial={1} stock={props.stock} id={props.id}/>
                    }
                    <div className="card-actions justify-end">
                    <Link className="w-full" to={`/item/${props.id}`}><button className="btn btn-primary w-full font-bold">Ver producto</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Prodcuts