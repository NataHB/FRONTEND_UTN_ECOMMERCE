import React from 'react'
import { ProductDetail } from '../../Components/Productos/index.js'
import '../AllProductsScreen.css'

const DetailScreen = () => {
  return (
    <main className='all-products'>
        <ProductDetail />
    </main>
  )
}

export default DetailScreen