import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Takereviews = () => {
    const [user, loading, error] = useAuthState(auth)
    
    if(loading){
        return<Loading></Loading>
    }
    const hanleReviews=()=>{
        
        toast('Thank you for your review');
      
    }
    return (
        <div className='container'>
            <div className="row">
            <form >
            <input type="text" name="name" id="" placeholder='Your Name' required/>
            <input type="email" name="email" value={user.email} placeholder='Your Name' readOnly required/>
            <input type="text" name="address" id="" placeholder='Your Address' required/>
            <input type="text" name="invetorey" id="" placeholder='Your Favourite Products' required/>
            <input type="number" name="phone" id="" placeholder='Your Phone number' required/>
             <button className='btn btn-warning' onClick={hanleReviews} type='submit'>Reviews</button>
             <ToastContainer/>
            </form>
            </div>
        </div>
    );
};

export default Takereviews;