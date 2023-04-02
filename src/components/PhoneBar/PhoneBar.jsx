import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phones,setPhone] = useState([])
    useEffect(()=>{
    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    // .then(res => res.json())
    // .then(data => setPhone(data))

    axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(data => {
        const loadedData = data.data.data;
        console.log(loadedData)
         const phnoesData = loadedData.map(phone => {
          const  parts = phone.slug.split('-')[1];
          const price = parseInt(parts)
          const phnoneInfo = {
            name: phone.phone_name,
            price: price
          }
          return phnoneInfo;
         } )
         console.log(phnoesData)
         setPhone(phnoesData)
    })
    },[])
    return (
        <div className='mx-12 my-8'>
                {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart width={1000}
            height={500}
           data={phones}
            >
                <Bar dataKey="price" fill='orange'></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default PhoneBar;