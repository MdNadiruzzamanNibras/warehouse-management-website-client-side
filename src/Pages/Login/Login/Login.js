import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
   const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin =async (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password)
        const {data}= await axios.post('http://localhost:5000/login', {email})
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
       
    }
    return (
        <div>
           <form onSubmit={handleLogin}>
           <input type="text" name="email" id="" className='w-50 my-2 mx-auto py-2 d-block' />
           <input type="password" name="password" id="" className='w-50 my-2 py-2 mx-auto d-block' />
           <input type="submit" className='mx-auto d-block' value="Login" />
           <Link to='/registration'>registration</Link>
           </form>
        </div>
    );
};

export default Login;