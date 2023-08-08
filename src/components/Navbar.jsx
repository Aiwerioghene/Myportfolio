import React from 'react';
import Me from '../assest/me.jpg';

const Navbar = () => {
  
  return (
    <div className= 'flex justify-between items-center h-24 max-w-[1540px] mx-auto text-white'>
      <img src={Me} className='w-[70px] pl-6' alt='logo' />
      <button className='mr-8 bg-white text-black p-2 rounded-full'>Resume</button>
     
    </div>
  );
};

export default Navbar;
