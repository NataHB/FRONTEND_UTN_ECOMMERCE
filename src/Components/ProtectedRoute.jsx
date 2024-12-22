import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const { is_authenticated } = React.useContext(AuthContext)

    return(
        is_authenticated
        ? <Outlet />
        : <Navigate to={"/login"} />
    )
}

export default ProtectedRoute