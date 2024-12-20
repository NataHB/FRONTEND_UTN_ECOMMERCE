import React from 'react'
import { ForgotPassword } from '../../Components/Registro/index.js'
import '../FormScreen.css'

const ForgotPasswordScreen = () => {
  return (
    <main>
      <section className='form-screen'>
        <div className='form-screen-container'>
          <h1>Recuperar contraseña</h1>
          <ForgotPassword />
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
    </main>
  )
}

export default ForgotPasswordScreen