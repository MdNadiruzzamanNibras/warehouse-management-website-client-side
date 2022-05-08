import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const {inventoryId} = useParams()
    const [inventory, setInvertory] = useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInvertory(data))
    }
        ,[])
       const [minusDeliver, setMInusDeliver]= useState(0)
       
       const handleDel = id=>{
           const Quantity= inventory.quantity - 1
           if(Quantity){
               console.log('its work');
               const url =`http://localhost:5000/inventory/${id}`
               fetch(url,{
                   method: 'PUT',
                   headers:{
                    'Accept':'application/json',
                    'content-type':'application/json'
                   },
                   body: JSON.stringify()
               })
               .then(res=>res.json())
               .then(data=> console.log(data))
           }

       }
    return (
        <div key={inventory._id}>
            <div className="container">
                <div className="row">
                    <div>
                        <img src={inventory.img} alt="" />
                    </div>
                    <div>
                        
                        <h3>{inventory.name}</h3>
                        <h5>${inventory.price}</h5>
                        <p><small>{inventory.description}</small></p>
                        <h6>Supplier:{inventory.supplier}</h6>
                        <button onClick={()=>handleDel(inventory._id)}>delivered</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;