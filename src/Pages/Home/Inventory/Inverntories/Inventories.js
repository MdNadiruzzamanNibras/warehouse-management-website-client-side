import React from 'react';
import useInventory from '../../../../Hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories]= useInventory()
    
    return (
        <div>
           <h1>number: {inventories.length}</h1>
            <h2>The Collection</h2>
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