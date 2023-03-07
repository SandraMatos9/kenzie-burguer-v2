import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { UserContext } from "../providers/UserContext/UserContext";


const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

   

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {user ? <Outlet /> : <Navigate to='/'/>}
        </>
    )
}
export  default ProtectedRoutes