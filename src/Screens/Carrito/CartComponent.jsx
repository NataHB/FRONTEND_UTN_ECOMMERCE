import React from 'react';
import { CartContext } from '../../Context/CartContext';
import { useContext, useEffect } from 'react';

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
    <div>
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en el carrito</p>
      ) : (
        cart.map((item) => (
          <div key={item.productId}>
            <p>{item.productName}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => handleRemove(item.productId)}>Eliminar</button>
            <button onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}>
              Incrementar cantidad
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartComponent;