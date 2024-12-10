import { useState, useEffect } from 'react'
import  {getAuthenticatedHeaders}  from '../../utils/fetching'

const useProducts = () => {
    //logica de los productos
    const [products_state, setProducts] = useState([])
    const [products_loading_state, setProductsLoading] = useState(true)
    const [products_error_state, setProductsError] = useState(null)

    const obtenerProductos = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/products`, {
            method: 'GET',
            headers: getAuthenticatedHeaders()            
        })
        const data = await response.json()
        console.log(data)
        if(!data.ok) {
            //Seteamos el error para manejarlo despues
            setProductsError(data.error)
            setProductsLoading(false)
            return
        }
        else{
            setProducts(data.data.products)
            setProductsLoading(false)
        }
    }

    useEffect(
        () => {
            obtenerProductos()
        },
        []
    )
    return {
        products_state,
        products_loading_state,
        products_error_state,
    }
}

export default useProducts