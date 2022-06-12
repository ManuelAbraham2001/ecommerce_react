import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './Context/CartContext'


const Cart = () => {

    const { cart, deleteFromCart, deleteCart } = useCartContext()
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
            cart.length == 0 ? 
            <div className='cart_void'>
                <h2 className='text-center text-2xl p-12 text-color1 font-bold'>Tu carrito esta vacio!</h2>
                <Link to={`/`}><button className="btn btn-primary">Volver</button></Link>
            </div>
            :
            cart.map(prod => {
                return <div className='flex justify-center items-center my-10'>
                    <div className='cart bg-color1 flex p-12 justify-center items-center gap-5 font-bold text-white'>
                        <img src={prod.img} width="200px" height="200px"></img>
                        <div className='cart_card flex flex-col justify-between'>
                            <h2 className='text-2xl font-bold text-white'>{prod.nombre}</h2>
                            <p className='text-lg'>Precio: ${prod.precio}</p>
                            <p>Cantidad: {prod.quantity}</p>
                            <button className='btn_delete' onClick={() => eliminar(prod)}>Eliminar</button>
                        </div>
                    </div>
                </div>     
            })}
        </div>
        { total > 0 ? 
        <div className='flex justify-center items-center'>
            <div className='checkout_buttons flex flex-col justify-center items-center bg-gray-600'>
                <p className='font-bold uppercase'>total: ${total}</p>
                <Link to={`/checkout`}><button>CHECKOUT</button></Link> 
                <button onClick={() => deleteCart()}>Vaciar Carrito</button> 
            </div>
        </div>
        : "" }
        
        
    </div>
  )
}

export default Cart