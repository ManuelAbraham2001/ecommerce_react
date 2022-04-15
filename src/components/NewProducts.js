import React from 'react'
import Prodcuts from './Prodcuts'
import products from '../products.json'

export const NewProducts = () => {
    // let products = [
    //     { nombre: 'Ryzen 5 3600', descripcion: '6-Cores 12-Threads'}, 
    //     { nombre: 'gpu' }, 
    //     { nombre: 'perifericos' }, 
    //     { nombre: 'perifericos' }
    // ]

    return (
        <div className='newProducts flex items-center justify-center flex-col'>
            <div className='newProducts_nav flex items-center justify-between flex-col'>
                <div className='newProducts_nav_title'>
                    <h2 className='text-bold text-5xl uppercase'>Ultimos ingresos</h2>
                </div>
                <div className='newProducts_nav_menu flex flex-inline'>
                    <ul className='flex justify-center '>
                        <li className='mx-2 text-center'><button autoFocus>Todo</button></li>
                        <li className='mx-2 text-center'><button>Cpus</button></li>
                        <li className='mx-2 text-center'><button>Gpus</button></li>
                        <li className='mx-2 text-center'><button>Otros</button></li>
                    </ul>
                </div>
            </div>
            <div className='newProducts_grid'>
                {
                    products.map(product => {
                        return <Prodcuts nombre={product.nombre} precio={product.precio} img={product.img}></Prodcuts> // envio propiedades
                    })
                }
            </div>
        </div>
    )
}
