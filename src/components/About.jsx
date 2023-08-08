import React from 'react';
import Backg from '../assest/background.jpeg';

const About = () => {
  return (
    <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${Backg})` }}>
      <div className='p-8 text-black font-bold text-center'>
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
