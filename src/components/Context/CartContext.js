import React, { Children, createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find(prod => prod.id === id)

    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]

        const productoEnCarrito = isInCart(producto.id)
        if(productoEnCarrito){
            newCart[newCart.findIndex(prod => prod.id === productoEnCarrito.id)].quantity += cantidad

            setCart(newCart)
            return
        }

        producto.quantity = cantidad
        setCart([...newCart, producto])
    }

    const deleteFromCart = (producto) => {
        const newCart = [...cart]

        const productoEnCarrito = isInCart(producto.id)

        if(!productoEnCarrito){
            return
        }

        const deleteProducto = newCart.filter(prod => prod.id !== producto.id)

        setCart(deleteProducto)
    }

    const deleteCart = () => setCart([])

    console.log(cart)

  return (
    <CartContext.Provider value={{cart, addToCart, deleteCart, deleteFromCart, setCart}}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider