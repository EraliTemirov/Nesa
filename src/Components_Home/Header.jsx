import React from 'react'
import Logo from "../Images/Logo.svg" 
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=' container p-3 ' >
     <div className='d-flex justify-content-between align-items-center'>
     <div className='w-75 d-flex justify-content-between'>
     <img src={Logo} alt="Logo"  />
      <span className='text-light fs-5'> <Link to={"/"}>Home</Link> </span>
      <span className='text-light fs-5'>Pricing</span>
      <span className='text-light fs-5'> <Link to={"/about"}>About</Link> </span>
      <span className='text-light fs-5'>Blog</span>
      <span className='text-light fs-5'>Contact</span>
     </div>
      <div>
      <span className='text-light m-3'>Login</span>
      <button className='btn btn-secondary '>Buy Nesa</button>
      </div>
     </div>
    </div>
  )
}

export default Header
