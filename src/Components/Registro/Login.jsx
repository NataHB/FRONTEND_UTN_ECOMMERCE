import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import UseForm from '../../Hooks/UseForm';
import UseFormErrors from '../../Hooks/useFormErrors';
import Form from '../Form/Form.jsx';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {  

  const { login } = useContext(AuthContext);

  // Estado inicial del formulario
  const initial_form_state = {
    email: '',
    password: '',
  };

  // Acción para manejar el submit
  const handleLogin = async (formState) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      console.log(data);

      if (!data.ok) {
        return handleErrors(data);
      } else {
        login(data.data.accessToken);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  // Configuración de los campos del formulario
  const form_fields = [
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
      <h1>Login</h1>
      <Form
        initial_form_state={initial_form_state}
        action={handleLogin}
        form_fields={form_fields}
        errorState={errorState}
        buttonText="Ingresar"
      />
      {errorState.message && <p style={{ color: '#471248' }}>{errorState.message}</p>}
      <Link to="/forgot-password">Olvide mi password</Link>
      <Link to="/register">Registrarme</Link>
    </div>
  );
};

export default Login;
