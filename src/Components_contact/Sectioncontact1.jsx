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
    <div className='container mt-5  d-flex gap-5'>
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
     
      <div className='w-50 bg-light p-3 border border-primary rounded-4 mb-5'>
        <h3 className='text-center p-3 fs-2 '>Get in touch with us</h3>
         <div className='d-flex gap-3'>
         <div className='w-50'>
            <span className='fs-4'>First Name *</span>
            <input type="text" className='form-control'/>
         </div>
         <div className='w-50'>
            <span className='fs-4'>First Name *</span>
            <input type="text" className='form-control' />
         </div>
         </div>
         
         <div className='p-1 mt-5 '>
            <span className='fs-4'>Work Mail *</span>
            <input type="text" className='form-control mt-3 ' />
         </div>
         <div className='p-1 mt-5 '>
            <span className='fs-4'>Phone Number *</span>
            <input type="number" className='form-control mt-3 ' />
         </div>
         <div className='p-1 mt-5 '>
            <span className='fs-4'>Message</span>
            <textarea className='form-control'></textarea>
         </div>
         <div className='d-flex m-3'>
            <input type="checkbox"  />
            <p className='p-3'>By clicking submit below, you consent to Justuno storing and processing the personal information submitted to provide the content requested.</p>
         </div>
         <button className='btn btn-primary fs-5 m-3'>Submit</button>
          </div>

    </div>
  )
}

export default Sectioncontact1
