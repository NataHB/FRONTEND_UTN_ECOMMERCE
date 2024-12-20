import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UseCategories from '../../Hooks/UseCategories';
import { AuthContext } from '../../Context/AuthContext';
import CartComponent from '../Carrito/CartComponent';
import './Navbar.css';

const Navbar = ({ forceUpdate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { categories, loading, error, reloadCategories } = UseCategories();
  const { is_authenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    reloadCategories();
  }, [forceUpdate]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  if (error) return <div>{error}</div>;

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="logo">
          <h1>Logo</h1>
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Productos</Link></li>
        <li className="dropdown">
          <h4>Categorias</h4>
          <ul className="dropdown-menu">
            {loading ? (
              <li>Cargando categorías...</li>
            ) : (
              categories.map((category) => (
                <li key={category}>
                  <Link to={`/category/${category}`} onClick={() => setIsMenuOpen(false)}>
                    {category}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </li>
        {!is_authenticated ? (
          <>
            <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
            <li><Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
          </>
        ) : (
          <>
            <li className="dropdown">
              <h4>Perfil</h4>
              <ul className="dropdown-menu">
                <li><Link to="/create" onClick={() => setIsMenuOpen(false)}>Crear producto</Link></li>
                <li><Link to="/admin" onClick={() => setIsMenuOpen(false)}>Mis productos</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/login" onClick={() => { logout(); setIsMenuOpen(false); }}>
                Logout
              </Link>
            </li>
          </>
        )}
        <li className="dropdown">
          <CartComponent />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
