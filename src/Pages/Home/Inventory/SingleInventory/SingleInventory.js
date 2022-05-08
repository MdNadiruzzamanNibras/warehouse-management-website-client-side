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
       const handleDel= ()=>{
        let Quntity = inventory.quantity
       let minusQuan = Quntity - 1
        setMInusDeliver(minusQuan)
    }
       useEffect(()=>{},[minusDeliver])
    return (
        <div key={inventory._id}>
            <div className="container">
                <div className="row">
                    <div>
                        <img src={inventory.img} alt="" />
                    </div>
                    <div>
                        
                        <h2>{inventory.name}</h2>
                        <h3>{inventory.quantity}</h3>
                    </div>
                    <button onClick={handleDel}>delivered</button>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;