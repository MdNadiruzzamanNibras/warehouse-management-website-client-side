import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../../Hooks/useToken';
import '../../FormDesign/FormDesign.css'
import Loading from '../../Shared/Loading/Loading';
const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [token] =useToken(user)
      const navigate = useNavigate()
      if(user){
        console.log(user, 'user')}
      if(token){
          navigate('/')
      }
      if(loading){
          return <Loading></Loading>
      }
      const handleRegistration = event=>{
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;
          createUserWithEmailAndPassword(email, password)
          navigate('/')
      }

    return (
        <div className='Formdesign'>
            <h4 style={{textAlign: 'center',
    fontSize: '50px', margin:'20px auto', color:'#3e9cb9'}}>Please Registration</h4>
            <form  onSubmit={handleRegistration}>
            <input type="text" name="name" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <input type="text" name="email" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <input type="password" name="password" id="" className='w-50 my-2 mx-auto py-2 d-block' />
            <button className='form-btn'>Registration</button>
            </form>
            <SocialLogin></SocialLogin>
            <div className='w-50 my-3 mx-auto'>
            <p>Already Account? <Link to='/login' className='text-primary pe-auto text-decoration-none' >Please Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;