import React from 'react';
import Computer from '../assest/computer.JPG';

const About = () => {
  return (
    <div className="pt-7">
      <h1 className="underline text-3xl font-bold bg-white pl-[3rem]">About Me.</h1>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 bg-white p-[3rem]">
        <div className="p-4">
          <p>
            My name is <b>Aiwerioghene Adesuwa</b>, I am a passionate Front-End Developer with a keen eye for detail and a love for crafting beautiful and engaging user interfaces. I specialize in creating responsive, user-friendly websites that provide seamless experiences across devices. I enjoy turning design concepts into interactive web applications. Let's collaborate to bring your ideas to life and create web experiences that leave a lasting impression!
          </p>
        </div>
        <div className="p-4 flex justify-center items-center">
          <img src={Computer} alt='img' className='w-full h-[300px] md:w-[390px]' />
        </div>
      </div>
    </div>
  );
};

export default About;
