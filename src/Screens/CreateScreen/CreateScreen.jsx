import React from 'react'
import {ProductCreator} from '../../Components/Productos/index.js'
import './CreateScreen.css'

const CreateScreen = ({setForceUpdate}) => {
  return (
    <main>
      <section className='create'>
        <div className='create-container'>
          <h1>Crear producto</h1>
          <ProductCreator setForceUpdate={setForceUpdate}/>
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
    </main>
  )
}

export default CreateScreen