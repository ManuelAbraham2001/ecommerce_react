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
import Cart from './components/Cart';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';

const firebaseConfig = {
  apiKey: "AIzaSyAQtirkx9RQwqkKQtZXoEAkdCUL7AdE0ds",
  authDomain: "smartshop-ecommerce.firebaseapp.com",
  projectId: "smartshop-ecommerce",
  storageBucket: "smartshop-ecommerce.appspot.com",
  messagingSenderId: "472074264206",
  appId: "1:472074264206:web:11cd66fe3dd1bf8bb5b3df",
  measurementId: "G-B0ZG36K7SX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
          <header><NavBar/></header>
          <Routes>
            <Route path='/' element={<Inicio/>} />  
            <Route path='/item/:prodId' element={<ProductDetail/>} />
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/tienda/:categoria' element={<ItemListContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <footer><Footer/></footer>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
//<ItemListContainer/>