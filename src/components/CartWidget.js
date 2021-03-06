import React, { useEffect, useState } from 'react'
import {} from '@fortawesome/free-brands-svg-icons'
import { useCartContext } from './Context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  const { cart } = useCartContext()

  // const [total, setTotal] = useState(0)

  // useEffect(() => {
  //   setTotal(cart.length)
  // })

  const [total, setTotal] = useState(0)
  let cantidadTotal = 0

  useEffect(() => {
    cart.forEach(prod => {
      cantidadTotal = cantidadTotal + prod.quantity
        setTotal(cantidadTotal)
    }); 
})


  return (
    <Link to={`/cart`}><label tabIndex="0" className="btn btn-ghost btn-circle"> 

    
    <div className="indicator">
    
    {
      cart.length == 0 ?  <Link to={`/cart`}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
            :
      <div>
          <Link to={`/cart`}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
          <span className="badge badge-sm indicator-item">{total}</span>
      </div>
    }
    </div>

</label></Link>
  )
}
