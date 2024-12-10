import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Es un COMPONENTE
export const AuthContext = createContext();

//Necesitamos crear el COMPONENTE PROVEEDOR
export const AuthProvider = ({children}) =>{

    const accessToken = sessionStorage.getItem('accessToken')
    const [is_authenticated, setIsAuthenticated] = useState(Boolean(accessToken));
    const navigate = useNavigate();

    useEffect(() => {
        if(accessToken){
            setIsAuthenticated(true)
        }
    }, [])

    const login = (accessToken) => {
        sessionStorage.setItem('accessToken', accessToken)
        setIsAuthenticated(true)
        navigate('/')
    }

    const logout = () => {
        sessionStorage.removeItem('accessToken')
        setIsAuthenticated(false)
        navigate('/login')
    }

    return(
    //CHILDREN es una PROP para pasar el contenido
        <AuthContext.Provider  
            value = {{
                is_authenticated: is_authenticated
                , login: login
                , logout: logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}