import React from 'react';
import best from '../../../image/best sell/download.jpg'
const BestProducts = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center',
    fontSize: '70px',marginTop:'20px'}}>Our best Sell</h1>
        <div className="container">
            <div className="row">
            <div className='col-lg-6  mx-auto my-3 '>
            
            <div >
               <img src={ best} alt="" /> 
                </div> 
                 <div>
                     
                     <h2>Name: Whole Wheat Atta</h2>
                     <h4>Price:$1</h4>
                    <h3> product Details</h3>
                    <ul>
                        <li>Teer Whole Wheat Atta It is a quality atta contains original fibers and whole wheat. It has moist in it which makes the foods soft and melting.</li>
                        <li>Teer whole wheat flour is harvested into a golden field which is naturally being produced taking a long time.
 
 </li>
                        <li>Fill your hunger and experience the mouth watery roti and bread made by this atta.
 
 </li>
                    </ul>
                    <h6>Suppliar: TEER</h6>
                 </div>
         </div>
            </div>
        </div>
        </div>
    );
};

export default BestProducts;