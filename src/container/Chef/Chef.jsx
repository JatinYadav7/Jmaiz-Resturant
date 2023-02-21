import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" color="#5B0017" />
      <h1 className='headtext__cormorant' style={{color: '#5B0017'}}> What we believe in</h1>

      <div className="app_chef-content">
        <div className="app_chef-content_quote">
          <p className='p__opensans' style={{color: '#5B0017'}}>I don’t want to make food that only the top 3 percent can enjoy. That doesn’t bring my heart joy. I want to create a place that services a wide range of people. There are sleepless nights, 24-hour work days. I’m rooted in love and passion for the game.</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p style={{color: '#5B0017'}}>Kevin Luo</p>
        <p className='p__opensans' style={{color: '#5B0017'}}>Chef & Founder</p>
      </div>

    </div>
  </div>
);

export default Chef;
