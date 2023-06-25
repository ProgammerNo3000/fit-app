import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoutes = () => {
    let auth = localStorage.getItem("isLogged");

    return(
        // when not logged in, then go always to login page
        auth !== "true" ? <Navigate to="/login"/> : <Outlet/> 
    )
}

