// CartIconContainer
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import CartPopup from './CartPopup';
import '../CartPopup/CartPopup.css';

const CartIconContainer = () => {
  const { cart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Mostrar la burbuja roja si hay elementos en el carrito
    if (cart.length > 0) {
      setShowPopup(true);
    }
  }, [cart]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <span onClick={togglePopup}>Icono del carrito</span>

      {cart.length > 0 && showPopup && (
        <div className="cart-bubble">
          {cart.length}
        </div>
      )}

      {showPopup && <CartPopup onClose={togglePopup} />}
    </div>
  );
};

export default CartIconContainer;