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
    let errorMassage;
    if(error){
        errorMassage = <div className='text-danger'>Error: {error?.message}</div>
    }
    const hanleReviews=()=>{
        
        toast('Thank you for your review');
      
    }
    return (
        <div className='container'>
            <div className="row">
            <div className='Formdesign'>
            <h4 style={{textAlign: 'center',
    fontSize: '50px', margin:'20px auto', color:'#367d84'}}>Gives Feedback</h4>
            <form >
            <input type="text" className='' name="name" id="" placeholder='Your Name' required/>
            <br />
            <input type="email" name="email" value={user.email} placeholder='Your Name' readOnly required/>
            <br />
            <input type="text" name="address" id="" placeholder='Your Address' required/>
            <br />
            <input type="text" name="invetorey" id="" placeholder='Your Favourite Products' required/>
            <br />
            <input type="number" name="phone" id="" placeholder='Your Phone number' required/>
            <br />
             <button className='form-btn' onClick={hanleReviews}>Reviews</button>
            </form>
            </div>
            <ToastContainer/>
             { errorMassage}
            </div>
        </div>
    );
};

export default Takereviews;