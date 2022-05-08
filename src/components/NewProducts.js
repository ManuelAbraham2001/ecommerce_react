import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import productsList from '../products.json'


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productsList)
                reject('promesa rechazada')
            }, 2000)
        })
    
        promesa
        .then(result => {
            setProducts(result)
        })
        .catch(err => {
           console.log(err);
        })

    }, [])

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
