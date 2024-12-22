import { useState, useEffect } from 'react';
import { getAuthenticatedHeaders } from '../../utils/fetching';

const UseCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/category`, {
          method: 'GET',
          headers: getAuthenticatedHeaders()
        });
        const data = await response.json()
        if (!data.ok) {
          setError(data.error)
          setLoading(false)
          return
        }

        setCategories(data.data.categories.map((item) => item.category))
        setLoading(false)
      } catch (err) {
        setError('Error al obtener las categorías')
        setLoading(false)
      }
    };

  useEffect(() => {
    fetchCategories()
  }, []);

  return { categories, 
    loading, 
    error, 
    reloadCategories: fetchCategories, 
  };
};

export default UseCategories;
