import React from 'react';
import { Link } from 'react-router-dom';
import UseCategories from '../Hooks/UseCategories';
import './Navbar.css';
import CartComponent from '../Screens/Carrito/CartComponent';

const Navbar = () => {
  const { categories, loading, error } = UseCategories();

  if (loading) return <div>Cargando categorías...</div>;
  if (error) return <div>{error}</div>;

  return (
    <nav>
      <Link to="/"><h1>Logo</h1></Link>
      <ul className="nav-links">
        <li><Link to="/create">Crear producto</Link></li>
        <li><Link to="/admin">Mis productos</Link></li>
        <li><Link to="/">Productos</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li className="dropdown">
          Categorías
          <ul className="dropdown-menu">
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li><CartComponent /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
