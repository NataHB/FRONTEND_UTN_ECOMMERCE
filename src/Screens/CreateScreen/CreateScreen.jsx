import React from 'react'
import {ProductCreator} from '../../Components/Productos/index.js'
import '../FormScreen.css'

const CreateScreen = ({setForceUpdate}) => {
  return (
    <main>
      <section className='form-screen'>
        <div className='form-screen-container'>
          <h1>Crear producto</h1>
          <ProductCreator setForceUpdate={setForceUpdate}/>
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
    </main>
  )
}

export default CreateScreen