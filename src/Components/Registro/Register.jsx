import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UseForm from '../../Hooks/UseForm';
import UseFormErrors from '../../Hooks/useFormErrors';
import Form from '../Form/Form.jsx';

const Register = () => {
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState('');

  // Estado inicial del formulario
  const initial_form_state = {
    name: '',
    email: '',
    password: '',
  };

  // Acción para manejar el submit
  const handleRegister = async (formState) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json()
      console.log(data);


      if (!data.ok) {
      if (data.data.errors) {
        handleErrors(data.data.errors)
      }

      if (data.code === 'EMAIL_EXISTS') {
        setGeneralError(data.message);
      }
    } else {
      navigate('/login')
    }
      
      
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  // Configuración de los campos del formulario
  const form_fields = [
    {
      label: {
        text: 'Ingresa tu nombre',
        props: { htmlFor: 'name' },
      },
      field: {
        type: 'input',
        props: {
          placeholder: 'Ingresa tu nombre',
          id: 'name',
          name: 'name',
          type: 'text',
        },
      },
      errors: 'name', // Llave para los errores de este campo
    },
    {
      label: {
        text: 'Ingresa tu email',
        props: { htmlFor: 'email' },
      },
      field: {
        type: 'input',
        props: {
          placeholder: 'Ingresa tu email',
          id: 'email',
          name: 'email',
          type: 'text',
        },
      },
      errors: 'email',
    },
    {
      label: {
        text: 'Ingresa tu password',
        props: { htmlFor: 'password' },
      },
      field: {
        type: 'input',
        props: {
          placeholder: 'Ingresa tu password',
          id: 'password',
          name: 'password',
          type: 'password',
        },
      },
      errors: 'password',
    },
  ];

  // Hook para manejar errores
  const { errorState, handleErrors } = UseFormErrors({});

  return (
    <div className="form-container">
      <Form
        initial_form_state={initial_form_state}
        action={handleRegister}
        form_fields={form_fields}
        errorState={errorState}
        buttonText="Registrarse"
      />
      {generalError && <p style={{ color: '#471248' }}>{generalError}</p>}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
