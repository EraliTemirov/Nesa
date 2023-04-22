import React from 'react';
import showcase from "../Images/Showcase.png";
import showcase380 from "../Images/Gr_380.png";
import "../Sass/Showcase.scss"

const Showkess = () => {
  return (
    <div className='container d-flex pb-5 mt-5 justify-content-between showcase'>
      <div className='w-50  pt-5 '>
        <h1 className='text-light '>Nisa boosts team product excellence</h1>
        <p className='text-light mt-5 fs-5'>Nisa is constantly improving to move forward through dashboard, statistics, data and verify and superior human resources.</p>
        <button className='btn btn-secondary fs-4 mt-4'>Get started <i className ="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className='pt-5  '>
        <img src={showcase} alt="rasm" />
        <img src={showcase380} alt="rasm" className='showcase380' />
      </div>
    </div>
  )
}

export default Showkess
