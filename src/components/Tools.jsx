import React from 'react';
import Html from '../assest/html.png';
import Css from '../assest/css.webp';
import Js from '../assest/js.webp';
import Reacti from '../assest/react-icon.png';
import Tail from '../assest/tailwind.webp';
import Bootstrap from '../assest/Bootstrap_logo.png';

const Tools = () => {
  return (
   

    <div className='h-[200px] pt-8'>
      <div className='bg-black lg:pl-[4rem] pl-3'>
    <div className='font-bold text-gray-300 text-2xl  sm:text-3xl md: text:3xl lg:text-3xl font-fontt2 ml-4 justify-center  mb-4 '>
       Tools ⛓️ :
      <div className='flex justify-between my-3 mt-[35px] text-center'>
        <img src={Html} alt='HTML' className='w-[35px]  ' />
        <img src={Css} alt='CSS' className='w-[35px]' />
        <img src={Js} alt='JavaScript' className='w-[35px] ' />
        <img src={Reacti} alt='React' className='w-[35px]' />
        <img src={Tail} alt='Tailwind CSS' className='w-[35px]' />
        <img src={Bootstrap} alt='Bootstrap' className='w-[60px] pr-5' />
      </div>
      
    </div>
    </div>
    <div className='bg-white h-1 mt-[3rem]'></div>
    </div>
    // </div>
   
  );
};

export default Tools;
