import React from 'react';
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className='bck_red'>
          <Fade delay={500} triggerOnce>
                    <div className="font_righteous footer_logo_venue">The venue</div>
                    <div className="footer_copyright">The Venue 2024 All Rights Reserved</div>
          </Fade>
    </footer>
  )
}

export default Footer;