import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user,loading}=useContext(AuthContext);
const location = useLocation();

if(loading){
    return <progress className='ms-96 progress w-56'></progress>
}

if(user?.email){
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;