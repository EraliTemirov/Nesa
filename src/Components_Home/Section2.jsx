import React from 'react';

import icon1 from "../Images/Icon1.png";
import icon2 from "../Images/layers.svg";
import icon3 from "../Images/Icon3.png";
import icon4 from "../Images/Icon4.png"

const Section2 = () => {
  return (
    <div className='container mt-5 d-flex'>
      <div className='w-50'>
        <h3 className='fs-2 pt-5'>Share the features that help your customers</h3>
        <p className='fs-5 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. Cursus facilisis diam turpis leo netus consequat phasellus. Netus ipsum sed faucibus enim. </p>
        <button className='btn btn-primary Btnexplore fs-4 mb-3 mt-5 '>Explore Section</button>
      </div>
      <div className='d-flex w-50 flex-wrap'>
        <div className='w-50 text-center p-4'>
            
            <img src={icon1} alt="icon" />
            <h4 className='pt-3 pb-3'>Blog</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className='w-50 text-center p-4' >
            
            <img src={icon2} alt="icon" />
            <h4 className='pt-3 pb-3'>Blog</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className='w-50 text-center p-4'>
            
            <img src={icon3} alt="icon" />
            <h4 className='pt-3 pb-3'>Blog</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className='w-50 text-center p-4' >
            
            <img src={icon4} alt="icon" />
            <h4 className='pt-3 pb-3'>Blog</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  )
}

export default Section2
