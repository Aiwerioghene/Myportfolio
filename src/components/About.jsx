import React from 'react';
import Typed from 'react-typed';

const About = () => {
  return (
    <div className='w-[100%] md:w-[1240px] h-[100vh] flex flex-col items-center justify-center'>
      <Typed
        className='md:text-4xl lg:text-5xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-white text-center'
        strings={[
          'Aiwerioghene Adesuwa ' ,
          'I am a Front End Developer 👩🏽‍💻',
          'Welcome to my Portfolio! 🥰'
        ]} 
        typeSpeed={100} 
        backSpeed={90} 
        loop
      />
    </div>
  );
}

export default About;
