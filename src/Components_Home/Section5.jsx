import React from 'react';
import "../Sass/Section5.scss"
import fon from "../Images/Mask group.png";
import media from "../Images/Image (2).png";
import pingdom from "../Images/pingdom-logo-svg-150px.png";
import pendo from "../Images/pendo-logo-svg-150px.png";
import send from "../Images/sendgrid-logo-svg-150px.png";
import lattice from "../Images/lattice-logo-svg-150px.png";
import gitlab from "../Images/gitlab-logo-svg-150px.png";

const Section5 = () => {
  return (
    <div>
      <div>
        <img src={fon} alt="rasm" className='bg-dark media-bg' />
        <img src={media} alt="rasm" className='media'/>
      </div>
      <div className='container logos'>
        <img src={pingdom} alt="logo" />
        <img src={pendo} alt="logo" />
        <img src={send} alt="logo" />
        <img src={lattice} alt="logo" />
        <img src={gitlab} alt="logo" />
      </div>
    </div>
  )
}

export default Section5
