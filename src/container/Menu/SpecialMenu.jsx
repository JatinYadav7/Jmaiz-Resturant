import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" color="#FFFFFF" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>There is a wide selection of choices served by top Saudi chefs, prepared using best quality local ingredients.</p>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index)=> (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.wine} alt='menu'/>
      </div>

      <div className="app__specialMenu-menu_cocktails">
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index)=> (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
        </div>
      </div>
    </div>

    <div>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);

export default SpecialMenu;