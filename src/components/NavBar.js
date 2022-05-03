import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faContactCard, faHouse, faMagnifyingGlass, faShop, faUser} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center p-5 text-2xl uppercase sp:flex-col h-24 sp:h-auto sp:text-base drop-shadow-lg navBar'>
            <div>
                <h1 className='text-3xl text-color1 font-bold'>SMART<span className='text-black font-normal'>SHOP</span></h1>
            </div>
            <div>
                <ul className='inline-flex'>
                    <li className='mx-3 inline-flex items-center text-black'><Link to='/'><button className='font-bold'><FontAwesomeIcon icon={faHouse} className="mr-2 text-color1"/>Inicio</button></Link></li>
                    <li className='mx-3 inline-flex items-center text-black'><Link to='/tienda'><button className='font-bold'><FontAwesomeIcon icon={faShop} className="mr-2 text-color1"/>Tienda</button></Link></li>
                    <li className='mx-3 inline-flex items-center text-black'><button className='font-bold'><FontAwesomeIcon icon={faContactCard} className="mr-2 text-color1"/>Contacto</button></li>
                </ul>
            </div>
            <div>
                <ul className='inline-flex'>
                    <li className='mx-2 text-color1'><button><FontAwesomeIcon icon={faMagnifyingGlass}/></button></li>
                    <li className='mx-2 text-color1'><button><FontAwesomeIcon icon={faUser}/></button></li>
                    <CartWidget/>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
