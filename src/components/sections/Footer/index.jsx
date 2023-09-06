import React from 'react'
import { FooterWrapper } from './style';
import brandImage from '../../../Images/brand-logo.jpg';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="div-1">
        <div className="image-container">
          <img src={brandImage} alt="brand-logo" />
        </div>
        <div className="text">
          ahead
        </div>
      </div>
      <div className="div-2"></div>
      <div className="div-3"></div>
      <div className="div-4">
        &copy; Ahead App, All Right Reserved
      </div>
    </FooterWrapper>
  )
}

export default Footer;
