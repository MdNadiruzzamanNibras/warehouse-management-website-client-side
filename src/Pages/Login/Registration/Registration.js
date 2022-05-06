import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const handleRegistration = event=>{
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;
          console.log(name, email, password)
          createUserWithEmailAndPassword(email, password)
          navigate('/')
      }

    return (
        <div>
            <form onSubmit={handleRegistration}>
            <input type="text" name="name" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <input type="text" name="email" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <input type="password" name="password" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <input type="submit" className='mx-auto d-block' value="registration" />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;