import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" style={{color: "#5B0017"}}>Contact Us</h1>
        <p className="p__opensans" style={{color: "#5B0017"}}>Street - 127, Jeddah, Saudi Arabia, 546544</p>
        <p className="p__opensans" style={{color: "#5B0017"}}>+1 123456789</p>
        <p className="p__opensans" style={{color: "#5B0017"}}>service@maizresturant.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.maizLogo} alt="footer_logo" />
        <p className="p__opensans" style={{color: "#5B0017"}}>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook style={{color: "#5B0017"}} />
          <FiTwitter style={{color: "#5B0017"}}/>
          <FiInstagram style={{color: "#5B0017"}}/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{color: "#5B0017"}}>Working Hours</h1>
        <p className="p__opensans" style={{color: "#5B0017"}}>Monday-Friday:</p>
        <p className="p__opensans" style={{color: "#5B0017"}}>08:00 am - 12:00 am</p>
        <p className="p__opensans" style={{color: "#5B0017"}}>Saturday-Sunday:</p>
        <p className="p__opensans" style={{color: "#5B0017"}}>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{color: "#5B0017"}}>© 2023 | All rights reserved.</p>
    </div>

  </div>
);

export default Footer;