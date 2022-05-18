import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getItem } from '../../service/asyncmock'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

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
    <AppContext.Provider value={{products}}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider