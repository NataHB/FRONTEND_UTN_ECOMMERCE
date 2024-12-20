import React, { useState } from 'react';
import useForm from '../../Hooks/UseForm';
import './Form.css';

const Form = ({ initial_form_state, action, form_fields, errorState, buttonText }) => {
  const { formState, handleChange } = useForm(initial_form_state);
  
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange({
          target: {
            name: e.target.name,
            value: reader.result 
          }
        });
        setImagePreview(reader.result); 
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
            {inputField.props.type === 'file' ? (
              <>
                <input
                  {...inputField.props}
                  onChange={handleFileChange}
                />
                {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
              </>
            ) : (
              <input
                {...inputField.props}
                value={formState[inputField.props.name] || ''}
                placeholder={initial_form_state[inputField.props.name] || inputField.props.placeholder}
                onChange={handleChange}
              />
            )}
            {errorState[errors] && (
              <ul className='error'>
                {errorState[errors].map((error, i) => (
                  <li key={i}>
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
