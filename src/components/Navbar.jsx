import React, { useState } from 'react';
import Resume from '../assest/Resume_Adesuwa.pdf';
import { FaGithub } from 'react-icons/fa';
import { FiTwitter} from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'
import { CgMenuRight, CgClose} from 'react-icons/cg';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex  md:flex-row justify-between items-center h-[4rem] max-w-[1450px] mx-auto text-black bg-gray-300'>
      <h1 className="font-customFont text-3xl ml-5">Daysuwaa</h1>
      <div className='flex items-center space-x-6 p-2'>
        <ul className='hidden md:flex space x-4 '>
        <li>
            <a href='https://github.com/daysuwaa' target='_blank' rel='noreferrer'>
              <FaGithub size={25} className='mr-6  hover:text-yellow-700' />
            </a>
          </li>

          <li>
          <a href='https://twitter.com/daysuwaa_a' target='_blank' rel='noreferrer'>
            <FiTwitter size={25}className='mr-6  hover:text-blue-700' />
            </a>
          </li>

          <li>
          <a href='mailto:daysuwaaiwerioghene@icloud.com'>
            <AiOutlineMail size={25} className='mr-6  hover:text-purple-700'/>
            </a>
          </li>
          <li>
            <button className='bg-black text-white rounded-md w-[88px]  h-[35px] hover:bg-gray-500 hover:text-white'><a href={Resume} target='_blank' rel='noreferrer'>
              Resume
            </a></button>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <CgClose size={30} /> : <CgMenuRight size={30} /> /* Increased icon size to 40 */}
        </div>
      </div>

    <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%] '}>
        <h1 className='w-full text-2xl font-bold text-gray-300 m-4 text  pt-5 '>Contact Me</h1>
        <ul className='uppercase p-4 text-gray-300'>
          <li className='p-4 border-b border-gray-600 font-bold hover:text-yellow-700 '> <a href='https://github.com/daysuwaa' target='_blank' rel='noreferrer'>GitHub</a></li>
          <li className='p-4 border-b border-gray-600 font-bold hover:text-green-700'> <a href='mailto:daysuwaaiwerioghene@icloud.com'>Mail</a></li>
          <li className='p-4 border-b border-gray-600 font-bold hover:text-blue-700'> <a href='https://twitter.com/daysuwaa_a' target='_blank' rel='noreferrer'>Twitter</a></li>
          <li className='p-4 border-b border-gray-600 font-bold hover:text-red-700'> <a href={Resume} target='_blank' rel='noreferrer'>Resume</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
