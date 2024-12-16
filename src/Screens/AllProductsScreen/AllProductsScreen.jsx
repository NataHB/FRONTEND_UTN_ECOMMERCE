import React from 'react'
import {ProductList} from '../../Components/Productos/index.js'
import '../AllProductsScreen.css'

const AllProductsScreen = () => {
  return (
    <main className='all-products'>
        <h1>Productos</h1>
        <ProductList />
    </main>
  )
}

export default AllProductsScreen