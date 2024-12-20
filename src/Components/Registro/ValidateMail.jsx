import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ValidateMail = () => {
    const {validation_token} = useParams()
    const navigate = useNavigate();
    const [validation_mail, setValidation_mail] = useState(false)

      const verifyMail = async (validation_token) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify-email/${validation_token}`
          )
          const data = await response.json();
          console.log (data);
          if (data.message == 'Error al verificar el correo') {
            setError(data.message);
            return;
          }
          setValidation_mail(true);
          navigate('/login');
        } catch (err) {
          setError(err);
        }
      };

      useEffect(() => {
      verifyMail(validation_token);
    }, []);

  return (
    <div>
      {
        validation_mail ? <span>Correo verificado</span> : <span>Correo no verificado</span>
      }
    </div>
  )
}

export default ValidateMail;