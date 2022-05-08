import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init'
import useToken from '../../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
        const [token] = useToken(user)
        if(loading){
            <Loading></Loading>
        }
        
        if(token){
            navigate(from, { replace: true })
        }
        let errorMassage
        if(error){
             errorMassage = <div className='text-danger'>Error: {error?.message}</div>
        }
    const handleLogin =async (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password)
        
       
       
    }
    const handleResetPass =async event=>{
        const email = event.target.email.value
        if(email){
            await sendPasswordResetEmail(email)
            toast('Yo')
        }
    }
    return (
        <div className='mx-auto' style={{width:'400px'}}>
           <form onSubmit={handleLogin}  >
           <input type="text" name="email" id="" className='w-50 my-2 mx-auto py-2 d-block' />
           <input type="password" name="password" id="" className='w-50 my-2 py-2 mx-auto d-block' />
           {errorMassage}
           <input type="submit" className='mx-auto d-block' value="Login" />
           <div className='d-flex mx-auto'>
           <Link to='/registration'>registration</Link>
           <button onClick={handleResetPass}>Reset Password</button>
           </div>
           <ToastContainer/>
           </form>
        </div>
    );
};

export default Login;