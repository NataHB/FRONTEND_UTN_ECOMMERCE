import React from 'react'
import { Login } from '../../Components/Registro/index.js'
import '../FormScreen.css'

const LoginScreen = () => {
  return (
    <main>
      <section className='form-screen'>
      <div className='form-screen-container'>
          <h1>Iniciar Sesion</h1>
          <Login />
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
        
    </main>
  )
}

export default LoginScreen