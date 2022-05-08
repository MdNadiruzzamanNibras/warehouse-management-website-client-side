import React, { useState } from 'react';
import bannerFirst from '../../../image/banner/banner-first.jpg'
import bannerSecond from '../../../image/banner/banner-second.jpg'
import bannerthird from '../../../image/banner/banner-third.jpg'
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{maxHeight:'600px'}}
                    className="d-block w-100"
                    src={bannerFirst}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                style={{maxHeight:'600px'}}
                    className="d-block w-100"
                    src={bannerSecond}
                    alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{maxHeight:'600px'}}
                    className="d-block w-100"
                    src={bannerthird}
                    alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;