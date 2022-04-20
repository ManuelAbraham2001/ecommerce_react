import React from 'react'
import Prodcuts from './Prodcuts'
import products from '../bestSellers.json'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faClock, faMoneyBill1, faTruck } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'

const BestSellers = () => {
    return (
        <div className='bestSellers w-full h-auto flex items-center justify-center flex-col'>
            <div className="bestSellers_title">
                <h2 className='uppercase font-bold text-5xl mt-5 text-white'>Mas vendidos</h2>
            </div>
            <div className="bestCellers_products w-3/4 flex justify-between items-center my-8 gap-2.5">
                {
                    products.map(product => {
                        return <Prodcuts nombre={product.nombre} precio={product.precio} img={product.img} stock={product.stock}></Prodcuts> // envio propiedades
                    })
                }
            </div>
            <div className="bestCellers_info h-12 flex w-3/4 justify-around items-center mb-5">
                <div className="bestCellers_info_item">
                    <h3 className='text-black font-bold'><FontAwesomeIcon className='mr-1.5 text-color1' icon={faTruck}/>Envio gratis a todo el pais</h3>
                </div>
                <div className="bestCellers_info_item">
                    <h3 className='text-black font-bold'><FontAwesomeIcon className='mr-1.5 text-color1' icon={faMoneyBill1}/>Descuentos en efectivo</h3>
                </div>
                <div className="bestCellers_info_item">
                    <h3 className='text-black font-bold'><FontAwesomeIcon className='mr-1.5 text-color1' icon={faArrowRotateLeft}/>45 dias de cambio inmediato</h3>
                </div>
                <div className="bestCellers_info_item">
                    <h3 className='text-black font-bold'><FontAwesomeIcon className='mr-1.5 text-color1' icon={faClock}/>Abierto de lunes a viernes de 9hs a 17hs</h3>
                </div>
            </div>
        </div>
    )
}

export default BestSellers