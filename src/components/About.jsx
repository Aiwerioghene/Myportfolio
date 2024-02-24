import React from "react";
import Computer from "../assest/computer.JPG";

const About = () => {
  return (
    <div className="bg-black">
      <div className="bg-white h-1 "> </div>
      <h4 className="text-sm  tracking-widest pl-[4rem] font-lighter uppercase pt-[2.7rem]">
        Introduction
      </h4>
      <h1 className="font-fontt2 tracking-wider text-gray-300 text-4xl font-bold pl-[4rem] pt-5">
        About Me
      </h1>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1  p-[3rem] ">
        <div className="px-4 pb-1">
          <p>
            Hello, I'm <span className="text-blue-700 font-bold">Daysuwaa</span>
            , a passionate
            <span className="text-blue-700 font-bold">Front-End Developer</span>
            . I'm dedicated to crafting user interfaces that truly connect with
            people.
            <br></br>
            <br></br>
            Specializing in front-end development, I create
            <span className="text-blue-700 font-bold">
              delightful websites
            </span>{" "}
            that engage users.
            <br></br>
            <br></br>I am excited to collaborate with you, to listen to your
            ideas, understand your goals, and work together to bring them to
            life.
          </p>
        </div>
        <div className="p-3 flex justify-center items-center">
          <img
            src={Computer}
            alt="img"
            className="lg:w-[440px] h-[300px] md:w-[390px] sm:w-[490px] sm:h-[390px] w-full"
          />
        </div>
      </div>
      <div className="bg-white h-1"></div>
    </div>
  );
};

export default About;
