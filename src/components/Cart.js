import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './Context/CartContext'


const Cart = () => {

    const { cart, deleteFromCart } = useCartContext()
    const [total, setTotal] = useState(0)
    let precioTotal = 0



    useEffect(() => {

        if(cart.length == 0){
            setTotal(0)
        }

        cart.forEach(prod => {
            precioTotal = precioTotal + (prod.precio * prod.quantity)
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
                        <h2>{prod.nombre}</h2>
                        <p>{prod.precio}</p>
                        <p>{prod.quantity}</p>
                        <button onClick={() => eliminar(prod)}>Eliminar</button>
                </div>
            })}
        </div>
        <p>total={total}</p>
    </div>
  )
}

export default Cart