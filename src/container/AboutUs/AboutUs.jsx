import React from 'react';
import { images } from '../../constants'; 

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    {/* <div className="app__aboutus-overlay flex__center"> */}
      {/* <img src={images.G} alt='g letter'/> */}
    {/* </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant' style={{color: '#5B0017'}}>About Us</h1>
        {/* <img src={images.spoon} alt='about_spoon' /> */}
        <p className='p__opensans' style={{color: '#5B0017'}}>We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant' style={{color: '#5B0017'}}>Our History</h1>
        {/* <img src={images.spoon} alt='about_spoon' /> */}
        <p className='p__opensans' style={{color: '#5B0017'}}>Your one direction to high-quality Saudi feasts, since 1998 we served in Saudi Arabia. Locals who are proud of the country and want to introduce it to visitors from around the world. </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
