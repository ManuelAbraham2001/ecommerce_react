import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = (props) => {

  const [filtro, setFiltro] = useState('todo')

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(props.producto)
        reject('promesa rechazada')
      }, 2000)
    })

    promesa
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err);
    })


  }, [])
  
  return (
    <>
      <div className='newProducts_nav_menu flex flex-inline'>
        <ul className='flex justify-center '>
          <li className='mx-2 text-center'><button autoFocus onClick={() => setFiltro('todo')}>Todo</button></li>
          <li className='mx-2 text-center'><button onClick={() => setFiltro('cpu')}>Cpus</button></li>
          <li className='mx-2 text-center'><button onClick={() => setFiltro('gpu')}>Gpus</button></li>
          <li className='mx-2 text-center'><button onClick={() => setFiltro('otros')}>Otros</button></li>
        </ul>
      </div>

      <div className='newProducts_grid'>
        {
          props.producto.map(prod => {
            if(filtro === prod.categoria){
              return <Item nombre={prod.nombre} precio={prod.precio} img={prod.img} stock={prod.stock}></Item>
            }else if(filtro === 'todo'){
              return <Item nombre={prod.nombre} precio={prod.precio} img={prod.img} stock={prod.stock}></Item>
            }
          })
        }
      </div>
    </>
  )
}

export default ItemList