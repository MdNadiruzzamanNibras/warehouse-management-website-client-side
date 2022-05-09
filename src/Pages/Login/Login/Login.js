import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init'
import useToken from '../../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import '../../FormDesign/FormDesign.css'
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const from = location.state?.from?.pathname || "/";
    
        const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
        const [token] = useToken(user)
        if(user){
            console.log(user, 'user')}
        if(loading){
            return<Loading></Loading>
        }

        if(user){
            navigate(from, { replace: true })
        }
        if(token){
            navigate(from, { replace: true })
        }
        let errorMassage
        if(error){
             errorMassage = <div className='text-danger'>Error: {error?.message}</div>
        }
    const handleLogin = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
         signInWithEmailAndPassword(email, password)
       
    }
    const handleResetPass =async event=>{
        const email = event.target.email.value
        if(email){
            await sendPasswordResetEmail(email)
            toast('Your passaword change')
        }
    }
    return (
        <div className='Formdesign'>
            <h4 style={{textAlign: 'center',
    fontSize: '50px', margin:'20px auto', color:'#3e9cb9'}}>Please Login</h4>
           <form onSubmit={handleLogin}  >
           <input type="text" name="email" id="" className='w-50 my-2 mx-auto py-2 d-block' />
           <input type="password" name="password" id="" className='w-50 my-2 py-2 mx-auto d-block' />
           {errorMassage}
           <button className='form-btn'>Login</button>
           
           </form>
           <ToastContainer/>
           <SocialLogin></SocialLogin>
           <div className='w-50 my-3 mx-auto'>
           <p>New to Authentic Grocery? <Link to="/registration" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={ handleResetPass}>Reset Password</button> </p>
            </div>
        </div>
    );
};

export default Login;