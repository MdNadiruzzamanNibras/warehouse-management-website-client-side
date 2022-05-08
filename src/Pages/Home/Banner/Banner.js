import React from 'react';
import './Banner.css'
import bannerFirst from '../../../image/banner/banner-first.jpg'
const Banner = () => {
    return (
        <div className="container">
            <img src={bannerFirst} alt="" />
        </div>
    );
};

export default Banner;