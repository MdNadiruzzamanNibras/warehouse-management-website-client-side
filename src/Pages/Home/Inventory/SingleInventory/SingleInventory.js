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
    return (
        <div>
            {inventory.name}
        </div>
    );
};

export default SingleInventory;