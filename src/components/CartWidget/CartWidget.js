// CartWidget.js
import React, { useContext, useState } from 'react';
import CartPopup from '../Carousel/CartPopup/CartPopup';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const [showCart, setShowCart] = useState(false); // Estado para controlar la visibilidad del modal
  const { cart } = useContext(CartContext);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <img
        src="tu-icono-del-carrito.svg" 
        alt="Carrito"
        onClick={handleToggleCart}
      />
      {showCart && <CartPopup onClose={handleToggleCart} />}
      {cart.length > 0 && <span>{cart.length}</span>}
    </div>
  );
};

export default CartWidget;




/* import './CartWidget.css';
import cart from '../Cart/carrito.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget'>
      <div className='container text-left'>
        <div className='col'>
          <img className='CartImg' src={cart} alt='cart-widget'/>
          {totalQuantity > 0 && <span className='CartBadge'>{totalQuantity}</span>}
        </div>
        <div className='col'>
          <p className='mi-carrito'>Mi Carrito</p>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget; */
