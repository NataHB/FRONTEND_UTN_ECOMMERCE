import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Form from '..//Form/Form.jsx';
import {jwtDecode} from 'jwt-decode';
import UseFormErrors from '../../Hooks/useFormErrors'; 

const RecoveryPasswordScreen = () => {
    const navigate = useNavigate();
  const { reset_token } = useParams();
  console.log('Token de reset de contraseña:', reset_token);

  // Decodificación del token
  try {
    console.log(jwtDecode(reset_token));
  } catch (error) {
    console.error('Error al decodificar el token:', error);
  }

  // Acción para manejar el cambio de contraseña
  const actionRecoveryPassword = async (form_state) => {
    console.log('Formulario enviado:', form_state);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/recovery-password/${reset_token}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: form_state.password }),
        }
      );

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      if (!data.ok) {
        return handleErrors(data);
      }
      else{
        navigate('/');
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  // Configuración de los campos del formulario
  const form_fields = [
    {
      label: {
        text: 'Ingresa nueva contraseña:',
        props: { htmlFor: 'password' },
      },
      field: {
        type: 'input',
        props: {
          name: 'password',
          id: 'password',
          placeholder: '',
          type: 'password',
        },
      },
      errors: 'password',
      div: {
        props: { className: 'row_field' },
      },
    },
  ];

  // Estado inicial del formulario
  const initial_form_state = {
    password: '',
  };

  // Usar hook de errores
  const { errorState, handleErrors } = UseFormErrors({});

  return (
    <div>
      <Form
        action={actionRecoveryPassword}
        form_fields={form_fields}
        initial_form_state={initial_form_state}
        errorState={errorState}
        buttonText="Restablecer contraseña"
      >
        <button type="submit">Restablecer</button>
        <Link to="/login">Iniciar sesión</Link>
      </Form>
    </div>
  );
};

export default RecoveryPasswordScreen;
