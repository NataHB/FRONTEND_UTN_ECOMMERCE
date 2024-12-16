import React, { useState } from 'react';
import useForm from '../../Hooks/UseForm';
import './Form.css';

const Form = ({ initial_form_state, action, form_fields, errorState, buttonText }) => {
  const { formState, handleChange } = useForm(initial_form_state);
  
  // Estado para manejar la previsualización de la imagen
  const [imagePreview, setImagePreview] = useState(null);

  // Manejo del cambio para los archivos (imágenes)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convertir la imagen a Base64 (por ejemplo) para enviarla
      const reader = new FileReader();
      reader.onloadend = () => {
        // Guardamos el archivo como Base64 en el estado
        handleChange({
          target: {
            name: e.target.name,
            value: reader.result // Base64 de la imagen
          }
        });
        setImagePreview(reader.result); // Establecer la previsualización de la imagen
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {form_fields.map((field, index) => {
        const { label, field: inputField, errors } = field;

        return (
          <div key={index} className="form-field">
            <label {...label.props}>{label.text}</label>
            {/* Verificamos si el campo es de tipo "file" */}
            {inputField.props.type === 'file' ? (
              <>
                <input
                  {...inputField.props}
                  onChange={handleFileChange}
                  // El valor no se establece para el campo de archivo
                  // Solo se manejará cuando el archivo sea seleccionado
                />
                {/* Mostrar la previsualización de la imagen si existe */}
                {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
              </>
            ) : (
              <input
                {...inputField.props}
                value={formState[inputField.props.name] || ''}
                onChange={handleChange}
              />
            )}
            {errorState[errors] && (
              <ul>
                {errorState[errors].map((error, i) => (
                  <li key={i} style={{ color: '#471248' }}>
                    {error}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
