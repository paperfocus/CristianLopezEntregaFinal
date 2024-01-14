// CartPopup.js
import React, { useContext, useRef, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import '../CartPopup/CartPopup.css';
import { NavLink } from 'react-router-dom';

const CartPopup = ({ onClose }) => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="cart-popup" ref={modalRef}>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <h4>Tu Carrito</h4>
          </div>
          <div className="col">
            <button onClick={onClose}>X</button>
          </div>
        </div>
      </div>
      <div className='Separator'></div>

      {cart.length === 0 ? (
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col-sm-12 p-3">
              <p>Tu carrito está vacío</p>
              <button className="btnCarPoup" onClick={onClose}>
                Seguir comprando
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="cart-items-container">
  {cart.map((item) => (
    <div key={item.id}>
      <p>Nombre: {item.nombre}</p>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
      <div className='Separator'></div>
    </div>
  ))}
</div>
          <hr />

          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col-sm-12 p-3">
                <button className="btnCarPoup" onClick={onClose}>
                  Seguir comprando
                </button>
                <NavLink to="/Cart" className="btnCarPoup">
                  Ver carrito
                </NavLink>
                <NavLink to="/checkout" className="btnCarPoup">
                  Finalizar Compra
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopup;
