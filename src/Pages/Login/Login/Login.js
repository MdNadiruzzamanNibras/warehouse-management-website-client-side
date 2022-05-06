import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init'
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin =event=>{
        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        signInWithEmailAndPassword(email, password)
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