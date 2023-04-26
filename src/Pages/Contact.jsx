import React from 'react'
import Header from '../Components_Home/Header';
import Footer from '../Components_Home/Footer';
import Sectioncontact1 from '../Components_contact/Sectioncontact1';
import Sectionabout4 from '../Components_About/Sectionabout4';

const Contact = () => {
  return (
    <div>
        <div className='bg-dark'>
            <Header/>
            <Sectioncontact1/>
        </div>
            <Sectionabout4/>
          <Footer/>
    </div>
  )
}

export default Contact
