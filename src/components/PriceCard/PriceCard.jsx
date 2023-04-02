import React from 'react';

import Features from '../Features/Features';


const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
               <span  className='text-5xl font-extrabold text-purple-500'>{price.price} </span><span className='text-2xl font-bold'>/mon</span> </h2>
            <h5 className='text-3xl font-bold text-center '>{price.name}</h5>
            <p className='underline font-bold text-orange-300'>Features: </p>
            {
                price.features.map((feature,idx) => <Features
                key={idx}
                feature={feature}
                ></Features>)
            }
            <button className='w-full bg-green-500 py-2 rounded-md mt-auto text-white font-bold  hover:bg-orange-500 hover:text-green-400 duration-500'>Buy Now</button>
        </div>
    );
};

export default PriceCard;