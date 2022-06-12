import React, { useState } from 'react'
import { useCartContext } from './Context/CartContext'
import { useAppContext } from './Context/AppContext'

const ItemCount = (props) => {
    
    const [count, setCount] = useState(props.initial)
    const [disableAdd, setDisableAdd] = useState(false)
    const [disableRes, setDisableRes] = useState(false)

    const {addToCart} = useCartContext()
    const {products} = useAppContext()
    

    let add = () => {
        if(count === props.stock){
            setDisableAdd(true)
        }else{
            setCount(count + 1)
        }
        setDisableRes(false)
    }

    let res = () => {
        if(count === props.initial){
            setDisableRes(true)
        }else{
            setCount(count - 1)
        }
        setDisableAdd(false)
    }

    const handleClick = (id, cantidad) => {
        const findProduct = products.find((producto) => producto.id === id)

        if(!findProduct){
            alert('error en la base de datos')
            return
        }

        addToCart(findProduct, cantidad)
        props.onAdd(count)
    }

    return (
        <>
        <div className='itemCount flex justify-center items-center mb-5'>
            <button onClick={res} disabled={disableRes} className="itemCount_decrement text-white">-</button>
            <p className="itemCount_cant text-white">{count}</p>
            <button onClick={add} disabled={disableAdd} className="itemCount_increment text-white">+</button>
        </div>
        <button onClick={() => handleClick(props.id, count)} className="btn btn-primary w-full font-bold">Agregar al carrito</button>
        </>
    )
}

export default ItemCount