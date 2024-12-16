import React from 'react';
import { CartContext } from '../../Context/CartContext';
import { useContext, useEffect } from 'react';
import '../Navbar/Navbar.css';

const CartComponent = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    console.log(cart); // Esto te ayudará a verificar si el estado está actualizado correctamente
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
      ) : (
        <ul className='dropdown-menu'>
          {cart.map((item) => (
            
            <li key={item.productId}>
            <div>
            <p>{item.productName}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => handleRemove(item.productId)}>Eliminar</button>
            <button onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}>
              Incrementar cantidad
            </button>
          </div>
          </li>
          
        ))} 
        </ul>
      )}
      </>
  );
};

export default CartComponent;