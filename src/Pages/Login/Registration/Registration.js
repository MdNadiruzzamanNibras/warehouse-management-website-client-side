import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleRegistration = event=>{
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;
          console.log(name, email, password)
          createUserWithEmailAndPassword(email, password)
      }

    return (
        <div>
            <form onSubmit={handleRegistration}>
            <input type="text" name="name" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <input type="text" name="email" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <input type="password" name="password" id="" className='w-50 my-2 mx-auto py-2 d-block' />
           
            </form>
        </div>
    );
};

export default Registration;