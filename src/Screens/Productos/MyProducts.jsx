import React from 'react'
import UseMyProducts from '../../Hooks/UseMyProducts'
import UseDeleteProduct from '../../Hooks/UseDeleteProduct'

const MyProducts = () => {
    const {myProducts, myProductsLoading, myProductsError, deleteProductLocal} = UseMyProducts()
    const { deleteProduct, product_loading_state_delete, product_error_state_delete } = UseDeleteProduct()

    const handleDelete = async (product_id) => {
        const response = await deleteProduct(product_id)
        if(response) deleteProductLocal(product_id)
    }
  return (
    <div>
        <h1>Mis productos</h1>
        {
            myProductsLoading
            ? <span>Cargando...</span>
            : myProductsError
            ? <span>{myProductsError}</span>
            : myProducts.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                        <button onClick={() => handleDelete(product.id)} disabled={product_loading_state_delete}>
                            {product_loading_state_delete ? 'Eliminando...' : 'Eliminar'}
                        </button>
                        {product_error_state_delete && <span>{product_error_state_delete}</span>}
                    </div>
                )    
            }
        )}
    </div>
  )
}

export default MyProducts