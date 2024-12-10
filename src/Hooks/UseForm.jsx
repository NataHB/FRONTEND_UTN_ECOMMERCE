import React from 'react'
import { useState } from 'react'

const UseForm = (InitialForm) => {
    const [formState, setFormState] = useState(InitialForm)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleChangeImage = (e, name) => {
        const file = e.target.files[0]
        if(file && file.size > FILE_MB_LIMIT * 1024 * 1024){} 
        const reader = new FileReader()

        reader.onloadend = () => {
                const image_base64 = reader.result
                setFormState(
                    (prev) => ({
                        ...prev,
                        [name]: image_base64
                    })
                )
        }

        if(file) {
            reader.readAsDataURL(file)
        }
    }


    return {
        formState,
        handleChange,
        handleChangeImage

    }
}

export default UseForm
