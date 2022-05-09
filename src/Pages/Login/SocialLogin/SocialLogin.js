import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading'
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const from = location.state?.from?.pathname || "/";
    const [token] =useToken(user)
    if(token){
        navigate(from, { replace: true })
    }
    if(loading){
        return<Loading></Loading>
    }
    if(error){
        <div className='text-danger'>Error: {error?.message}</div>
    }
    return (
        <div className='d-flex align-items-center justify-content-center my-2'>
            
            <button type="button" onClick={()=>signInWithGoogle()} class="btn btn-secondary px-3">Sign In Google</button>
        </div>
    );
};

export default SocialLogin;