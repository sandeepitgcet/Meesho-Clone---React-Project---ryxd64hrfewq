import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    const user = useSelector((state) => state.user.userCredentials);

    // if(!Object.keys(user).length){
    //     return <Navigate to="/login" />
    // }

    return children;
};

export default ProtectedRoute;