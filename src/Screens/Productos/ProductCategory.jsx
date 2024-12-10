import React from 'react';
import { useParams } from 'react-router-dom';
import UseProductsCategory from '../../Hooks/UseProductsCategory';  // Asegúrate de que la ruta sea correcta

const ProductCategory = () => {
  const { category } = useParams();  // Obtienes la categoría de la URL
  const { productsByCategory, productsByCategoryLoading, productsByCategoryError } = UseProductsCategory(category);  // Llamas al hook pasándole la categoría

  return (
    <div>
      <h1>Productos en la categoría: {category}</h1>

      {productsByCategoryLoading ? (
        <span>Cargando productos...</span>
      ) : productsByCategoryError ? (
        <span>{productsByCategoryError}</span>
      ) : (
        <div>
          {productsByCategory.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
