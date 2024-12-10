import React from 'react'
import { useState } from 'react'
import {getAuthenticatedHeaders} from '../../utils/fetching'


const UseDeleteProduct = (product_id) => {
    const [product_loading_state_delete, setProductLoadingDelete] = useState(false)
    const [product_error_state_delete, setProductErrorDelete] = useState(null)
    
    const deleteProduct = async (product_id) => {
        setProductLoadingDelete(true)
        setProductErrorDelete(null)

        try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/delete/${product_id}`, {
            method: 'DELETE',
            headers: getAuthenticatedHeaders()
        })
        const data = await response.json()
        
        if(!data.ok) {
            //Seteamos el error para manejarlo despues
            return setProductErrorDelete(data.message)
        }
        setProductLoadingDelete(false)
        return data.data.product
        }
        catch(error){
        setProductErrorDelete(error.message)
        setProductLoadingDelete(false)
    }
    }

    return {   
            product_loading_state_delete, 
            product_error_state_delete, 
            deleteProduct 
        }
}

export default UseDeleteProduct
