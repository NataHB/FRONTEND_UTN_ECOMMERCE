import React from 'react'

import { RecoveryPassword } from '../../Components/Registro/index.js'

const RecoveryPasswordScreen = () => {
  return (
    <main>
      <section className='form-screen'>
        <div className='form-screen-container'>
          <h1>Cambiar contraseña</h1>
          <RecoveryPassword />
          <Link to="/login">Iniciar sesión</Link>
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
    </main>
  )
}

export default RecoveryPasswordScreen