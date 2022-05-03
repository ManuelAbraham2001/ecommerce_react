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
    <div className='itemDetail'>
      <div className="itemDetail_content shadow-2xl flex flex-col">
        <div className='mb-2'>
          <ul>
            <li>{prod.id}</li>
            <li>{prod.nombre}</li>
            <li>{prod.precio}</li>
            <li>{prod.categoria}</li>
            <li><img src={prod.img} alt="Shoes"/></li>
          </ul>
        </div>
        <button className='btn btn-primary w-full font-bold'>Comprar</button>
      </div>
    </div>
  )
}

export default ItemDetail