import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../Screens/AllProductsScreen.css'


const ValidateMail = () => {
    const {validation_token} = useParams()
    const navigate = useNavigate();

      const verifyMail = async (validation_token) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify-email/${validation_token}`
          )
          const data = await response.json()
          console.log (data);
          if (data.message == 'Error al verificar el correo') {
            console.log(data.message)
            return
          }
          navigate('/login')
        } catch (err) {
          console.log(err)
          return
        }
      }

      useEffect(() => {
      verifyMail(validation_token)
    }, [])

  return (
    <div className='all-products'>
      <div className='all-products-container'>
        <h1>Verificando tu correo</h1>
      </div>
    </div>
  )
}

export default ValidateMail;