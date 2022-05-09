import React from 'react';
import notFound from '../../image/notFound/404-error-page-not-found.jpg'
import './NotFoun.css'
const NotFound = () => {
    return (
        <div >
            <img className='NotFound' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;