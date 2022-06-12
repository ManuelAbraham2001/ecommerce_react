import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCartContext } from './Context/CartContext';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const { cart, deleteCart } = useCartContext()
    const [total, setTotal] = useState(0)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    let precioTotal = 0
    let guardarid = ''

    useEffect(() => {
        cart.forEach(prod => {
            precioTotal = precioTotal + (prod.precio * prod.quantity)
            setTotal(precioTotal)
        });
    })

    const finalizarCompra = async () => {
        
        if(!nombre || !apellido || !email || !telefono || !direccion){
            let alerta = document.getElementById('alerta')
            alerta.classList.remove('alert_block')
            setTimeout(() => {
                alerta.classList.add('alert_block')
            }, 3000);
            return
        }

        const comprador = {
            name: nombre,
            phone: telefono,
            email: email
        }

        const miCarrito = cart.map(({ id, nombre, precio, quantity }) => ({ id, nombre, precio, quantity }))

        const compraFinalizada = {
            comprador: comprador,
            items: miCarrito,
            total: total
        }

        console.log('comprafinalizada', compraFinalizada)


        const db = getFirestore();
        const ordenCollection = collection(db, 'orden');

        const response = await addDoc(ordenCollection, compraFinalizada)

        guardarid = response.id;

        deleteCart();
        swal("la id de tu compra es: ", response.id);
        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    }

    return (
    <div>
        <div className="flex justify-center items-center h-screen w-full bg-blue-400">
            <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Completa tus datos</h1>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="first_name">Nombre</label>
                    <input onChange={e => setNombre(e.target.value)} type="text" className="border py-2 px-3 text-grey-800 border-black" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="last_name">Apellido</label>
                    <input onChange={e => setApellido(e.target.value)} type="text" className="border py-2 px-3 text-grey-800 border-black" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="email">Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" className="border py-2 px-3 text-grey-800 border-black" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="password">Direccion</label>
                    <input onChange={e => setDireccion(e.target.value)} type="text" className="border py-2 px-3 text-grey-800 border-black" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="password">Telefono</label>
                    <input onChange={e => setTelefono(e.target.value)} type="number" className="border py-2 px-3 text-grey-800 border-black" />
                </div>
                <div>
                    <p className='text-red-600 font-bold alert_block' id='alerta'>Todos los campos son obligatorios</p>
                    <p className="font-bold text-black">Total: ${total}</p>
                    {total > 0 ? <button onClick={() => finalizarCompra()} className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded">FINALIZAR COMPRA</button> : ""}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Checkout

