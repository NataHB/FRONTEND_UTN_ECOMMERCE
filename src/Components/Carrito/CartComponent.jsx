import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { AuthContext } from '../../Context/AuthContext';
import { useContext, useEffect } from 'react';
import '../Navbar/Navbar.css';

const CartComponent = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useContext(CartContext);
  const { is_authenticated } = useContext(AuthContext);

  useEffect(() => {
    console.log('Carrito actualizado:', cart);
  }, [cart]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
      <>
      <h4>Tu Carrito</h4>
      {cart.length === 0 ? (
        <ul className='dropdown-menu'>
          <li>
          No tienes productos en el carrito
          </li>
        </ul>
      ) : is_authenticated && (
        <ul className='dropdown-menu'>
          {cart.map((item) => (
            <li key={item.productId}>
            <div>
            <p>{item.productName}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.productPrice}</p>
            <p>Subtotal: ${item.quantity * item.productPrice}</p>
              <div style={{ display: 'flex', gap: '5px' }}>
              <button onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}>
                +
              </button>
              <button onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}>
                -
              </button>
              <button onClick={() => handleRemove(item.productId)}>Eliminar</button>
            </div>
          </div>
          </li>
        ))} 
        <p>Total: ${getTotal()}</p>
        <Link to="/"><button>Comprar</button></Link>
        </ul>
      )}
      </>
  );
};

export default CartComponent;