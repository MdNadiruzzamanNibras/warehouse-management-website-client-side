import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer fixed='bottom' style={{height:'100px', width:'100%', color:'black'}}  className='text-center  m-3 '>
            <h6 style={{marginTop:'40px'}}>Authentic Grocery copyright © {year}</h6>
        </footer>
    );
};

export default Footer;