import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../inventoryCss/inventory.css'
const Inventory = ({inventory}) => {
    const navigate = useNavigate()
    const {_id, img, description, name, supplier, price,} = inventory
    const navigateUPdate = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        
            <Card className='col-lg-4' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle >${price}</Card.Subtitle >

    <Card.Text>
    <small>{description}</small>
    </Card.Text>
    <h6>Supplier:{supplier}</h6>
    <Button  onClick={()=>navigateUPdate(_id)} variant="primary">Update</Button>
  </Card.Body>
</Card>
           
     
    );
};

export default Inventory;