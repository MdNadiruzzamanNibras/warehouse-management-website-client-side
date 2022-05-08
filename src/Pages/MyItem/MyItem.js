import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]= useAuthState(auth)
    const [myItems, setmyItems] = useState([])
    useEffect(()=>{
        const getmyItem = async()=>{
            const email = user?.email
            const url=`http://localhost:5000/myItem?email=${email}`
            const {data} = await axios.get(url,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setmyItems(data)
        }
       if(user?.email)
       { getmyItem()}
    },[user])
    const deleteMYItem =id=>{
        const processed = window.confirm('Are you sure delete the item')
        if(processed){
            const url= `http://localhost:5000/myItem/${id}`
            fetch(url,{
                method:'DELETE',
               
            })
            .then(res=> res.json())
            .then(data=>{
              toast(data);
             const remaining = myItems.filter(Item => Item._id !== id);
             setmyItems(remaining);
            })
        }
    }
    return (
        <div>
            {myItems && myItems.map(Item=> <div key={Item._id}> {Item.name} 
            
            <button onClick={()=>deleteMYItem(Item._id)}>delete</button> 
            
            </div>)}
            <ToastContainer/>
        </div>
    );
};


export default MyItem;