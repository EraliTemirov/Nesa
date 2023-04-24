import React from 'react';
import chapaqay from "../Images/Mask group (1).png";
import  aylana from "../Images/Ellipse 1517 (2).png";
import "../Sass/Sectionabout4.scss";

const Sectionabout4 = () => {
  return (
    <div className='container mt-5'>
      <div className='text-center'>
        <span className='fs-4 '>
            Testimonial
        </span>
        <h2 className='fs-1 m-5'>What our client says</h2>
      </div>
      <div className='container d-flex justify-content-between'>
        <div className='w-25 text-center  '>
           <div className='d-flex qoshimcha'>
           <img src={chapaqay} alt="atribut" />
            <h4>1. TITLE HERE</h4>
           </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.</p>
            <div>
                <img src={aylana} alt="rasm" />
                <span>Alix Mex</span>
                <p>Ceo/Deriction</p>
            </div>
        </div>
        <div className='w-25'>
           <div className='d-flex'>
           <img src={chapaqay} alt="atribut" />
            <h4>1. TITLE HERE</h4>
           </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.</p>
            <div>
                <img src={aylana} alt="rasm" />
                <span>Alix Mex</span>
                <p>Ceo/Deriction</p>
            </div>
        </div>
        <div className='w-25'>
           <div className='d-flex'>
           <img src={chapaqay} alt="atribut" />
            <h4>1. TITLE HERE</h4>
           </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.</p>
            <div>
                <img src={aylana} alt="rasm" />
                <span>Alix Mex</span>
                <p>Ceo/Deriction</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sectionabout4
