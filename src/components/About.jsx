import React, { useState, useEffect } from 'react';
import Backg from '../assest/background.jpeg';

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='absolute flex flex-col items-center  h-screen '>
      <div
        className='absolute inset-0 z-0'
        style={{ transform: `translateY(-${scrollPosition * 0.3}px)` }}
      >
        <img src={Backg} alt='Background' className='w-full h-full object-cover' />
      </div>
      <div className='relative z-10 p-8 text-black font-bold text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl mb-8 md:mt-8'>
          Welcome to My Portfolio!
        </h1>
        <p className='mt-2 text-lg md:text-xl'>
          Hello! I'm Aiwerioghene Adesuwa, a passionate Front-End Developer with a keen eye for detail and a love for crafting beautiful and engaging user interfaces.
          I specialize in creating responsive, user-friendly websites that provide seamless experiences across devices. I enjoy turning design concepts into interactive web applications.
          Let's collaborate to bring your ideas to life and create web experiences that leave a lasting impression!
        </p>
      </div>
      
    </div>
  );
};

export default About;
