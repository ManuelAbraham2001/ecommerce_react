import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Tienda = () => {

    // const categorias = [
    //     {categoria: 'cpu', titulo: 'Procesadores'}, {categoria: 'gpu', titulo: 'Placas de video'},
    // ]

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
    <div className='tienda'>
        <h2 className='text-center text-black text-5xl'>Categorias</h2>
        <ul className='inline-flex flex justify-around items-center w-full'>
            {products.map(cat => {
                return <li><Link to={`/tienda/${cat.categoria}`}><button>{cat.titulo}</button> {cat.categoria}</Link></li>
            })}
        </ul>
    </div>
  )
}

export default Tienda