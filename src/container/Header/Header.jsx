import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'; 
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" color="#FFFFF"/> 
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0', color: 'var(--color-grey)'}}>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
      {/* <button className='custom__button'>Explore Menu</button> */}
      <a className='custom__button' href='#menu'>ExploreMenu</a>
    </div>

    <div className="app__wrapper_img">
    <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
