import React from 'react'
import { Register } from '../../Components/Registro/index.js'
import { Link } from 'react-router-dom'
import '../FormScreen.css'

const RegisterScreen = () => {
  return (
    <main>
      <section className='form-screen'>
        <div className='form-screen-container'>
          <h1>Registrarse</h1>
          <Register/>
          <Link to="/login">Login</Link>
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
    </main>
  )
}

export default RegisterScreen