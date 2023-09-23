import React, { useState } from 'react';
import useInventory from '../../../../Hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, Loading] = useInventory()
    
    return (
        <div>
           {Loading && <p>Loading...</p>}
            <h2 style={{textAlign: 'center',
    fontSize: '100px', color:'#d87607', margin:"30px auto"}}>The Collection</h2>
            <div className="container">
                <div className="row">
                {
                inventories.slice(0, 6).map(inventory=> <Inventory key={inventory._id} inventory={inventory}></Inventory>)
            }
                </div>
            </div>
        </div>
    );
};

export default Inventories;