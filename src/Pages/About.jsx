import React from 'react'
import Header from '../Components_Home/Header';
import Sectionabout1 from '../Components_About/Sectionabout1';
import Sectionabout2 from '../Components_About/Sectionabout2';
import Sectionabout3 from '../Components_About/Sectionabout3';
import Sectionabout4 from '../Components_About/Sectionabout4';

const About = () => {
  return (
    <div>
   <div className='bg-dark'>
   <Header/>
   </div>
   <div>
    <Sectionabout1 />
    <Sectionabout2/>
    <Sectionabout3/>
    <Sectionabout4/>
   </div>
    </div>
  )
}

export default About
