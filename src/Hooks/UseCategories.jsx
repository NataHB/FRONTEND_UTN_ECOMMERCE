import { useState, useEffect } from 'react';

const UseCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/category`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (!data.ok) {
          setError(data.error);
          setLoading(false);
          return;
        }

        // Extraemos correctamente las categorías
        setCategories(data.data.categories.map((item) => item.category));
        setLoading(false);
      } catch (err) {
        setError('Error al obtener las categorías');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default UseCategories;
