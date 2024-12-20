import React from 'react'
import { Link } from 'react-router-dom'
import {ProductUpdate} from '../../Components/Productos/index.js'
import '../FormScreen.css'

const UpdateScreen = ({setForceUpdate}) => {
  return (
    <main>
        <section className='form-screen'>
        <div className='form-screen-container'>
          <h1>Editar producto</h1>
          <ProductUpdate setForceUpdate={setForceUpdate}/>
          <Link to='/'>Volver</Link>
        </div>
        <img src="/img/card-cover-2.jpg" alt="" />
      </section>
    </main>

  )
}

export default UpdateScreen