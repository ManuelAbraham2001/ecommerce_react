import React from 'react'
import { Link } from 'react-router-dom'


const Tienda = () => {

    const categorias = [
        {categoria: 'cpu', titulo: 'Procesadores'}, {categoria: 'gpu', titulo: 'Placas de video'},
    ]

  return (
    <div className='tienda'>
        <h2 className='text-center text-black text-5xl'>Categorias</h2>
        <ul className='inline-flex flex justify-around items-center w-full'>
            {categorias.map(cat => {
                return <li><Link to={`/tienda/${cat.categoria}`}><button>{cat.titulo}</button></Link></li>
            })}
        </ul>
    </div>
  )
}

export default Tienda