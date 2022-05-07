import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]= useAuthState(auth)
    const [myItems, setmyItems] = useState([])
    useEffect(()=>{
        const getmyItem = async()=>{
            const email = user?.email
            const url=`http://localhost:5000/myItem?email=${email}`
            const {data} = await axios.get(url)
            setmyItems(data)
        }
       if(user?.email)
       { getmyItem()}
    },[user])
    return (
        <div>
            {myItems.map(myItem=> <div key={myItem._id}> {myItem.name} </div>)}
        </div>
    );
};

export default MyItem;