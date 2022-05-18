import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

const Products = () => {

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

      <>
    <div>Products</div>

        <div className="container mx-auto flex flex-wrap gap-4 justify-center">

        {products.map( p => <li> { p.nombre } { p.precio } </li> )}
        </div>
    </>

    // <div>
    //     {products.map( p => <li> { p.title } </li> )}
    // </div>

  )
}

export default Products