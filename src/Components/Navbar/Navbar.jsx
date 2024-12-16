import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import UseCategories from '../../Hooks/UseCategories';
import './Navbar.css';
import { AuthContext } from '../../Context/AuthContext';
import CartComponent from '../Carrito/CartComponent';

const Navbar = () => {
  const { categories, loading, error, reloadCategories } = UseCategories();
  const { is_authenticated } = useContext(AuthContext);

  useEffect(() => {
    reloadCategories();
  }, []);

  if (loading) return <div>Cargando categorías...</div>;
  if (error) return <div>{error}</div>;
  
  //si estas logueado mostrar para desloguear

  return (
    <nav>
      <Link to="/"><h1>Logo</h1></Link>
      <div>

      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li className="dropdown">
          <h4>Categorias</h4>
          <ul className="dropdown-menu">
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        {is_authenticated && (  // Solo mostrar estos enlaces si el usuario está autenticado
      <li className="dropdown">
          <h4>Admin</h4>
          <ul className="dropdown-menu">
            <li><Link to="/create">Crear producto</Link></li>
            <li><Link to="/admin">Mis productos</Link></li>
          </ul>
        </li>
        )}
        
        <li className="dropdown"><CartComponent /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
