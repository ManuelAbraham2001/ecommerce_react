import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../products.json'

const ItemDetail = () => {

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
    <div>
        <li>{prod.id}</li>
        <li>{prod.nombre}</li>
        <li>{prod.precio}</li>
        <li>{prod.categoria}</li>
        <img src={prod.img} alt="Shoes"/>
    </div>
  )
}

export default ItemDetail