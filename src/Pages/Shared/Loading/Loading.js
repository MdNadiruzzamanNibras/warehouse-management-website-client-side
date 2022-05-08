import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'500px'}} className='w-100'>
              <Spinner animation="border" variant="success" />

        </div>
    );
};

export default Loading;