import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const restockRef =  useRef()
    const {inventoryId} = useParams()
    const [inventory, setInvertory] = useState({})
    useEffect(()=>{
        const url =`https://sleepy-citadel-14654.herokuapp.com/inventory/${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setInvertory(data)
               setMInusDeliver(data)})
    }
        ,[inventoryId])
       const [minusDeliver, setMInusDeliver]= useState(0)
       
       const handleDel = id=>{
           const Quantity= inventory.quantity
           const newQuauntity = Quantity - 1
           console.log(newQuauntity);
           if(newQuauntity){
               console.log('its work');
               const url =`http://localhost:5000/inventory/${id}`
               fetch(url,{
                   method: 'PUT',
                   headers:{
                    'content-type':'application/json'
                   },
                   body: JSON.stringify({quantity: newQuauntity})
                  
               })
             
               .then(res=>res.json())
               .then(data=> {setInvertory(data)})
           }

       }
       const handleplus = id=>{
           const Quantity= inventory.quantity
           const restock = restockRef.current.value 
           const restockpars = parseInt(restock)
           console.log(restockpars);
           const newQuauntity = Quantity + restockpars
           console.log(newQuauntity);
           if(newQuauntity){
               const url =`https://sleepy-citadel-14654.herokuapp.com/inventory/${id}`
               fetch(url,{
                   method: 'PUT',
                   headers:{
                    'content-type':'application/json'
                   },
                   body: JSON.stringify({quantity: newQuauntity})
                  
               })
             
               .then(res=>res.json())
               .then(data=> {setInvertory(data)
               console.log(data)})
           }

       }
    return (
        <div key={inventory._id}>
            <div className="container">
                <div className="row" key={inventory._id}>
                    <div>
                        <img src={inventory.img} alt="" />
                    </div>
                    <div>
                        
                        <h3>{inventory.name}</h3>
                        <h5>${inventory.price}</h5>
                       
                        <h6>{inventory.quantity}</h6>
                        <p><small>{inventory.description}</small></p>
                        <h6>Supplier:{inventory.supplier}</h6>
                        <button onClick={()=>handleDel(inventory._id)}>delivered</button>
                        <input type="number" ref={restockRef} />
                        <button onClick={handleplus}>Restok</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;