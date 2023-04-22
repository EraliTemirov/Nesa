import React from 'react';
import "../Sass/section4.scss"
import gul from "../Images/gul.jpg";
import ustki from "../Images/Group 24.png";

const Section4 = () => {
  return (
    <div className='container d-flex p-5'>
      <div className='w-50 '>
        <h3 className='fs-1 w-75 p-4'>Discover the power of creative freedom with Nisa.</h3>
        <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. </p>
        <button className='btn btn-primary m-4'>Explore Section</button>
      </div>
      <div className='rasmlar m-5'>
        <img src={gul} alt="rasm" className='rasm '/>
        <img src={ustki} alt="rasm" className='ustki' />
      </div>
    </div>
  )
}

export default Section4
