import React from 'react';
import message from '../Images/messages.png';
import tel from '../Images/Stroke-1.png';
import location from '../Images/Vector.png';
import facebook from "../Images/Vector (1).png";
import google from "../Images/Vector (2).png";
import dash from "../Images/Vector (3).png";
import linkidin from "../Images/Vector (4).png";

const Sectioncontact1 = () => {
  return (
    <div className='container mt-5'>
      <div className='w-50'>
        <div className='p-4'>
            <h1 className='text-light fs-1'>Get in touch with our team today.</h1>
            <p className='text-light p-5 text-start fs-5'>Have questions? Lets Chat! Fill out the form below and one of our team members will reach out as soon as possible.</p>
            <hr className='text-light' />
        </div>
        <div className='p-2'>
            <h2 className='text-light p-4'>Company Details</h2>
             <span className='d-block text-light p-2 fs-5'><img src={message} alt="rasm" /> otir@design.co </span>
             <span className='d-block text-light p-2 fs-5'><img src={tel} alt="rasm" /> 415-870-1547 </span>
             <span className='d-block text-light p-2 fs-5'><img src={location} alt="rasm" /> 6391 Elgin Deliveri 10293 </span>
             <hr className='text-light' />
        </div>
        <div> 
            <h3 className='text-light fs-2 p-3'>Socials</h3>
            <div className='d-flex justify-content-between w-25'>
        <img src={facebook} alt="logo" />
        <img src={dash} alt="logo" />
        <img src={google} alt="logo" />
        <img src={linkidin} alt="logo" />
      </div>
        </div>
        
      </div>
     
      <div>
        
      </div>

    </div>
  )
}

export default Sectioncontact1
