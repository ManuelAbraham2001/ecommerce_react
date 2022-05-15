import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './Context/CartContext'


const Cart = () => {

    const { cart, deleteFromCart } = useCartContext()
    const [total, setTotal] = useState(0)
    let precioTotal = 0

    useEffect(() => {
        cart.forEach(prod => {
            precioTotal = precioTotal + (prod.price * prod.quantity)
            setTotal(precioTotal)
        }); 
	})

    const eliminar = (producto) => {
        deleteFromCart(producto)
    }

  return (
    <div>
        <div className="productos">
            {
            cart.length == 0 ? <Link to={`/`}><button className="btn btn-primary">Volver</button></Link> 
            :
            cart.map(prod => {
                return <div className='prod_cart'>
                        <img src={prod.img} width="200px" height="200px"></img>
                        <h2>{prod.title}</h2>
                        <p>{prod.price}</p>
                        <button onClick={() => eliminar(prod)}>Eliminar</button>
                </div>
            })}
            <p>total={total}</p>
        </div>
    </div>
  )
}

export default Cart