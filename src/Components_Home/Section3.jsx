import React from 'react';
import section3 from "../Images/bratcofe.jpg";
import section32 from "../Images/info card.png"
import rasm1 from "../Images/Rasm1.png"
import rasm2 from "../Images/layers.svg"
import "../Sass/Section3.scss"

const Section3 = () => {
  return (
    <div className='container d-flex p-5'>
      <div className='w-50 img'>
        <img src={section3} alt="rasm" className='bratcofe' />
        <img src={section32} alt="rasm" className='infocard' />
      </div>
      <div className='w-50  mt-5'>
        <h3 className='fs-1 pb-3'>Discover the power of creative freedom with Nisa.</h3>
        <p className='p-2 fs-5 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. </p>
        <div className='d-flex justify-content-around'>
        <button className=' fs-4 btn btn-primary'>Explore Section</button>
        <button className='fs-4 btn btn-secondary'>Get Started </button>
        </div>
        <div className='d-flex p-3'>
            <div className='d-flex  w-50 mt-5 align-items-center'><img src={rasm1} alt="rasm" />
            <p>Built to be customise with complete ease.</p>
            </div>
            
            <div className='d-flex w-50 mt-5 align-items-center'><img src={rasm2} alt="rasm"/> <p>All the pages you need to go live.</p></div>
            
        
        </div>
       
      </div>
    </div>
  )
}

export default Section3
