import React from 'react'
import UseMyProducts from '../../Hooks/UseMyProducts'
import UseDeleteProduct from '../../Hooks/UseDeleteProduct'
import { Link } from 'react-router-dom'

const MyProducts = () => {
    const {myProducts, myProductsLoading, myProductsError, deleteProductLocal} = UseMyProducts()
    const { deleteProduct, product_loading_state_delete, product_error_state_delete } = UseDeleteProduct()

    const handleDelete = async (product_id) => {
        const response = await deleteProduct(product_id)
        if(response) deleteProductLocal(product_id)
    }
    return (
    <div>
        {
            myProductsLoading
            ? <span>Cargando...</span>
            : myProductsError
            ? <span>{myProductsError}</span>
            : (
                <div className='product-list'>
                    {myProducts.map((product) =>(
                    <div key={product.id} className='product-card'>
                        <img src={product.image_base64} alt={product.title} />
                        <h2>{product.title}</h2>
                        <span>${product.price}</span>
                        <p>{product.description}</p>
                        <Link to={`/update/${product.id}`}>Editar</Link>
                        <button onClick={() => handleDelete(product.id)} disabled={product_loading_state_delete}>
                            {product_loading_state_delete ? 'Eliminando...' : 'Eliminar'}
                        </button>
                        {product_error_state_delete && <span>{product_error_state_delete}</span>}
                    </div>
                ))}
                </div>
            )
        }
    </div>
  )
}

export default MyProducts