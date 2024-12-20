import React from 'react'
import {ProductUpdate} from '../../Components/Productos/index.js'
import '../FormScreen.css'

const UpdateScreen = ({setForceUpdate}) => {
  return (
    <main>
        <section className='form-screen'>
        <div className='form-screen-container'>
          <h1>Editar producto</h1>
          <ProductUpdate setForceUpdate={setForceUpdate}/>
        </div>
        <img src="/img/creative.jpg" alt="" />
      </section>
    </main>

  )
}

export default UpdateScreen