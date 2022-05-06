import React from 'react';
import useInventory from '../../../Hooks/useInventory';
import ManageInvetory from '../ManageInventory/ManageInvetory';

const ManageInventories = () => {
    const [inventories]= useInventory()
    return (
        <div>
            <div className="container">
                <div className="row">
                {
                inventories.map(inventory=> <ManageInvetory key={inventory._id} inventory={inventory}></ManageInvetory>)
            }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;