import { createContext, useState, useEffect, useContext } from "react";
import { getAuthenticatedHeaders } from "../../utils/fetching.js";
import { AuthContext } from "./AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { is_authenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("accessToken"); // Esto está basado en que el `accessToken` está guardado en sessionStorage

  // Cargar el carrito al iniciar
  useEffect(() => {
    const obtenerCart = async () => {
      if (!is_authenticated) return; 

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/${userId}`, {
          headers: getAuthenticatedHeaders(),
        });
        const data = await response.json();
        if (data.data.cart) {
          setCart(data.data.cart);
        }
      } catch (error) {
        console.error("Error al obtener el carrito", error);
      }
    };

    obtenerCart();
  }, [is_authenticated, userId]);

  // Agregar producto al carrito
  const addToCart = async (productId, quantity) => {
    if (!is_authenticated){
      navigate("/login")
      return
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/add`, {
        method: "POST",
        body: JSON.stringify({ productId, quantity }),
        headers: getAuthenticatedHeaders(), // Se añaden las cabeceras con el token
      });
      const data = await response.json();
      if (data.data.cart) {
        setCart(data.data.cart); // Se agrega el producto al carrito
      }
    } catch (error) {
      console.error("Error al agregar producto al carrito", error);
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/remove`, {
        method: "DELETE",
        body: JSON.stringify({ productId }),
        headers: getAuthenticatedHeaders(), // Se añaden las cabeceras con el token
      });
      const data = await response.json();
      if (data.data.cart) {
        setCart(data.data.cart.filter((item) => item.productId !== productId) // Filtramos el producto eliminado
        );
      }
    } catch (error) {
      console.error("Error al eliminar producto del carrito", error);
    }
  };

  // Actualizar cantidad del producto en el carrito
  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/update`, {
        method: "PUT",
        body: JSON.stringify({ productId, quantity }),
        headers: getAuthenticatedHeaders(), // Se añaden las cabeceras con el token
      })
      const data = await response.json();
      if (data.data.cart) {
        setCart(data.data.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity } // Actualizamos la cantidad
              : item
          )
        )
      }
    } catch (error) {
      console.error("Error al actualizar la cantidad del producto", error);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
