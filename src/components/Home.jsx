import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className='w-[100%]  h-[100vh] flex flex-col items-center justify-center text-gray-300'>
      <Typed
        className='md:text-5xl lg:text-6xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2 text-center font-serif'
        strings={[
          'Front End Developer',
          'Welcome to my Portfolio!'
        ]} 
        typeSpeed={120} 
        backSpeed={100} 
        loop
      />
     

     <div className='bg-white h-1 mt-[3rem]'></div>
    </div>
  );
}

export default Home;
