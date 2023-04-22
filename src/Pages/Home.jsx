import React from 'react'
import Header from '../Components_Home/Header'
import Showkess from '../Components_Home/Showkess'
import Section1 from '../Components_Home/Section1';
import Section2 from '../Components_Home/Section2';
import Section3 from '../Components_Home/Section3';

const Home = () => {
  return (
    <div>
       
      <div className='bg-dark pb-5'>
      <Header/>
       <Showkess/>
      </div>
      <div>
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
      Salom
     
    </div>
  )
}

export default Home
