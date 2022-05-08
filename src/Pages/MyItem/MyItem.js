import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyItem = () => {
    const navigate = useNavigate()
    const [user]= useAuthState(auth)
    const [myItems, setmyItems] = useState([])
    useEffect(()=>{
        const getmyItem = async()=>{
            const email = user?.email
            const url=`https://sleepy-citadel-14654.herokuapp.com/myItem?email=${email}`
            try{
                const {data} = await axios.get(url,{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setmyItems(data)
            }
            catch(error){
                console.log(error);
                if(error.response.status===401 || error.response.status===403){
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
       if(user?.email)
       { getmyItem()}
    },[user])
    const deleteMYItem =id=>{
        const processed = window.confirm('Are you sure delete the item')
        if(processed){
            const url= `https://sleepy-citadel-14654.herokuapp.com/myItem/${id}`
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
        <Table striped bordered hover>
            {myItems && myItems.map(Item=> <tr style={{height:'100px'}} className='d-flex border-1 ' key={Item._id}>
                <td><img className='img-fluid' src={Item.img} alt="" /></td>
                <td> <h3>{Item.name}</h3></td>
                <td><h5>${Item.price}</h5></td>
                <td><p><small title={Item.description}>{Item.description.slice(0, 50)}</small></p></td>
                <td> <h6>Supplier:{Item.supplier}</h6></td>
            
            <button className='btn' onClick={()=>deleteMYItem(Item._id)}>delete</button> 
            
            </tr>)}
            
            <ToastContainer/>
            </Table>
    );
};


export default MyItem;