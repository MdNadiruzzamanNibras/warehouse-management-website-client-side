import React from 'react';
import useInventory from '../../../Hooks/useInventory';
import ManageInvetory from '../ManageInventory/ManageInvetory';

const ManageInventories = () => {
    const [inventories]= useInventory()
    return (
        <div>
            {
                inventories.map(inventory=> <ManageInvetory key={inventory._id} inventory={inventory}></ManageInvetory>)
            }
        </div>
    );
};

export default ManageInventories;