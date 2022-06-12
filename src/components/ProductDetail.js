import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { Link, useParams } from "react-router-dom"
import ItemCount from "./ItemCount"

const ProductDetail = () => {

    // const [item, setItem] = useState({})



    // useEffect(() => {
    //     const db = getFirestore()

    //     const agua = doc(db, "items", "XUkLAdJDETzPeX1m9mGY")
    //     getDoc( agua ).then( res => {

    //         if(res.exists()){
    //             console.log(res.data());
    //             setItem(res.data());
    //         }
    //     })
    // }, [])

    const [inCart, setIncart] = useState(false)

    const onAdd = (count) => {
        setIncart(true)
        console.log(count);
    }

    const [products, setProducts] = useState([])
    const { prodId } = useParams()

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

    console.log(products);
    console.log(prodId);

    return (
        <>
            {
                products.map(prod => {
                    console.log(prod);
                    if (prodId == prod.id) {
                        return <div>
                            <div className='itemDetail'>
                                <div className="itemDetail_content shadow-2xl flex flex-col bg-gray-700">
                                    <div className='mb-2'>
                                        <div className='flex justify-center items-center my-10'>
                                            <div className='cart bg-color1 flex p-12 justify-center items-center gap-5 font-bold text-white'>
                                                <img src={prod.img} width="200px" height="200px"></img>
                                                <div className='cart_card flex flex-col justify-center'>
                                                    <h2 className='text-2xl font-bold text-white'>{prod.nombre}</h2>
                                                    <p className='text-lg'>Precio: ${prod.precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {inCart ? (
                                            <div>
                                                <p>El producto esta en el Carrito!</p>
                                                <Link to={`/cart`}><button className="btn btn-primary">VER CARRITO</button></Link>
                                            </div>
                                        ) : (
                                            <div>
                                                <ItemCount stock={prod.stock} initial={1} id={prod.id} onAdd={onAdd} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                })
            }
        </>
    )
}

export default ProductDetail