import React from 'react'
import {MyProducts} from '../../Components/Productos/index.js'
import '../AllProductsScreen.css'

const MyProductsScreen = () => {
  return (
    <main className='all-products'>
        <h1>Mis productos</h1>
        <MyProducts />
    </main>
  )
}

export default MyProductsScreen