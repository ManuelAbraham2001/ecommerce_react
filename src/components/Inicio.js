import React from 'react'
import BestSellers from './BestSellers'
import Categories from './Categories'
import { Hero } from './Hero'
import NewProducts from './NewProducts'
import WeeklyOffert from './WeeklyOffert'

const Inicio = () => {
  return (
    <main>
        <Hero/>
        <Categories/>
        <NewProducts/>
        <WeeklyOffert/>
        <BestSellers/>
    </main>
  )
}

export default Inicio