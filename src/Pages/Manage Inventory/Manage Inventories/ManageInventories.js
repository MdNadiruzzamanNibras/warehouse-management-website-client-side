import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useInventory from '../../../Hooks/useInventory';


const ManageInventories = () => {
    const [inventories, setInvertories]= useInventory()
    const deleteInventory =id=>{
        const processed = window.confirm('Are you sure delete the item')
        if(processed){
            const url= `https://sleepy-citadel-14654.herokuapp.com/inventory/${id}`
            fetch(url,{
                method:'DELETE',
               
            })
            .then(res=> res.json())
            .then(data=>{
              toast(data);
             const remaining = inventories.filter(inventory => inventory._id !== id);
             setInvertories(remaining);
            })
        }
 
     }
    return (
        <div>
            <div className="container">
                <div className="row">
                {
                inventories && inventories.map(inventory=> <div key={inventory._id} className='d-flex '>
                <img src={inventory.img} alt="" />
                <h3>{inventory.name}</h3>
                <h5>${inventory.price}</h5>
                <p><small>{inventory.description}</small></p>
                <h6>Supplier:{inventory.supplier}</h6>
               <button onClick={()=>deleteInventory(inventory._id)}>delete</button>
              <ToastContainer></ToastContainer>
            </div>)
            }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;