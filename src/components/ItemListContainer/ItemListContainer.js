import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = categoryId
          ? query(collection(db, 'items'), where('category', '==', categoryId))
          : collection(db, 'items');

        const querySnapshot = await getDocs(collectionRef);

        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>

    <p className='greeting-text'>
      {greeting}
    </p>

  <ItemList products={products} />
</div>
  );
};

export default ItemListContainer;





