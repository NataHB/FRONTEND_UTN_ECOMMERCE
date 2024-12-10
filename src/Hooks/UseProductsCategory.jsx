import { useState, useEffect } from 'react';

const UseProductsCategory = (category) => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [productsByCategoryLoading, setProductsByCategoryLoading] = useState(true);
  const [productsByCategoryError, setProductsByCategoryError] = useState(null);

  useEffect(() => {
    const obtenerProductosByCategory = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/category/${category}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Aquí puedes agregar otros headers si es necesario
          }
        });

        const data = await response.json();
        console.log(data);

        if (!data.ok) {
          setProductsByCategoryError(data.error);
          setProductsByCategoryLoading(false);
          return;
        }

        setProductsByCategory(data.data.category);  // Asume que los productos están en data.data
        setProductsByCategoryLoading(false);
      } catch (error) {
        setProductsByCategoryError('Error al obtener los productos');
        setProductsByCategoryLoading(false);
      }
    };

    obtenerProductosByCategory();
  }, [category]);  // Este useEffect se ejecuta cada vez que la categoría cambia

  return {
    productsByCategory,
    productsByCategoryLoading,
    productsByCategoryError,
  };
};

export default UseProductsCategory;
