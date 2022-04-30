import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header><NavBar/></header>
      <Routes>
        <Route path='/' element={<Inicio/>} />  
        <Route path='/item/:prodId' element={<ItemDetailContainer/>} />
      </Routes>
      <footer><Footer/></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
