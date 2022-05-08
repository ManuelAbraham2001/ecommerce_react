import logo from './logo.svg';
import './css/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
import Tienda from './components/Tienda';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header><NavBar/></header>
      <Routes>
        <Route path='/' element={<Inicio/>} />  
        <Route path='/item/:prodId' element={<ItemDetailContainer/>} />
        <Route path='/tienda' element={<Tienda/>}/>
        <Route path='/tienda/:categoria' element={<ItemListContainer/>}/>
      </Routes>
      <footer><Footer/></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
