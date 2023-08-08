import React from 'react';
import Html from '../assest/html.png';
import Css from '../assest/css.webp';
import Js from '../assest/js.webp';
import Reacti from '../assest/react-icon.png';
import Tail from '../assest/tailwind.webp';
import Bootstrap from '../assest/Bootstrap_logo.png';

const Tools = () => {
  return (
    <div className='h-[200px]'>
    <div className='font-bold text-white  text-2xl ml-4 justify-center mt-[20px] mb-4 '>
       Tools ⛓️
      <div className='flex justify-between my-3 mt-[50px]'>
        <img src={Html} alt='HTML' className='w-[50px] ' />
        <img src={Css} alt='CSS' className='w-[50px]' />
        <img src={Js} alt='JavaScript' className='w-[50px] ' />
        <img src={Reacti} alt='React' className='w-[50px]' />
        <img src={Tail} alt='Tailwind CSS' className='w-[50px]' />
        <img src={Bootstrap} alt='Bootstrap' className='w-[50px]' />
      </div>
    </div>
    </div>
  );
};

export default Tools;
