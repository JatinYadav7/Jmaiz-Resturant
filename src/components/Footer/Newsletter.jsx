import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" color="#5B0017" />
      <h1 className="headtext__cormorant" style={{color: "#5B0017"}}>Subscribe To Our Newsletter</h1>
      <p className="p__opensans" style={{color: "#5B0017"}}>And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input style={{background: "#FFFFFF"}} type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;