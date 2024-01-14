// FloatingIcon.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartPopup from '../Carousel/CartPopup/CartPopup';
import '../FloatingIcon/FloatingIcon.css';

const FloatingIcon = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // Nuevo estado para la cantidad en el carrito

  const handleIconClick = () => {
    setPopupOpen(!popupOpen);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Función para actualizar la cantidad en el carrito
  const updateCartItemCount = (newItemCount) => {
    setCartItemCount(newItemCount);
  };

  return (
    <div>
      <div className='FloatIcon' onClick={handleIconClick}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        {cartItemCount > 0 && <div className="cart-counter">{cartItemCount}</div>}
      </div>
      {popupOpen && <CartPopup onClose={handleClosePopup} updateCartItemCount={updateCartItemCount} />}
    </div>
  );
};

export default FloatingIcon;
