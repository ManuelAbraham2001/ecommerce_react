import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import products from '../products.json'

const Categorias = () => {

  const {categoria} = useParams()
    
  
  return (
    <div className='newProducts_grid'>
    {
      products.map(prod => {
        if(prod.categoria === categoria){
          return <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} img={prod.img} stock={prod.stock} id={prod.id}></Item>
        }
      })
    }
    </div>
  )
}

export default Categorias