import React from 'react'
import { getAuthenticatedHeaders } from '../../utils/fetching'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const UseMyProducts = () => {
    const [myProducts, setMyProducts] = useState([])
    const [myProductsLoading, setMyProductsLoading] = useState(true)
    const [myProductsError, setMyProductsError] = useState(null)
    const { setUpdateCart } = useContext(CartContext);

    const obtenerMisProductos = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/admin`, {
            method: 'GET',
            headers: getAuthenticatedHeaders()            
        })
        const data = await response.json()
        console.log(data)
        
        if(!data.ok) {
            //Seteamos el error para manejarlo despues
            setMyProductsError(data.error)
            setMyProductsLoading(false)
            return
        }
        else{
            setMyProducts(data.data.myProducts)
            setMyProductsLoading(false)
        }
    }

    const deleteProductLocal = (product_id) => {
        setMyProducts((myProducts) => myProducts.filter((product) => product.id !== product_id))
        setUpdateCart(true)
    }

    useEffect(() => {
        obtenerMisProductos()
    }, [])

  return {
    myProducts,
    myProductsLoading,
    myProductsError,
    deleteProductLocal
  }
}

export default UseMyProducts