import React from 'react';

const ManageInvetory = ({inventory}) => {
    const {img, description, name, supplier, price,} = inventory
    return (
        <div className='card col-lg-4'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>${price}</h5>
            <p><small>{description}</small></p>
            <h6>Supplier:{supplier}</h6>
           <button >add new item</button>
        </div>
    );
};

export default ManageInvetory;