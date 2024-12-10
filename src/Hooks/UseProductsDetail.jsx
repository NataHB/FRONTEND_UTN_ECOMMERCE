import { useState, useEffect } from 'react'
import {getAuthenticatedHeaders} from '../../utils/fetching'

const UseProductDetail = (product_id) => {
    const [ product_detail_state, setProductDetailState ] = useState()    
    const [ product_detail_loading_state, setProductDetailLoadingState ] = useState(true)
    const [ product_detail_error_state, setProductDetailErrorState ] = useState(null)

    const getProductDetail = async (product_id) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/products/${product_id}`, {
            method: 'GET',
            headers: getAuthenticatedHeaders()            
        })
        const data = await response.json()
        console.log(data)
        
        if(!data.ok) {
            //Seteamos el error para manejarlo despues
            setProductDetailErrorState(data.error)
            setProductDetailLoadingState(false)
            return
        }
        else{
            setProductDetailState(data.data.product)
            setProductDetailLoadingState(false)
        }
    }

    useEffect(
        () => {
            getProductDetail(product_id)
        },
        []
    )
    return { product_detail_state, 
        product_detail_loading_state, 
        product_detail_error_state }
}

export default UseProductDetail