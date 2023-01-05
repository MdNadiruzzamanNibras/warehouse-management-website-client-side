import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Feedback = () => {
    const [feedbacks, setFeedbacks]= useState([])
    useEffect(()=>{
        fetch('https://warehouse-management-0zqj.onrender.com/feedback')
        .then(res=>res.json())
        .then(data=> setFeedbacks(data))
    },[])
    return (
        <div className='container'>
            <div className="row">
            <h1 style={{textAlign: 'center',
    fontSize: '80px', color:'#d87607', margin:'30px auto'}}>Customers Reviews</h1>
             {
                 feedbacks.map(feedback=> <Card key={feedback._id} className='col-lg-4 mx-auto' style={{ width: '18rem' }} >
                        <Card.Title>{feedback.name}</Card.Title>
                        <Card.Subtitle>{feedback.review}</Card.Subtitle>
                        </Card>)
             }
             
  
  
            </div>
        </div>
    );
};

export default Feedback;