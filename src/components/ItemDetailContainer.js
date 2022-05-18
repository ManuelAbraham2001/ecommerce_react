import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import products from '../products.json'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const {prodId} = useParams()
  const [prod, setPord] = useState({})

  // useEffect(() => {
      
  //     //  products.map(product => {
  //     //      if(product.id == prodId){
  //     //          setPord(product);
  //     //     }
  //     // })

  //     const promesa = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //           resolve(products)
  //           reject('promesa rechazada')
  //       }, 2000)
  //   })

  //   promesa
  //   .then(result => {
  //     setPord(result.find(result => result.id == prodId))
  //   })
  //   .catch(err => {
  //      console.log(err);
  //   })

  // }, [prodId])


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
    <div><ItemDetail key={products.id} nombre={products.nombre} precio={products.precio} img={products.img} stock={products.stock} id={products.id}/></div>
  )
}

export default ItemDetailContainer