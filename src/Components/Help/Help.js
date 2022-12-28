import React from 'react';
import "./Help.css";
import image from "./image5.png";
import image2 from "./image6.png";

function Help() {
  return (
    <div className='flex flex-wrap justify-center  gap-44' style={{ backgroundImage:`url(${image})`, backgroundRepeat: 'no-repeat', height:'745px',backgroundSize:'100%',width:'1440px%'}}>
            <div className='mt-28	'>
                <h1 className='text-4xl font-normal	'>WE ARE HERE TO</h1>
                <h1 className='text-9xl	font-normal	'>HELP</h1>
                <button type="button" className='w-80 h-16 rounded-md font-normal text-2xl mt-20' style={{background: '#2DD3E3'}}>BOOK AN APPOINTMENT</button>
            </div>
            <div className='mt-28'>
                <img src={image2} alt="" className='image2'/>
            </div>
    </div>
  )
}

export default Help