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
        <h1 className='font-bold text-white text-2xl mb-5 py-2 leading-8 md:text-3xl sm:text-3xl lg:text-3xl lg:ml-[5rem] sm:ml-[2rem] ml-[1rem] md:ml-[1rem]'>Projects 📁 :</h1>
        <p className='pt-1 pb-5 leading-8 text-center lg:ml-[5rem]'>Below are a selection of completed projects I've meticulously crafted from the ground up. They have <span className='text-blue-700 font-bold'> attractive designs and easy-to-use layouts.</span> The code is well-organized, making it <span className='text-blue-700 font-bold'>simple to maintain and reuse.</span> These projects are to showcase my commitment to <span className='text-blue-700 font-bold'>responsive design.</span></p>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

{/* vans */}

 

 <div className='w-full shadow-xl bg-gray-300 text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]'>
 <a href='https://github.com/daysuwaa/Vans-Website-Clone'
     
        target='_blank'
        rel='noopener noreferrer'
        className='text-2xl font-bold flex justify-between items-center mt-6 font-fontt2 tracking-wider'
    >
     <span>Vans Clone</span>
     <span className='flex items-center'>
     <a href='https://daysuwaa.github.io/Vans-Website-Clone/ '
        target='_blank' rel='noopener noreferrer'>
  <FiLink className='mr-2' /> 
</a>
<FaGithub className='ml-2' /> 
</span>
</a>
    
          <div className='text-ceneter font-medium'>
            <p className='py-2 border-b mt-2 font-light text-md'>Replicated the Vans site, duplicating its user interface for self improvement purposes.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>HTML, CSS & Bootstrap</span></p>
            </div>
            <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={Vans}alt=''/>
        </div>

        {/* uber */}
      
        

        <div className='w-full shadow-xl bg-gray-300 text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]'>
           <a href='https://daysuwaa.github.io/Uber-clone/'
               
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-2xl font-bold flex justify-between items-center mt-6 font-fontt2 tracking-wider'
              >
               <span>ASOS CLONE</span>
               <span className='flex items-center'>
               <a
                  href='  https://github.com/daysuwaa/Uber-clone '
                  target='_blank' rel='noopener noreferrer'>
            <FiLink className='mr-2' /> 
         </a>
         <FaGithub className='ml-2' /> 
       </span>
     </a>
       
          <div className='text-ceneter font-medium'>
            <p className='py-2 border-b mt-2 font-light text-md'>Built an Uber clone, replicating its e-commerce functionality for practice.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>HTML, CSS & Bootstrap</span></p>
            </div>
            <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={Uber}alt=''/>
        </div>

        {/* flickr */}

         <div className='w-full shadow-xl bg-gray-300 text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]'>
         <a href='https://daysuwaa.github.io/Flickr-clone/'
             
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl font-bold flex justify-between items-center mt-6 font-fontt2 tracking-wider'
            >
             <span>Flickr</span>
             <span className='flex items-center'>
             <a
                href='https://github.com/daysuwaa/Flickr-clone'
                target='_blank' rel='noopener noreferrer'>
          <FiLink className='mr-2' /> 
       </a>
       <FaGithub className='ml-2' /> 
     </span>
   </a>
             <div className='text-ceneter font-medium'>
             <p className='py-2 border-b mt-2 font-light text-md'>Recreated flickr website to mprove my skills in web devleopment and responsiveness.</p>
                 <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>React js and Tailwind Css</span></p>
             </div>
             <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={Flickr}alt=''/>
         </div>
        
       
        
        
          

           {/* Asos */}
           <div className='w-full shadow-xl bg-gray-300 text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]'>
           <a href='https://github.com/daysuwaa/Asos-Clone-'
               
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-2xl font-bold flex justify-between items-center mt-6 font-fontt2 tracking-wider'
              >
               <span>ASOS CLONE</span>
               <span className='flex items-center'>
               <a
                  href='https://daysuwaa.github.io/Asos-Clone-/ '
                  target='_blank' rel='noopener noreferrer'>
            <FiLink className='mr-2' /> 
         </a>
         <FaGithub className='ml-2' /> 
       </span>
     </a>
        

          
          <div className='text-ceneter font-medium'>
            <p className='py-2 border-b mt-2 font-light text-md'>Constructed an ASOS clone, replicating its  user interface for learning purposes.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>HTML, CSS & Bootstrap</span></p>
            </div>
            <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={Asos}alt=''/>
        </div>
        
       

        {/* locklingo */}
        <div className='w-full shadow-xl bg-gray-300 text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]'>
        <a href='https://github.com/daysuwaa/Random-Password-Generator'
            
               target='_blank'
               rel='noopener noreferrer'
               className='text-2xl font-bold flex justify-between items-center mt-6 font-fontt2 tracking-wider'
           >
            <span>LockLingo</span>
            <span className='flex items-center'>
            <a
               href='https://daysuwaa.github.io/Random-Password-Generator/'
               target='_blank' rel='noopener noreferrer'>
         <FiLink className='mr-2' /> 
      </a>
      <FaGithub className='ml-2' /> 
    </span>
  </a>
            <div className='text-ceneter font-medium'>
            <p className='py-2 border-b mt-2 font-light text-md'>Developed a custom password generator that is capable of generating random alphanumeric combinations.</p>
                <p className='py-2 border-b mt-2'><span className='font-semibold'>Technologies:</span> <span className='font-light'>React js and Tailwind Css</span></p>
            </div>
            <img className='w-120 mx-auto mt-[1rem] bg-transparent  h-[15rem]' src={LockLingo}alt=''/>
        </div>

        
        {/* Deploymate */}
        <div className='w-full shadow-xl bg-gray-300 text-black flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 lg:h-[30rem]'>
  <a
    href='https://github.com/daysuwaa/Document'
    target='_blank'
    rel='noopener noreferrer'
    className='text-2xl font-bold flex justify-between items-center mt-6 font-fontt2 tracking-wider'
  >
    <span>DeployMate</span>
    <span className='flex items-center'>
      <a href='https://daysuwaa.github.io/Document/' target='_blank' rel='noopener noreferrer'>
        <FiLink className='mr-2' /> 
      </a>
      <FaGithub className='ml-2' /> 
    </span>
  </a>
  <div className=' font-medium'>
    <p className='py-2 border-b mt-2 font-light text-md'>
      It is a well detailed step by step process on how to commit to git and deploy static web pages on git.
    </p>
    <p className='py-2 border-b mt-2'>
      <span className='font-semibold'>Technologies:</span> <span className='font-light'>React js and Tailwind Css</span>
    </p>
  </div>
  <img className='w-120 h-[15rem] mx-auto mt-[1rem]' src={Deploy} alt='' />
</div>


    </div>


</div>
)
}

  

export default Projects