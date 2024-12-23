import { useState, useEffect } from 'react';
import { getAuthenticatedHeaders } from '../../utils/fetching';

const UseProductsCategory = (category) => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [productsByCategoryLoading, setProductsByCategoryLoading] = useState(true);
  const [productsByCategoryError, setProductsByCategoryError] = useState(null);

  useEffect(() => {
    const obtenerProductosByCategory = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/category/${category}`, {
          method: 'GET',
          headers: getAuthenticatedHeaders()
        })

        const data = await response.json()
        console.log(data)

        if (!data.ok) {
          setProductsByCategoryError(data.error)
          setProductsByCategoryLoading(false)
          return;
        }

        setProductsByCategory(data.data.category) 
        setProductsByCategoryLoading(false)
      } catch (error) {
        setProductsByCategoryError('Error al obtener los productos')
        setProductsByCategoryLoading(false)
      }
    }

    obtenerProductosByCategory()
  }, [category])

  return {
    productsByCategory,
    productsByCategoryLoading,
    productsByCategoryError,
  };
};

export default UseProductsCategory;
