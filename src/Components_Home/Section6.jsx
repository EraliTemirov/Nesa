import React from 'react';
import sariq from "../Images/ellepssariq.png";
import star from "../Images/Star.png";
import left from "../Images/chevron-left icon.png";
import right from "../Images/chevron-Right icon.png";

const Section6 = () => {
  return (
    <div className='container mt-5  text-center '>
      <h3 className='pt-5 fs-1 mb-5 '>Customers love the ease and simplicity</h3>
      <div className='d-flex justify-content-around ' >
        <div className='w-25 '>
            <div className='d-flex align-items-center'>
            <img src={sariq} alt="rasm" />
           <div className='p-3'>
           <p className='fs-5'>  Albart Flores</p>
            <p>Grapher Designer</p>
           </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p>
            <img src={star} alt="rasm" className='mt-4'/>
            
        </div>
        <div className='w-25 '>
            <div className='d-flex align-items-center'>
            <img src={sariq} alt="rasm" />
           <div className='p-3'>
           <p className='fs-5'>  Albart Flores</p>
            <p>Grapher Designer</p>
           </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p>
            <img src={star} alt="rasm" className='mt-4'/>
            
        </div>
        <div className='w-25 '>
            <div className='d-flex align-items-center'>
            <img src={sariq} alt="rasm" />
           <div className='p-3'>
           <p className='fs-5'>  Albart Flores</p>
            <p>Grapher Designer</p>
           </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.</p>
            <img src={star} alt="rasm" className='mt-4'/>
            
        </div>
        
      </div>
      <div className='mt-5 '>
        <img src={left} alt="rasm" className='m-3' />
        <img src={right} alt="rasm" className='m-3' />
      </div>
    </div>
  )
}

export default Section6
