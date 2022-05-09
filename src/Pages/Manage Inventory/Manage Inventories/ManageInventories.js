import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                inventories && inventories.map(inventory=>  <Card className='col-lg-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={inventory.img} />
                <Card.Body>
                  <Card.Title>{inventory.name}</Card.Title>
                  <Card.Subtitle >${inventory.price}</Card.Subtitle >
              
                  <Card.Text>
                  <small>{inventory.description}</small>
                  </Card.Text>
                  <h6>Supplier:{inventory.supplier}</h6>
                  <Button className='bg-danger' onClick={()=>deleteInventory(inventory._id)}>delete</Button>
                  <Link to={'/addItem'}><Button >Add New Item</Button></Link>
                </Card.Body>
              </Card>
               
             
           )
            }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;