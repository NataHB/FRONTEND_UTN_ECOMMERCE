import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../Form/Form.jsx';
import useFormErrors from '../../Hooks/useFormErrors';

const ForgotPassword = () => {
  const navigate = useNavigate();

  // Usar hook de errores
  const { errorState, handleErrors } = useFormErrors();

  // Acción para manejar el envío del formulario
  const handleSubmit = async (form_state) => {
    console.log('Formulario enviado:', form_state);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: form_state.email }),
      });

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      if (!data.ok) {
        // Si no es correcto, manejamos el error con handleErrors
        handleErrors(data);  // Esto actualizará el estado de los errores
      }

    } catch (error) {
      console.error('Error durante la solicitud:', error);
      handleErrors({ message: 'Hubo un problema al procesar tu solicitud. Intenta nuevamente.' }); // Error genérico
    }
  };

  // Configuración de los campos del formulario
  const form_fields = [
    {
      label: {
        text: 'Ingresa tu email:',
        props: { htmlFor: 'email' },
      },
      field: {
        type: 'input',
        props: {
          name: 'email',
          id: 'email',
          placeholder: 'Ingresa tu email',
          type: 'email',
        },
      },
      div: {
        props: { className: 'row_field' },
      },
    },
  ];

  // Estado inicial del formulario
  const initial_form_state = {
    email: '',
  };

  return (
    <div>
      <Form
        action={handleSubmit}
        form_fields={form_fields}
        initial_form_state={initial_form_state}
        errorState={errorState}
        buttonText="Restablecer"
      >
        <button type="submit">Restablecer</button>
        <Link to="/">Recordé mi password</Link>
      </Form>

      {/* Mostrar errores si existen */}
      {errorState.message && <p style={{ color: '#471248' }}> {errorState.message}</p>}
    </div>
  );
};

export default ForgotPassword;
