import React from 'react';
import Me from '../assest/me.jpg';
import Resume from '../assest/Resume_Adesuwa.pdf'


const Navbar = () => {
  
  return (
    <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
      <img src={Me} className='w-[70px] pl-6' alt='logo' />
      <p className='mr-8 text-white p-2 w-[100px] font-bold hover:border-b-4 hover:border-yellow-500'> 
      <a href={Resume} target='_blank' rel="noreferrer">Resume</a></p>
     
    </div>
  );
};

export default Navbar;
