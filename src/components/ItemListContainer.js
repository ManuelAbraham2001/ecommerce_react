import React, { useState } from 'react'
import Prodcuts from './Prodcuts'
import products from '../products.json'

export const ItemListContainer = () => {

    const [filtro, setFiltro] = useState('todo')

    return (
        <div className='newProducts flex items-center justify-center flex-col'>
            <div className='newProducts_nav flex items-center justify-between flex-col'>
                <div className='newProducts_nav_title'>
                    <h2 className='text-bold text-5xl uppercase'>Ultimos ingresos</h2>
                </div>
                <div className='newProducts_nav_menu flex flex-inline'>
                    <ul className='flex justify-center '>
                        <li className='mx-2 text-center'><button autoFocus onClick={() => setFiltro('todo')}>Todo</button></li>
                        <li className='mx-2 text-center'><button onClick={() => setFiltro('cpu')}>Cpus</button></li>
                        <li className='mx-2 text-center'><button onClick={() => setFiltro('gpu')}>Gpus</button></li>
                        <li className='mx-2 text-center'><button onClick={() => setFiltro('otros')}>Otros</button></li>
                    </ul>
                </div>
            </div>
            <div className='newProducts_grid'>
                {
                    products.map(product => {
                        if(filtro == product.categoria){
                            return <Prodcuts nombre={product.nombre} precio={product.precio} img={product.img} stock={product.stock}></Prodcuts> // envio propiedades
                        }else if(filtro == 'todo'){
                            return <Prodcuts nombre={product.nombre} precio={product.precio} img={product.img} stock={product.stock}></Prodcuts>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer
