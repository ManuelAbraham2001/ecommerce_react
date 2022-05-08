import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import products from '../products.json'

const ItemDetailContainer = () => {

  const {prodId} = useParams()
  const [prod, setPord] = useState({})

  useEffect(() => {
      
      //  products.map(product => {
      //      if(product.id == prodId){
      //          setPord(product);
      //     }
      // })

      const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
            reject('promesa rechazada')
        }, 2000)
    })

    promesa
    .then(result => {
      setPord(result.find(result => result.id == prodId))
    })
    .catch(err => {
       console.log(err);
    })

  }, [prodId])

  return (
    <div><ItemDetail key={prod.id} nombre={prod.nombre} precio={prod.precio} img={prod.img} stock={prod.stock} id={prod.id}/></div>
  )
}

export default ItemDetailContainer