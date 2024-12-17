import React from 'react'
import {ProductUpdate} from '../../Components/Productos/index.js'

const UpdateScreen = ({setForceUpdate}) => {
  return (
    <main>
        <ProductUpdate setForceUpdate={setForceUpdate} />
    </main>

  )
}

export default UpdateScreen