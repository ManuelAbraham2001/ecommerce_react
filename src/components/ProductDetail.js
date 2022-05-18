import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ProductDetail = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
        const db = getFirestore()

        const agua = doc(db, "items", "XUkLAdJDETzPeX1m9mGY")
        getDoc( agua ).then( res => {
            if(res.exists()){
                console.log(res.id);
                setItem(res.data());
            }
        })
    }, [])

    return (
        <>
            <div>ProductDetail</div>
            <div>{item.nombre}</div>
            <div>{item.precio}</div>
            <div>{item.stock}</div>
            <div>{item.categoria}</div>
        </>
    )
}

export default ProductDetail