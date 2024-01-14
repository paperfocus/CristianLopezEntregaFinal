// CartItem.js
import React from 'react';

const CartItem = ({ nombre, id, price, quantity }) => {
  return (
    <>
      <td>{nombre}</td>
      <td>{id}</td>
      <td>${price.toLocaleString()}</td>
      <td>{quantity}</td>
    </>
  );
};

export default CartItem;
