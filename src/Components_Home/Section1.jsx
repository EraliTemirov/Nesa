import React from 'react';
import sectionone from "../Images/Section1.jpg";
import sariq from "../Images/ellepssariq.png";
import "../Sass/Section1.scss"

const section1 = () => {
  return (
    <div className='container d-flex justify-content-around mt-5 section1'>
      <div>
        <img src={sectionone} alt="rasm" className='imgs' />
      </div>
      <div className='w-50'>
       <h2 className='fs-1'>Discover the power of creative freedom with Nisa.</h2>
       <p className='fs-5 mt-3 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt finibus tortor. Donec lobortis augue sed ante molestie, vitae maximus nunc semper.</p>
       <button className='btn btn-primary Btnexplore fs-4 mb-3'>Explore Section</button>
       <span className='fs-4'>Add some additional details about your product</span>
       <div className='d-flex align-items-center pt-3'>
        <img src={sariq} alt="rasm"  className='pr-5 '/>
        <div >
          <p>Motuer Leeman</p>
          <p>MArketing Manager</p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default section1
