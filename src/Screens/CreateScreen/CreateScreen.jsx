import React from 'react'
import { Link } from 'react-router-dom'
import {ProductCreator} from '../../Components/Productos/index.js'
import '../FormScreen.css'

const CreateScreen = ({setForceUpdate}) => {
  return (
    <main>
      <section className='form-screen'>
        <div className='form-screen-container'>
          <h1>Crear producto</h1>
          <ProductCreator setForceUpdate={setForceUpdate}/>
          <Link to='/'>Volver</Link>
        </div>
        <img src="/img/card-cover-2.jpg" alt="" />
      </section>
    </main>
  )
}

export default CreateScreen