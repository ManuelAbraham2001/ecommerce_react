import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom"

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

    const [products, setProducts] = useState([])
    const {prodId} = useParams()

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

    console.log(products);
    console.log(prodId);

    return (
        <>
            {
                products.map(prod => {
                    if(prodId == prod.id){
                        return <div>
                        <div>ProductDetail</div>
                        <div>{prod.nombre}</div>
                        <div>{prod.precio}</div>
                        <div>{prod.stock}</div>
                        <div>{prod.categoria}</div>
                    </div>
                    }
                })
            }


        </>
    )
}

export default ProductDetail