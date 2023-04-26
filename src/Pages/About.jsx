import React from 'react'
import Header from '../Components_Home/Header';
import Sectionabout1 from '../Components_About/Sectionabout1';
import Sectionabout2 from '../Components_About/Sectionabout2';
import Sectionabout3 from '../Components_About/Sectionabout3';
import Sectionabout4 from '../Components_About/Sectionabout4';
import Footer from "../Components_Home/Footer";
import Sectionabout5 from '../Components_About/Sectionabout5';
import Section8 from '../Components_Home/Section8';

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
    <div className='bg-dark'>
    <Sectionabout5/>
    </div>
    <Section8/>
   </div>
    <Footer/>
    </div>
  )
}

export default About
