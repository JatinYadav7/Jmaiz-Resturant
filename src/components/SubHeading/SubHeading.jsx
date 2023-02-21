import React from 'react';
import {images} from '../../constants'; 

const SubHeading = ({title, color}) => (
  <div style={{marginBottom: '1rem'}}>
    {console.log(color)}
    <p className='p__cormorant ' style={{color: color}}>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
