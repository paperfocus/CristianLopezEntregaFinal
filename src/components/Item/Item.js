/*PAGINA PRINCIPAL PRODUCTOS*/
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, img, price, stock, category }) => {
  
  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP', 
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <article className='CardItem'>
      <header className='Header'>
        <h1 className='ItemHeader'>{nombre}</h1>
      </header>
      <picture>
        <img src={img} alt={nombre} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>Precio: {formattedPrice}</p>
        <p className='Info'>Categoría: {category}</p>
        <p className='Info'>Stock disponible: {stock}</p>
      </section>
      <footer className='ItemFooter'>
        <Link to={`/item/${id}`} className='Option'>
         <button className='boton-detalle'>Ver detalle</button> 
        </Link>
      </footer>
    </article>
  );
};

export default Item;
