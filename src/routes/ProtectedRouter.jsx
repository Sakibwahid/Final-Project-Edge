import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRouter = ({ children }) => {
    const { user } = useContext(AuthContext);
    const currentLocation = useLocation();
    //console.log(currentLocation);
    if (user) {
        return children;
    } else {
        return <Navigate to={'/login'} state={currentLocation?.pathname}></Navigate>;
    };
}
export default ProtectedRouter;