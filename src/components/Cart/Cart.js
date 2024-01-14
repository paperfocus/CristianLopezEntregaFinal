//cart
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link, useNavigate, NavLink } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTruck } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Cart/Cart.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  // Calcular el total neto
  const totalNeto = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // Calcula el valor total (total neto + 19%)
  const valorTotal = totalNeto * 1.19;

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className='NoProductos'>
        <h1>No hay productos en tu carrito!</h1>
        <Link to='/' className='Option'>
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div id='CarLeft' className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <table className='table table-striped CartPreview'>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>ID Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((p) => (
                <tr key={p.id}>
                  <td>
                    <button onClick={() => removeItem(p.id)} className='btnRemover'>
                      X
                    </button>
                  </td>
                  <CartItem {...p} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id='CarRigth' className='col-md-6'>
          <h2>Total del Carrito</h2>
          <div className='Separator'></div>
          <p>Subtotal: ${totalNeto.toLocaleString()}</p>
          <p>Total (+ 19%): ${valorTotal.toLocaleString()}</p>
          <button onClick={() => clearCart()} className='Button'>
            Limpiar Carrito
          </button>
          <NavLink to='/checkout' className='btnIrPagar'>
            Finalizar Compra
          </NavLink>
          <div className='Separator'></div>
          <div className='row'>
            <div className='col-4'>
              <FontAwesomeIcon icon={faLock} />
              <p>Compra 100% segura</p>
            </div>
            <div className='col-4'>
              <FontAwesomeIcon icon={faTruck} />
              <p>Envío a domicilio</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <img
                className='payment-icon'
                src='https://www.pcfactory.cl/public/foto/medio_pago/transferencia_bancaria.svg'
                alt='Transferencia Bancaria'
              />
              <img
                className='payment-icon'
                src='https://www.pcfactory.cl/public/foto/medio_pago/credito.svg'
                alt='Crédito'
              />
            </div>
            <div className='col-6'>
              <img
                className='payment-icon'
                src='https://www.pcfactory.cl/public/foto/medio_pago/compra_aqui_de_bancoestado.svg'
                alt='BancoEstado'
              />
              <img
                className='payment-icon'
                src='https://www.pcfactory.cl/public/foto/medio_pago/mercado-pago.svg'
                alt='Mercado Pago'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
