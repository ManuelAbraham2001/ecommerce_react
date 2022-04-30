import React from 'react'
import BestSellers from './BestSellers'
import Categories from './Categories'
import { Hero } from './Hero'
import ItemListContainer from './ItemListContainer'
import WeeklyOffert from './WeeklyOffert'

const Inicio = () => {
  return (
    <main>
        <Hero/>
        <Categories/>
        <ItemListContainer/>
        <WeeklyOffert/>
        <BestSellers/>
    </main>
  )
}

export default Inicio