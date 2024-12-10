import React, { useContext } from 'react'
import useProducts from '../../Hooks/UseProducts'
import { Link } from 'react-router-dom'
import './Home.css'
import Navbar from '../../Components/Navbar'
import { AuthContext } from '../../Context/AuthContext'
import { CartContext } from '../../Context/CartContext'


const Home = () => {
    const object = useContext(AuthContext)
    const { addToCart } = useContext(CartContext)

    const { products_state, products_loading_state, products_error_state} = useProducts()

    const handleAddToCart = (productId, quantity) => {
        addToCart(productId, quantity);  // Llamar a la función de agregar al carrito
    }

    return (
        <div>
        <main className='home'>
        <h1>Nuestros productos</h1>
        <div>
            {
                products_loading_state
                ? <span>Cargando</span>
                : (
                    products_error_state
                    ? <span>{products_error_state}</span>
                    : <div className='product-list' key={products_state}>
                        {
                            products_state.map(
                                (product) => {
                                    return (
                                        <div key={product.id} className='product-card'>
                                            <img src={product.image_base64} alt={product.title} />
                                            <h2>{product.title}</h2>
                                            <span>Precio ${product.price}</span>
                                            <p>{product.description}</p>
                                            <Link to={`/product/${product.id}`}>Ver detalle</Link>
                                            <button onClick={() => handleAddToCart(product.id, 1)}>Agregar al carrito</button>
                                        </div>
                                    )
                                    
                                }
                            )

                        }
                    </div>
                )
            }
        </div>
        </main>
    </div>
    )
}

export default Home