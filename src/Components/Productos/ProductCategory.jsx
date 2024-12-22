import React from 'react';
import { useParams } from 'react-router-dom';
import UseProductsCategory from '../../Hooks/UseProductsCategory';  // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const ProductCategory = () => {
  const { category } = useParams(); 
  const { productsByCategory, productsByCategoryLoading, productsByCategoryError } = UseProductsCategory(category)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = (productId, quantity) => {
    addToCart(productId, quantity)
}

  return (
    <div>
      {
        productsByCategoryLoading 
        ? <span>Cargando productos...</span>
        : productsByCategoryError 
        ? <span>{productsByCategoryError}</span>
        : (
          <div className="product-list">
            {productsByCategory.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image_base64} alt={product.title} />
                <h2>{product.title}</h2>
                <span>${product.price}</span>
                <Link to={`/product/${product.id}`}>Ver detalle</Link>
                <button onClick={() => handleAddToCart(product.id, 1)}>Agregar al carrito</button>
              </div>
            ))}
          </div>
      )}
    </div>
  );
};

export default ProductCategory;
