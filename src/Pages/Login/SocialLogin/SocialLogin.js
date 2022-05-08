import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const from = location.state?.from?.pathname || "/";
    const [token] =useToken(user)
    if(token){
        navigate(from, { replace: true })
    }
    return (
        <div>
            <button onClick={()=>signInWithGoogle()}>sign in google</button>
        </div>
    );
};

export default SocialLogin;