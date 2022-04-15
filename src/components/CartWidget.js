import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'

export const CartWidget = () => {
  return (
    <li className='mx-2 text-color1'><button><FontAwesomeIcon icon={faCartShopping}/></button></li>
  )
}
