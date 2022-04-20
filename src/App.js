import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Hero } from './components/Hero';
import Categories from './components/Categories';
import ItemListContainer from './components/ItemListContainer';
import WeeklyOffert from './components/WeeklyOffert';
import BestSellers from './components/BestSellers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <Hero/>
        <Categories/>
        <ItemListContainer/>
        <WeeklyOffert/>
        <BestSellers/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
