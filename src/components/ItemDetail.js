import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


const ItemDetail = (props) => {

  const [inCart, setIncart] = useState(false)

  return (
    <div className='itemDetail'>
      <div className="itemDetail_content shadow-2xl flex flex-col">
        <div className='mb-2'>
          <ul className='mb-2'>
            <li>{props.id}</li>
            <li>{props.nombre}</li>
            <li>{props.precio}</li>
            <li>{props.categoria}</li>
            <li><img src={props.img} alt="Shoes"/></li>
          </ul>
          {inCart ? (
              <div>
                <p>El producto esta en el Carrito!</p>
                <Link to={`/cart`}><button className="btn btn-primary">VER CARRITO</button></Link>
              </div>
              ) : (
              <div> 
                <ItemCount stock={props.stock} initial={1}/>
                <button className='btn btn-primary w-full font-bold mb-2'>Comprar</button>
                <button onClick = {() => setIncart(true)} className="btn btn-primary w-full font-bold">Agregar al carrito</button>
              </div>                 
          )}

        </div>

      </div>
    </div>
  )
}



export default ItemDetail