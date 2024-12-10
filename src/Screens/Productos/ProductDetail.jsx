import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useProductDetail from '../../Hooks/UseProductsDetail'

const ProductDetail = () => {
    const { product_id } = useParams()
    const { product_detail_state, product_detail_loading_state } = useProductDetail(product_id)

    return (
        <div>
            {               
                product_detail_loading_state 
                ? <span>Cargando...</span>
                : <div>
                    <h1>{product_detail_state.title}</h1>
                    <p>{product_detail_state.description}</p>
                    <span>Precio ${product_detail_state.price}</span>
                    <Link to={`/update/${product_id}`}>Editar</Link>
                </div>
            }
        </div>
    )
}

export default ProductDetail