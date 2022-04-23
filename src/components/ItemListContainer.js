import React, { useEffect } from 'react'
import ItemList from './ItemList'
import products from '../products.json'


export const ItemListContainer = () => {
    return (
        <div className='newProducts flex items-center justify-center flex-col'>
            <div className='newProducts_nav flex items-center justify-between flex-col'>
                <div className='newProducts_nav_title'>
                    <h2 className='text-bold text-5xl uppercase'>Ultimos ingresos</h2>
                </div>
                <ItemList producto={products}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer
