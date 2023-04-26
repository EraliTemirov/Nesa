import React from 'react';
import logotip from '../Images/Pattern.png';
import check  from '../Images/check-circle.png';
import checkwhite from '../Images/check-circle (2).png';
import logo from '../Images/pattern.png';

const Sectionpricing2 = () => {
  return (
    <div className='container d-flex justify-content-evenly'>
      <div className='w-25 border border-1 rounded-3 p-2'>
        <img src={logotip} alt="logo" />
        <p className='mt-3'><span className='fs-1'>$39</span>/Month</p>
        <p>Add Soem details here to describe the type of plan and its particular benefits </p>
        <hr />
        <div>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Own analiytics</span> 
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>All limited</span>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Unlimetid users</span>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Chat support</span>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Optimize hashtags</span>
        </div>
        <button className='btn btn-primary w-75 m-4 text-center'>Get started</button>
      </div>
      <div className='w-25 border border-1 rounded-3 p-2 bg-dark'>
        <img src={logo} alt="logo" />
        <p className='mt-3 text-light'><span className='fs-1'>$39</span>/Month</p>
        <p className='text-light'>Add Soem details here to describe the type of plan and its particular benefits </p>
        <hr />
        <div className='text-light'>
            <span className='d-block mt-2 fs-5'><img src={checkwhite} alt="rasm" className='p-2'/>Own analiytics</span> 
            <span className='d-block mt-2 fs-5'><img src={checkwhite} alt="rasm" className='p-2'/>All limited</span>
            <span className='d-block mt-2 fs-5'><img src={checkwhite} alt="rasm" className='p-2'/>Unlimetid users</span>
            <span className='d-block mt-2 fs-5'><img src={checkwhite} alt="rasm" className='p-2'/>Chat support</span>
            <span className='d-block mt-2 fs-5'><img src={checkwhite} alt="rasm" className='p-2'/>Optimize hashtags</span>
        </div>
        <button className='btn btn-secondary w-75 m-4 text-center'>Get started</button>
      </div>
      <div className='w-25 border border-1 rounded-3 p-2 '>
        <img src={logotip} alt="logo" />
        <p className='mt-3'><span className='fs-1'>$39</span>/Month</p>
        <p>Add Soem details here to describe the type of plan and its particular benefits </p>
        <hr />
        <div>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Own analiytics</span> 
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>All limited</span>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Unlimetid users</span>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Chat support</span>
            <span className='d-block mt-2 fs-5'><img src={check} alt="rasm" className='p-2'/>Optimize hashtags</span>
        </div>
        <button className='btn btn-primary w-75 m-4 text-center'>Get started</button>
      </div>
    </div>
  )
}

export default Sectionpricing2
