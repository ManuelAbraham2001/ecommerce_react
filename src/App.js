import logo from './logo.svg';
import './css/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
import Tienda from './components/Tienda';
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './components/Context/CartContext';
import AppContextProvider from './components/Context/AppContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <CartContextProvider>
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
        </CartContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
