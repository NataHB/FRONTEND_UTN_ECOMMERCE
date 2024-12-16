import React, { useContext } from 'react'
import './Home.css'
import { AuthContext } from '../../Context/AuthContext'
import { CartContext } from '../../Context/CartContext'
import { ProductList } from '../../Components/Productos/index.js'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
        <main className='home'>
        <section className='hero'>
            <h3>Verano 2025</h3>
            <h1>Nueva colección</h1>
            <p>Descubre nuestra nueva colección de verano 2025 donde vas a encontrar tu nuevo look.</p>
            <button><Link to={'/products'}>Ver colección</Link></button>
        </section>
        <section className='categorias-section'>
            <h2>Categorias</h2>
            <div className='categorias-section-container'>
                <div className='categoria-container'>
                    <div className='categoria'>
                        <img src='public/img/filter.hombre.jpg'/>
                        <button><Link to={'/products'}>Ver colección</Link></button>
                    </div>
                    <div className='categoria'>
                        <img src='public/img/filter.mujer.jpg'/>
                        <button><Link to={'/products'}>Ver colección</Link></button>
                    </div>
                </div>
                <div className='categoria-container'>
                    <div className='categoria'>
                        <img src='public/img/filter.accesorios.jpg'/>
                        <button><Link to={'/products'}>Ver colección</Link></button>                    
                    </div>
                <div className='categoria'>
                    <img src='public/img/filter.hombre.jpg'/>
                    <button><Link to={'/products'}>Ver colección</Link></button>                
                </div>
                </div>
            </div>
        </section>
        <section className='destacado'>
            <h2>Productos destacados</h2>
            <ProductList />
        </section>
        </main>
    </div>
    )
}

export default Home