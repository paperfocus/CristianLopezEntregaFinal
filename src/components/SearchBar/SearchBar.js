// SearchBar
import React, { useState } from 'react';
import { db } from '../../services/firebase/firebaseConfig';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const itemsRef = db.collection('items');
      const snapshot = await itemsRef.where('nombre', '==', searchTerm).get();

      const results = snapshot.docs.map(doc => doc.data());
      onSearch(results);
    } catch (error) {
      console.error('No hay resultados:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
