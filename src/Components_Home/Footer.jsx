import React from 'react';
import twetter from "../Images/Vector.png";
import facebook from "../Images/Vector (1).png";
import google from "../Images/Vector (2).png";
import dash from "../Images/Vector (3).png";
import linkidin from "../Images/Vector (4).png";
import Logo from "../Images/Logo.svg";

const Footer = () => {
  return (
    <div className='bg-dark mt-5'>
     <div className='container d-flex pt-5 justify-content-between'>
     <div className='w-25'>
        <h3 className='text-light'>Build a beautiful product with align</h3>
        <p className='text-light mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus accumsan, phasellus. Ut ac consequat arcu non aliquam. </p>
        <div className='d-flex justify-content-around mt-4'>
            <img src={twetter} alt="logo" />
            <img src={facebook} alt="logo" />
            <img src={google} alt="logo" />
            <img src={dash} alt="logo" />
            <img src={linkidin} alt="logo" />
        </div>
      </div>
      <div className='d-flex w-50 justify-content-between'>
        <ul className='text-light '>
          <li className='fs-5'>Owirview</li>
          <li className='m-3'>Home</li>
          <li className='m-3'>About</li>
          <li className='m-3'>Blog</li>
          <li className='m-3'>Blog post</li>
          <li className='m-3'>Team Mamber</li>
        </ul>
        <ul className='text-light'>
          <li className='fs-5'>Pages</li>
          <li className='m-3'>Contact</li>
          <li className='m-3'>Customer Story</li>
          <li className='m-3'>Login</li>
          <li className='m-3'>Register</li>
          <li className='m-3'>style Guede </li>
          <li className='m-3'>Changelog</li>
          <li className='m-3'>Licance</li>
          <li className='m-3'>404</li>
          <li className='m-3'>Password</li>
        </ul>
        <ul className='text-light'>
          <li className='fs-5'>Connect:</li>
          <li className='m-3'>+001 234 567 89</li>
          <li className='m-3'>hellow@nesa.com</li>
        </ul>
      </div>
     </div>
     <hr />
     <div className='container d-flex justify-content-between align-items-center'>
     <div className='d-flex align-items-center'>
      <img src={Logo} alt="logo"  className='m-2 align-items-center'/>
      <p className='text-light '>@ template by Flowbass- Powered by ui8</p>
     </div>
     <div>
      <p className='text-light'>Term of services privacy policy</p>
     </div>
     <div>
      <span className='text-light m-3'>Overview</span>
      <span className='text-light m-3'>Pages</span>
     </div>
     </div>
    </div>
  )
}

export default Footer
