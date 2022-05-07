import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyItem = () => {
    const [myItems, setmyItems] = useState([])
    useEffect(()=>{
        const getItem = async()=>{
            const url=`http://localhost:5000/myItem`
            const {data} = await axios.get(url, {
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setmyItems(data)
        }
        
    },[])
    return (
        <div>
            my
        </div>
    );
};

export default MyItem;