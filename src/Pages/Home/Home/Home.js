import React from 'react';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import Feedback from '../Feedback/Feedback';
import Inventories from '../Inventory/Inverntories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Feedback></Feedback>
            <BestProducts></BestProducts>
        </div>
    );
};

export default Home;