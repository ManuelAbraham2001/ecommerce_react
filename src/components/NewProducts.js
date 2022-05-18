import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import productsList from '../products.json'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      const db = getFirestore()
      const itemsCollection = collection(db, "items")
      getDocs( itemsCollection ).then ( snapshop =>{
          const productsList = []
          snapshop.docs.forEach( s => { 
              productsList.push ( { id: s.id, ...s.data()} )
           })
           setProducts( productsList )
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
