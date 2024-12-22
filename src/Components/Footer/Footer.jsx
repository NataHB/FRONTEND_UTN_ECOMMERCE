import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
    <footer>
        <div className="redes-sociales">
            <h2>Mi tienda</h2>
            <div className="redes">
                <Link to="/"><i><FiInstagram /></i></Link>
                <Link to="/"><i><FaFacebookSquare /></i></Link>
                <Link to="/"><i><FaTwitter /></i></Link>
            </div>
        </div>
        <p>© 2024 - Todos los derechos reservados</p>
    </footer>
    )
}

export default Footer