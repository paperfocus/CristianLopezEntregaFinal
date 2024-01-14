// NavBar.js
import React, { useState } from 'react';
import LogoImg from '../img/logo.png';
/* import CartWidget from '../CartWidget/CartWidget'; */
import { NavLink, Link } from 'react-router-dom';
/* import SearchBar from '../SearchBar/SearchBar';  //luego la ocuparé */
import '../style/style.css';
import '../NavBar/NavBar.css'

const NavBar = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Esta función maneja los resultados de la búsqueda
  const handleSearch = (results) => {
    setSearchResults(results);

    // haré algo con los resultados, como redirigir a otra página
    // history.push('/resultados', { results: searchResults });
    console.log(searchResults);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to='/'>
          <img src={LogoImg} alt="Logo" />
        </Link>
      </div>

      <div className='Categorias'>
        {/* Añadire el componente SearchBar aquí */}
       {/*  <SearchBar onSearch={handleSearch} /> */}

        <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
        <NavLink to='/category/memorias_ram' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Memoria Ram</NavLink>
        <NavLink to='/category/notebook' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
        <NavLink to='/category/pendrive' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pendrive</NavLink>
        <NavLink to='/category/ssd' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ssd</NavLink>
        <NavLink to='/category/ofertas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
        {<NavLink to='/Cart' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Carrito</NavLink>}
        {/* <NavLink to='/Checkout' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Checkout</NavLink> */}
      </div>

      {/* {<CartWidget />} */}
    </nav>

  );
}

export default NavBar;
