import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import EmailVerified from '../Components/EmailVerified/EmailVerified';
import auth from '../Firebase/Firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()

    if(loading){
        return <p>Loading</p>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    if(!user?.emailVerified){
        return <EmailVerified></EmailVerified>
    }

    return children;
};

export default RequireAuth;