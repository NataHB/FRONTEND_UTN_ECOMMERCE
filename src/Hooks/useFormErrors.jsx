import {useState} from 'react'

const useFormErrors = () => {
    const [errorState, setErrors] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleErrors = (errors) => {
        const newErrors = {}

        if(errors.email) {
            newErrors.email = errors.email.errors.map(error => error.message)
        }

        if(errors.password) {
            newErrors.password = errors.password.errors.map(error => error.message)
        }

        if(errors.name) {
            newErrors.name = errors.name.errors.map(error => error.message)
        }

        if(errors.title) {
            newErrors.title = errors.title.errors.map(error => error.message)
        }

        if(errors.description) {
            newErrors.description = errors.description.errors.map(error => error.message)
        }

        if(errors.price) {
            newErrors.price = errors.price.errors.map(error => error.message)
        }

        if(errors.stock) {
            newErrors.stock = errors.stock.errors.map(error => error.message)
        }

        if(errors.category) {
            newErrors.category = errors.category.errors.map(error => error.message)
        }

        if(errors.seller_id) {
            newErrors.seller_id = errors.seller_id.errors.map(error => error.message)
        }

        if(errors.message) {
            newErrors.message = errors.message
        }

        setErrors(newErrors)
    }

    return {
        errorState,
        handleErrors
    }
}

export default useFormErrors

