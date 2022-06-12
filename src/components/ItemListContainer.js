import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
// import productsList from '../products.json'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


export const ItemListContainer = () => {

    const { categoria } = useParams()
    const [titulo, setTitulo] = useState('')

    useEffect(() => {
        if (categoria == 'cpu') {
            setTitulo('Procesadores')
        }else if(categoria == 'gpu'){
            setTitulo('Placas de video')
        }else{
            setTitulo('Perifericos')
        }
    }, [])

    const [products, setProducts] = useState([])


    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection).then(snapshop => {
            const productsList = []
            snapshop.docs.forEach(s => {
                productsList.push({ id: s.id, ...s.data() })
            })
            setProducts(productsList)
        })
    }, [])

    return (
        <div className='newProducts flex items-center justify-center flex-col'>
            <div className='newProducts_nav flex items-center justify-between flex-col'>
                <div className='newProducts_nav_title'>
                    <h2 className='text-bold text-5xl uppercase mb-5'>{titulo}</h2>
                </div>
                <div className='newProducts_grid'>
                    {
                        products.map(prod => {
                            if (prod.categoria === categoria) {
                                return <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} img={prod.img} stock={prod.stock} id={prod.id}></Item>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
