import React from 'react';
import Computer from '../assest/computer.JPG';

const About = () => {
  return (
    
    <div className="bg-black">
      <h4 className='text-sm  tracking-widest pl-[4rem] font-lighter uppercase'>Introduction</h4>
      <h1 className="font-fontt2 tracking-wider text-gray-300 text-5xl font-bold pl-[4rem] pt-5">About Me.</h1>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1  p-[3rem] ">
        <div className="px-4 pb-1">
          <p>
          I'm <span className='text-blue-700 font-bold'>Aiwerioghene Adesuwa</span>, a passionate <span className='text-blue-700 font-bold'>Front-End Developer</span>. I'm dedicated to crafting user interfaces that truly connect with people.  
          I believe small details create big impacts, so I pour my heart into perfecting user experiences.
          <br></br>
          <br></br>

          Specializing in front-end development, I create <span className='text-blue-700 font-bold'>delightful websites</span> that engage users. Whether sleek e-commerce platforms or interactive storytelling sites, 
          I transform designs into <span className='text-blue-700 font-bold'>responsive web apps</span>. Creating seamless, enjoyable user experiences across devices is my core skill.
          <br></br>
          <br></br>

         I firmly believe that the best results are achieved through teamwork and shared vision. 
          <br></br>
          <br></br>
          I am excited to collaborate with you, to listen to your ideas, understand your goals, and work together to bring them to life. Let's embark on this journey together, and together, let's create web experiences that leave an indelible mark on users!

          </p>
        </div>
        <div className="p-4 flex justify-center items-center">
          <img src={Computer} alt='img' className='lg:w-[440px] h-[300px] md:w-[390px] sm:w-[490px] sm:h-[390px] w-full' />
        </div>
      </div>
      <div className='bg-white h-1'></div>
    </div>
   
  );
};

export default About;
