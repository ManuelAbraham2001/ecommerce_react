import React, { useState } from 'react'

const ItemCount = (props) => {
    
    const [count, setCount] = useState(props.initial)
    const [disableAdd, setDisableAdd] = useState(false)
    const [disableRes, setDisableRes] = useState(false)

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


    return (
        <div className='itemCount flex justify-center items-center'>
            <button onClick={res} disabled={disableRes} className="itemCount_decrement text-white">-</button>
            <p className="itemCount_cant text-white">{count}</p>
            <button onClick={add} disabled={disableAdd} className="itemCount_increment text-white">+</button>
        </div>
    )
}

export default ItemCount