import React from "react";
import Vans from "../assest/vans.png";
import Uber from "../assest/Uber.png";
import Flickr from "../assest/flickr.png";
import Asos from "../assest/asos.png";
import LockLingo from "../assest/locklingo.png";
import Bank from "../assest/Bank.png";
import Deploy from "../assest/deplo.png";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const ProjectNames = ({ link, name, repolink, text, technology, images }) => {
  return (
    <div className="w-full shadow-xl bg-gray-300 text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]">
      <a
        href={repolink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-bold flex justify-between items-center mt-6 font-fontt2 tracking-wider"
      >
        <span>{name}</span>
        <span className="flex items-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2" />
          </a>
          <FiLink className="ml-2" />
        </span>
      </a>
      <div className="text-ceneter font-medium">
        <p className="py-2 border-b mt-2 font-light text-md">{text}</p>
        <p className="py-2 border-b mt-2">
          <span className="font-semibold">Technologies</span>{" "}
          <span className="font-light">{technology}</span>
        </p>
      </div>
      <img
        className="w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]"
        src={images}
        alt="imagez"
      />
    </div>
  );
};
const Projects = () => {
  return (
    <div className="w-full pt-7 px-9  bg-black">
      <h1 className="font-bold text-gray-300 text-2xl mb-5 py-2 leading-8 md:text-3xl sm:text-3xl font-fontt2 tracking-wider">
        Projects 📁 :
      </h1>
      <p className="pt-1 pb-5 leading-8 text-center font-light">
        Below are a selection of completed projects I've meticulously crafted
        from the ground up. They have{" "}
        <span className="text-blue-700 font-bold">
          attractive designs and easy-to-use layouts.
        </span>{" "}
        The code is well-organized, making it{" "}
        <span className="text-blue-700 font-bold">
          simple to maintain and reuse.
        </span>{" "}
        These projects are to showcase my commitment to{" "}
        <span className="text-blue-700 font-bold">responsive design.</span>
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Vans */}
        <ProjectNames
          link="https://github.com/daysuwaa/Vans-Website-Clone"
          name="Vans Clone"
          repolink="https://daysuwaa.github.io/Vans-Website-Clone/"
          text="Replicated the Vans site, duplicating its user interface for self-improvement purposes."
          technology="HTML, CSS & Bootstrap"
          images={Vans}
        />

        {/* Uber */}
        <ProjectNames
          link="https://github.com/daysuwaa/Uber-clone"
          name="Uber Clone"
          repolink="https://daysuwaa.github.io/Uber-clone/"
          text="Built an Uber clone, replicating its e-commerce functionality for practice."
          technology="HTML, CSS & Bootstrap"
          images={Uber}
        />

        {/* Flickr */}
        <ProjectNames
          link="https://github.com/daysuwaa/Flickr-clone"
          name="Flickr"
          repolink="https://daysuwaa.github.io/Flickr-clone/"
          text="Recreated Flickr website to improve my skills in web development and responsiveness."
          technology="HTML, CSS & Bootstrap"
          images={Flickr}
        />

        {/* Asos */}
        <ProjectNames
          link="https://github.com/daysuwaa/Asos-Clone-"
          name="Asos-Clone"
          repolink="https://daysuwaa.github.io/Asos-Clone-/"
          text="Constructed an ASOS clone, replicating its user interface for learning purposes."
          technology="HTML, CSS & Bootstrap"
          images={Asos}
        />

        {/* LockLingo */}
        <ProjectNames
          link="https://github.com/daysuwaa/Random-Password-Generator"
          name="LockLingo"
          repolink="https://daysuwaa.github.io/Random-Password-Generator/"
          text="Developed a custom password generator that is capable of generating random alphanumeric combinations."
          technology="React js and Tailwind CSS"
          images={LockLingo}
        />

        {/* DeployMate */}
        <ProjectNames
          link="https://github.com/daysuwaa/Documen"
          name="DeployMate"
          repolink="https://daysuwaa.github.io/Document/"
          text="It is a well-detailed step-by-step process on how to commit to git and deploy static web pages on Git."
          technology="React js and Tailwind CSS"
          images={Deploy}
        />

        <ProjectNames
          link="https://github.com/daysuwaa/Bank-Website"
          name="Bank-Website"
          repolink="https://daysuwaa.github.io/Bank-Website/"
          text="This is a website for a banking application, built using React js and Tailwind CSS."
          technology="React js and Tailwind CSS"
          images={Bank}
        />
      </div>
    </div>
  );
};

export default Projects;
