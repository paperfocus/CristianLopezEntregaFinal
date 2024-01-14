// App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Oferta from './components/Oferta/Oferta';
import FloatingIcon from './components/FloatingIcon/FloatingIcon';

function Home() {
  return (
    <div>
      <Carousel />
      <ItemListContainer greeting={'Productos Disponibles'} />
      <p className='greeting-text'>Productos en Oferta</p>
      {<Oferta />}
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 Pagina no encontrada</h1>} />
          </Routes>
          <Footer />
          <FloatingIcon />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
