import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Hero } from './components/Hero';
import Categories from './components/Categories';
import { NewProducts } from './components/NewProducts';
import WeeklyOffert from './components/WeeklyOffert';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <Hero/>
        <Categories/>
        <NewProducts/>
        <WeeklyOffert/>
      </header>
    </div>
  );
}

export default App;
