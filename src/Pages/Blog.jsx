import React from 'react';
import Footer from '../Components_Home/Footer';
import Sectionblog from '../Component_Blog/Sectionblog';
import Header from '../Components_Home/Header';
import Section7 from '../Components_Home/Section7';
import Section8 from '../Components_Home/Section8';

const Blog = () => {
  return (
    <div>
      <div className='bg-dark'>
     <Header/>
      </div>
      <Sectionblog/>
      <Section8/>
      <Section7/>
      <Footer/>
    </div>
  )
}

export default Blog
