/* PAGINA DEL PRODUCTO */
import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faTruck, faHome, faDollarSign, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DetalleOferta = ({ id, nombre, img, category, descripcion, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    if (quantity <= stock) {
      setQuantityAdded(quantity);

      const item = {
        id,
        nombre,
        price,
      };

      addItem(item, quantity);
    } else {
      console.log('Cantidad excedida del stock');
    }
  };

  const handleTerminarCompra = () => {
    console.log('Compra finalizada');
  };

  // Función para formatear el precio con separador de miles
  const formatPrice = (value) => {
    return new Intl.NumberFormat('es-CL').format(value);
  };

  return (
    <div className='ItemDetailContainer'>
      {/* Sección de la izquierda */}
      <div className='LeftSection'>
        <picture>
          <img src={img} alt={nombre} className='ItemImg' />
        </picture>
      </div>

      {/* Sección de la derecha con detalles */}
      <div className='RightSection'>
        <section>
          <h1 className='ItemHeader'>{nombre}</h1>
          <p className='Info'>{descripcion}</p>
          <p className='Info'>Categoría: {category}</p>
          <p className='Info'>Cantidad disponible: {stock}</p>
          <p className='id'>id: {id}</p>
          <div className='Separator'></div>
          <h1 className='precio'>${formatPrice(price)}</h1>
          <p>Precio con todo medio de pago</p>
        </section>
        <div className='Separator'></div>
        <footer className='ItemFooter'>
          {quantityAdded > 0 ? (
            <button className='TerminarCompraButton' onClick={handleTerminarCompra}>
              <Link to='/cart' className='TerminarCompraButton2'>Ir al carrito</Link>
            </button>
          ) : (
            <ItemCount
              className='ItemCountLeft'
              initial={1}
              stock={stock}
              onAdd={handleOnAdd}
            />
          )}
        </footer>
        {/* Secciones de iconos */}
        <div className='IconSectionsHorizontal'>
          <div className='icono'>
            <FontAwesomeIcon icon={faTruck} />
            <p>Despacho a domicilio</p>
          </div>
          <div className='icono'>
            <FontAwesomeIcon icon={faHome} />
            <p>Retiro en tienda</p>
          </div>
          <div className='icono'>
            <FontAwesomeIcon icon={faDollarSign} />
            <p>Cotización empresa</p>
          </div>
          <div className='icono'>
            <FontAwesomeIcon icon={faCreditCard} />
            <p>Hasta 24 cuotas sin interés</p>
          </div>
        </div>
        <div className='Separator'></div>
        {/* Sección de dos columnas */}
        <div className='TwoColumnsSection'>
          <div className='Column'>
            <FontAwesomeIcon icon={faCreditCard} />
            <p>Aprovecha las cuotas sin interés con tus tarjetas de crédito*</p>
          </div>
          <div className='Column'>
            <img src='https://www.pcfactory.cl/public/dist/images/design/bancoestado_cuotas_.svg' alt='BancoEstado Cuotas' />
            <img src='https://www.pcfactory.cl/public/dist/images/design/chile_cuotas_.svg' alt='Chile Cuotas' />
            <img src='https://www.pcfactory.cl/public/dist/images/design/santander_cuotas_.svg' alt='Santander Cuotas' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleOferta;
