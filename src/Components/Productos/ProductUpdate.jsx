import React, { useEffect, useState, useContext } from 'react'
import Form from '../Form/Form.jsx'
import { useParams, useNavigate } from 'react-router-dom'
import useFormErrors from '../../Hooks/useFormErrors'
import { getAuthenticatedHeaders } from '../../../utils/fetching'
import UseProductDetail from '../../Hooks/UseProductsDetail'
import { CartContext } from '../../Context/CartContext'

const ProductUpdate = ({ setForceUpdate }) => {
    const { product_id } = useParams()
    const navigate = useNavigate()

    const { setUpdateCart } = useContext(CartContext)
    const { product_detail_state } = UseProductDetail(product_id)

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        seller_id: '',
        image_base64: '',
    })

    const { errorState, handleErrors } = useFormErrors({});

    useEffect(() => {
        if (product_detail_state) {
            setFormState(product_detail_state);
        }
    }, [product_detail_state]);

    const handleUpdateProduct = async (formState) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products/update/${product_id}`, {
                method: 'PUT',
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify(formState),
            });

            const data = await response.json();
            console.log(data);

            if (!data.ok) {
                // Manejar errores si los hay
                return handleErrors(data.message);
            } else {
                setUpdateCart(prev => !prev)
                setForceUpdate(prev => !prev)
                navigate('/')
            }
        } catch (error) {
            console.log('Error al crear el producto:', error);
        }
    }

    const form_fields = [
        {
            label: {
            text: 'Ingresa la imagen',
            props: { htmlFor: 'image_base64' },
            },
            field: {
            type: 'input',
            props: {
                placeholder: 'Ingresa tu imagen',
                id: 'image_base64',
                name: 'image_base64',
                type: 'file',
            },
            },
            errors: 'image_base64',
        },
        {
            label: {
            text: 'Ingresa el título',
            props: { htmlFor: 'title' },
            },
            field: {
            type: 'input',
            props: {
                placeholder: 'Ingresa tu título',
                id: 'title',
                name: 'title',
                type: 'text',
            },
            },
            errors: 'title',
        },
        {
            label: {
            text: 'Ingresa la descripción',
            props: { htmlFor: 'description' },
            },
            field: {
            type: 'input',
            props: {
                placeholder: 'Ingresa tu descripción',
                id: 'description',
                name: 'description',
                type: 'text',
            },
            },
            errors: 'description',
        },
        {
            label: {
            text: 'Ingresa el precio',
            props: { htmlFor: 'price' },
            },
            field: {
            type: 'input',
            props: {
                placeholder: 'Ingresa tu precio',
                id: 'price',
                name: 'price',
                type: 'number',
            },
            },
            errors: 'price',
        },
        {
            label: {
            text: 'Ingresa el stock',
            props: { htmlFor: 'stock' },
            },
            field: {
            type: 'input',
            props: {
                placeholder: 'Ingresa tu stock',
                id: 'stock',
                name: 'stock',
                type: 'number',
            },
            },
            errors: 'stock',
        },
        {
            label: {
            text: 'Ingresa la categoría',
            props: { htmlFor: 'category' },
            },
            field: {
            type: 'input',
            props: {
                placeholder: 'Ingresa tu categoría',
                id: 'category',
                name: 'category',
                type: 'text',
            },
            },
            errors: 'category',
        }
        ];

    return (
    <div>
        <Form 
            initial_form_state={formState}
            action={handleUpdateProduct}
            form_fields={form_fields}
            errorState={errorState}
            buttonText='Actualizar producto'
        />
    </div>
    )
}

export default ProductUpdate