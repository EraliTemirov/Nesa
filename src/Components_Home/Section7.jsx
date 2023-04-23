import React from 'react'

const Section7 = () => {
  return (
    <div className='container bg-dark p-5 mt-5 d-flex border '>
      <div className='w-50'>
        <h3 className='text-light fs-1'>Discover the power of creative freedom with Align.</h3>
        <p className='text-light fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas mauris adipiscing dui. </p>
        
      </div>
      <div className='w-50'> 
        <input type="text" placeholder='Your Name' className='form-control m-2 fs-4' />
        <input type="text" placeholder='Email address' className='form-control m-2 mt-3 fs-4'/>
        <button className='btn btn-secondary m-2 mt-3 fs-4'>Submit</button>

        </div>
    </div>
  )
}

export default Section7
