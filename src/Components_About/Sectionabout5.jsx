import React from 'react';
import '../Sass/Sectionabout5.scss';
import odam from '../Images/Image (8).png';
import twetter from "../Images/Vector.png";
import facebook from "../Images/Vector (1).png";
import google from "../Images/Vector (2).png";
import dash from "../Images/Vector (3).png";

const Sectionabout5 = () => {
  return (
    <div className='container mt-5'>
      <div className='text-center pt-5'> 
        <button className='btn btn-primary fs-4'>Our team</button>
        <h2 className='fs-2 mt-4 text-light'>People with all the skills you need are in Nisa! </h2>
      </div>
      <div className='d-flex flex-wrap w-100 gap-5 justify-content-between'>
        <div className='cards w-25 text-center'>
            <img src={odam} alt="rasm" className='w-100' />
            <span className='text-light ceo'>ceo & Founder</span>
            <span className='text-light fs-2 '>Katie smith</span>
            <p className='text-light p-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='d-flex justify-content-evenly pb-3' >
                <img src={twetter} alt="logo" />
                <img src={facebook} alt="logo" />
                <img src={google} alt="logo" />
                <img src={dash} alt="logo" />
            </div>
        </div>
        <div className='cards w-25 text-center'>
            <img src={odam} alt="rasm" className='w-100' />
            <span className='text-light ceo'>ceo & Founder</span>
            <span className='text-light fs-2 '>Katie smith</span>
            <p className='text-light p-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='d-flex justify-content-evenly pb-3' >
                <img src={twetter} alt="logo" />
                <img src={facebook} alt="logo" />
                <img src={google} alt="logo" />
                <img src={dash} alt="logo" />
            </div>
        </div>
        <div className='cards w-25 text-center'>
            <img src={odam} alt="rasm" className='w-100' />
            <span className='text-light ceo'>ceo & Founder</span>
            <span className='text-light fs-2 '>Katie smith</span>
            <p className='text-light p-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='d-flex justify-content-evenly pb-3' >
                <img src={twetter} alt="logo" />
                <img src={facebook} alt="logo" />
                <img src={google} alt="logo" />
                <img src={dash} alt="logo" />
            </div>
        </div>
        <div className='cards w-25 text-center'>
            <img src={odam} alt="rasm" className='w-100' />
            <span className='text-light ceo'>ceo & Founder</span>
            <span className='text-light fs-2 '>Katie smith</span>
            <p className='text-light p-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='d-flex justify-content-evenly pb-3' >
                <img src={twetter} alt="logo" />
                <img src={facebook} alt="logo" />
                <img src={google} alt="logo" />
                <img src={dash} alt="logo" />
            </div>
        </div>
        <div className='cards w-25 text-center'>
            <img src={odam} alt="rasm" className='w-100' />
            <span className='text-light ceo'>ceo & Founder</span>
            <span className='text-light fs-2 '>Katie smith</span>
            <p className='text-light p-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='d-flex justify-content-evenly pb-3' >
                <img src={twetter} alt="logo" />
                <img src={facebook} alt="logo" />
                <img src={google} alt="logo" />
                <img src={dash} alt="logo" />
            </div>
        </div>
        <div className='cards w-25 text-center'>
            <img src={odam} alt="rasm" className='w-100' />
            <span className='text-light ceo'>ceo & Founder</span>
            <span className='text-light fs-2 '>Katie smith</span>
            <p className='text-light p-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='d-flex justify-content-evenly pb-3' >
                <img src={twetter} alt="logo" />
                <img src={facebook} alt="logo" />
                <img src={google} alt="logo" />
                <img src={dash} alt="logo" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sectionabout5
