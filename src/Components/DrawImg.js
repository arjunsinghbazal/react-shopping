import React from 'react';
import{ Link }from 'react-router-dom';
import image from '../Images/undraw_Shopping_re_hdd9.jpg';

const DrawImg = () => {
  return (
    <div className='ImageSec'>
      <div className='imageItem'>
      <div>
      Lowest Prices<span className='blue'> Best Quality </span>
        Shopping
      </div>
        <hr />
       <div className='flex'> <Link to='/signup' className='btn decoration' style={{ fontSize: '1rem' ,marginLeft:"1rem"}}>Signup</Link>
        <Link to='/login' className='btn decoration'   style={{ fontSize: '1rem' ,marginLeft:"1rem"}}>Login</Link></div>
      </div> 
      <img src={image} alt="404" />
    </div>
  );
};

export default DrawImg;

