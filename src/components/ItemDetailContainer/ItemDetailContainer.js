import './ItemDetailContainer.css';
import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'items', itemId);//items es el nombre de la base de datos
        const response = await getDoc(docRef);
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProduct(productsAdapted);
      } catch (error) {
        console.error("Error obteniendo detalles del producto:", error);
        // mostraré un mensaje de error al usuario mas adelante
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      {loading ? (
        <p>Cargando detalle del producto...</p>
      ) : (
        product && <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;




