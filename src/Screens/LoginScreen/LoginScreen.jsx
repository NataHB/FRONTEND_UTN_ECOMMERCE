import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../Components/Registro/index.js'
import '../FormScreen.css'

const LoginScreen = () => {
  return (
    <main>
      <section className='form-screen'>
      <div className='form-screen-container'>
          <h1>Iniciar Sesion</h1>
          <Login />
          <Link to="/forgot-password">Olvide mi password</Link>
          <Link to="/register">Registrarme</Link>
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
        
    </main>
  )
}

export default LoginScreen