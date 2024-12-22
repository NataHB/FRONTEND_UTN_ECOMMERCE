import { createContext, useState, useEffect, useContext } from "react";
import { getAuthenticatedHeaders } from "../../utils/fetching.js";
import { AuthContext } from "./AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { is_authenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [updateCart, setUpdateCart] = useState(false);
  const userId = sessionStorage.getItem("accessToken"); // Esto está basado en que el `accessToken` está guardado en sessionStorage

  useEffect(() => {
    const obtenerCart = async () => {
      if (!is_authenticated) return; 

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/${userId}`, {
          headers: getAuthenticatedHeaders(),
        });
        const data = await response.json()
        if (data.data.cart) {
          setCart(data.data.cart)
        }
      } catch (error) {
        console.error("Error al obtener el carrito", error)
      }
    };

    obtenerCart();
    if (updateCart) {
      setUpdateCart(false);
    }
  }, [is_authenticated, userId, updateCart])

  const addToCart = async (productId, quantity) => {
    if (isLoading) return;

      if (!is_authenticated){
      navigate("/login")
      return
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/add`, {
        method: "POST",
        body: JSON.stringify({ productId, quantity }),
        headers: getAuthenticatedHeaders(), 
      });
      const data = await response.json()
      if (data.data.cart) {
        setCart(data.data.cart); 
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error al agregar producto al carrito", error)
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/remove`, {
        method: "DELETE",
        body: JSON.stringify({ productId }),
        headers: getAuthenticatedHeaders(), 
      });
      const data = await response.json();
      if (data.data.cart) {
        setCart(data.data.cart.filter((item) => item.productId !== productId)
        );
      }
    } catch (error) {
      console.error("Error al eliminar producto del carrito", error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/cart/update`, {
        method: "PUT",
        body: JSON.stringify({ productId, quantity }),
        headers: getAuthenticatedHeaders(), 
      })
      const data = await response.json()
      if (data.data.cart) {
        setCart(data.data.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity }
              : item
          )
        )
      }
    } catch (error) {
      console.error("Error al actualizar la cantidad del producto", error);
    }
  }

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.productPrice)
      const quantity = parseInt(item.quantity, 10)  
      return total + price * quantity
    }, 0).toFixed(2);
  }
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, updateCart, setUpdateCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
