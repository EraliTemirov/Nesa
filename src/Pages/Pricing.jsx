import React from 'react';
import Header from '../Components_Home/Header';
import Footer from '../Components_Home/Footer';
import Sectionpricing1 from '../Components_pricing/Sectionpricing1';
import Sectionpricing2 from '../Components_pricing/Sectionpricing2';
import Section6 from '../Components_Home/Section6';
import Sectionpricing3 from '../Components_pricing/Sectionpricing3';
import Section7 from '../Components_Home/Section7';

const Pricing = () => {
  return (
    <div>
        <div className='bg-dark'>
            <Header/>
        </div>
        <Sectionpricing1/>
        <Sectionpricing2/>
        <Section6/>
        <Sectionpricing3/>
        <Section7/>
        <Footer/>
      pricing
    </div>
  )
}

export default Pricing;
