import React from 'react'
import {ProductCategory} from '../../Components/Productos/index.js'
import '../AllProductsScreen.css'
import { useParams } from 'react-router-dom'

const CategoryScreen = () => {
  const { category } = useParams();
  return (
    <main className='all-products'>
        <h1>{category}</h1>
        <ProductCategory />
    </main>
  )
}

export default CategoryScreen