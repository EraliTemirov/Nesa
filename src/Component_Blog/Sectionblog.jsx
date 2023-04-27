import React from 'react';
import blog from '../Images/blog.jpg';
import blog2 from '../Images/blog2.jpg';

const Sectionblog = () => {
  return (
    <div className='container mt-5'>
       <div>
       <div className='text-center'>
        <span className='btn btn-light fs-5'>Blog & article</span>
        <h1 className='mt-3'>Our latest articles</h1>
       </div>
       <div className='text-center mt-5 '>
        <button className='btn btn-danger m-3 rounded-4 fs-5 '>STORIES</button>
        <button className='btn btn-light m-3 rounded-4 fs-5'>TECHNALOGIES</button>
        <button className='btn btn-light m-3 rounded-4 fs-5'>DESIGN</button>
       </div>
       </div>
       <div className='d-flex'>
        <div className='w-50 mt-5'>
          <img src={blog} alt="rasm" className='w-100' />
          <span className='d-block mt-3 p-3 fs-4'>May 5. 2022 | 4 MIN READ</span>
          <p className='fs-2 p-3'>How marketing can help your business more than anything.</p>
        </div>
        <div className='w-50 mt-5 border-2'>
          <img src={blog2} alt="rasm" className='w-100' />
          <span className='d-block mt-3 p-3 fs-4'>May 5. 2022 | 4 MIN READ</span>
          <p className='fs-2 p-3'>How marketing can help your business more than anything.</p>
        </div>
       </div>
    </div>
  )
}

export default Sectionblog
