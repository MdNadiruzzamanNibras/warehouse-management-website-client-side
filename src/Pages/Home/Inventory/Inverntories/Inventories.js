import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInvertories]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=> setInvertories(data))
    },[])
    return (
        <div>
           <h1>number: {inventories.length}</h1>
            <h2>The Collection</h2>
            {
                inventories.slice(0, 5).map(inventory=> <Inventory key={inventory._id} inventory={inventory}></Inventory>)
            }
        </div>
    );
};

export default Inventories;