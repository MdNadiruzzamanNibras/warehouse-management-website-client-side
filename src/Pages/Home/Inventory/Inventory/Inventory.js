import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../inventoryCss/inventory.css'
const Inventory = ({inventory}) => {
    const navigate = useNavigate()
    const {_id, img, description, name, supplier, price,} = inventory
    const navigateUPdate = id =>{
        navigate(`/inventory/${id}`)
    }
    console.log(inventory);
    return (
        <div className='card col-lg-4'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>${price}</h5>
            <p><small>{description}</small></p>
            <h6>Supplier:{supplier}</h6>
           <button onClick={()=>navigateUPdate(_id)}>Update</button>
        </div>
    );
};

export default Inventory;