import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useProductDetail from '../../Hooks/UseProductsDetail'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './Products.css'

const ProductDetail = () => {
    const { product_id } = useParams()
        const { addToCart } = useContext(CartContext)
    const { product_detail_state, product_detail_loading_state } = useProductDetail(product_id)
    


    const handleAddToCart = (productId, quantity) => {
        addToCart(productId, quantity);  // Llamar a la función de agregar al carrito
    }

    return (
        <>
            {               
                product_detail_loading_state 
                ? <span>Cargando...</span>
                : <div className='product-detail'>
                    <div className='product-detail-image'>
                        <img src={product_detail_state.image_base64} alt={product_detail_state.title} />
                    </div>
                    <div className='product-detail-info'>
                        <div>
                                <h1>{product_detail_state.title}</h1>
                                <span>${product_detail_state.price}</span>

                                <p>{product_detail_state.description}</p>
                        </div>
                        <div>
                            <button onClick={() => handleAddToCart(product_detail_state.id, 1)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetail