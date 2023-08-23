import React from 'react'
import Vans from '../assest/vans.png';
import Uber from '../assest/Uber.png';
import Flickr from '../assest/flickr.png';
import Asos from '../assest/asos.png';
import LockLingo from '../assest/locklingo.png';
import Deploy from '../assest/deplo.png';
import {FiLink} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
const Projects = () => {
  return (
    <div className='w-full pt-7 px-4 bg-black'>
        <h1 className='font-bold text-white text-2xl mb-5 py-2 leading-8 md:text-3xl sm:text-3xl lg:text-3xl  underline'>Projects📁:</h1>
        <p className='py-2 leading-8 text-center'>Below are a selection of completed projects I've meticulously crafted from the ground up. They have <span className='text-blue-700 font-bold'> attractive designs and easy-to-use layouts.</span> The code is well-organized, making it <span className='text-blue-700 font-bold'>simple to maintain and reuse.</span> These projects are to showcase my commitment to <span className='text-blue-700 font-bold'>responsive design.</span></p>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

         <div className='w-full shadow-xl  bg-gray-300  text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]' > 
            <img className='w-120 mx-auto mt-[3rem] ' src={Vans}alt=''/>
            <p className='text-center text-2xl font-bold'>Vans Clone</p>
            <div className='text-ceneter font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Technologies</p>
                <p className='py-2 border-b mx-8'>HTML, CSS, Bootstrap</p>   
            </div>
            <button className='bg-black text-white rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-gray-800 '><a href='https://daysuwaa.github.io/Vans-Website-Clone/' target='_blank' rel="noreferrer">Check it out!</a></button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-120 mx-auto mt-[3rem] bg-transparent ' src={Uber}alt=''/>
            <p className='text-center text-2xl font-bold'>Uber Clone</p>
            <div className='text-ceneter font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Technologies</p>
                <p className='py-2 border-b mx-8'>HTML, CSS, Bootstrap</p>
               
            </div>
            <button className='bg-black text-white  rounded-md font-medium my-6 mx-auto px-6 py-3  hover:bg-gray-800'><a href='https://daysuwaa.github.io/Uber-clone/' target='_blank' rel="noreferrer">Check it out!</a></button>
        </div>
        <div className='w-full shadow-xl  bg-gray-300  text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]' > 
          <a href='https://daysuwaa.github.io/Asos-Clone-/ '
           target='_blank'
            rel="noopener noreferrer" 
            className='text-2xl font-bold flex items-center mt-6 font-fontt2 tracking-wider'>
             Flickr <FiLink className='ml-4' 
          /> 
          <a href='https://github.com/daysuwaa/Asos-Clone-'target='_blank' rel="noopener noreferrer"> </a>
          <FaGithub className='ml-4' />
          </a>
          <div className='text-ceneter font-medium'>
            <p className='py-2 border-b mt-2 font-light text-md'>Replicated Flickr site for learning purposes and improve on my repsonsiveness.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>HTML, CSS & Bootstrap</span></p>
            </div>
            <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={Flickr}alt=''/>
        </div>
        
    

{/* section part */}

          <div className='w-full shadow-xl  bg-gray-300  text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]' > 
          <a href='https://daysuwaa.github.io/Asos-Clone-/ '
           target='_blank'
            rel="noopener noreferrer" 
            className='text-2xl font-bold flex items-center mt-6 font-fontt2 tracking-wider'>
             ASOS Clone <FiLink className='ml-4' 
          /> 
          <a href='https://github.com/daysuwaa/Asos-Clone-'target='_blank' rel="noopener noreferrer"> </a>
          <FaGithub className='ml-4' />
          </a>
          <div className='text-ceneter font-medium'>
            <p className='py-2 border-b mt-2 font-light text-md'>Constructed an ASOS clone, replicating its  user interface for learning purposes.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>HTML, CSS & Bootstrap</span></p>
            </div>
            <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={Asos}alt=''/>
        </div>
        
       

        {/* locklingo */}
        <div className='w-full shadow-xl  bg-gray-300  text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]' > 
        <a href='https://daysuwaa.github.io/Random-Password-Generator/ '
           target='_blank'
            rel="noopener noreferrer" 
            className='text-2xl font-bold flex items-center mt-6 font-fontt2 tracking-wider'>
          LockLingo <FiLink className='ml-4' 
          /> 
          <a href='https://github.com/daysuwaa/Random-Password-Generator'target='_blank' rel="noopener noreferrer"> </a>
          <FaGithub className='ml-4' />
          </a>
            <div className='text-ceneter font-medium'>
            <p className='py-2 border-b mt-2 font-light text-md'>Developed a custom password generator that is capable of generating random alphanumeric combinations.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>React js and Tailwind Css</span></p>
            </div>
            <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={LockLingo}alt=''/>
        </div>
        
        {/* Deploymate */}
        <div className='w-full shadow-xl  bg-gray-300  text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem] ' > 
          <a href='https://daysuwaa.github.io/Document/ '
           target='_blank'
            rel="noopener noreferrer" 
            className='text-2xl font-bold flex items-center mt-6 font-fontt2 tracking-wider'>
          DeployMate <FiLink className='ml-4' 
          /> 
          <a href='https://daysuwaa.github.io/Document/'target='_blank' rel="noopener noreferrer"> </a>
          <FaGithub className='ml-4' />
          </a>
            <div className='text-ceneter font-medium'>
                <p className='py-2 border-b mt-2 font-light text-md'>It is a well detailed step by step process on how to commit to git and deploy static web pages on git.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>React js and Tailwind Css</span></p>
               
            </div>
            <img className='w-120 h-[15rem] mx-auto mt-[1rem]' src={Deploy}alt=''/>
            
        </div>

    </div>


</div>
)
}

  

export default Projects