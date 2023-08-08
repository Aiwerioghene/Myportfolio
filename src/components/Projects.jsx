import React from 'react'
import Vans from '../assest/vans.png';
import Uber from '../assest/Uber.png';
import Flickr from '../assest/flickr.png';

const Projects = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <h1 className='font-bold text-black text-3xl mb-5'>Projects📁:</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

        <div className='w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-120 mx-auto mt-[3rem] ' src={Vans}alt=''/>
            <p className='text-center text-4xl font-bold'>Vans Clone</p>
            <div className='text-ceneter font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Technologies</p>
                <p className='py-2 border-b mx-8'>HTML, CSS, Bootstrap</p>   
            </div>
            <button className='bg-black text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><a href='https://daysuwaa.github.io/Vans-Website-Clone/' target='_blank' rel="noreferrer">Check it out!</a></button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-120 mx-auto mt-[3rem] bg-transparent ' src={Uber}alt=''/>
            <p className='text-center text-4xl font-bold'>Uber Clone</p>
            <div className='text-ceneter font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Technologies</p>
                <p className='py-2 border-b mx-8'>HTML, CSS, Bootstrap</p>
               
            </div>
            <button className='bg-black text-white  rounded-md font-medium my-6 mx-auto px-6 py-3'><a href='https://daysuwaa.github.io/Uber-clone/' target='_blank' rel="noreferrer">Check it out!</a></button>
        </div>
        <div className='w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-120 mx-auto mt-[3rem]' src={Flickr}alt=''/>
            <p className='text-center text-4xl font-bold'>Flickr</p>
            <div className='text-ceneter font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Technologies</p>
                <p className='py-2 border-b mx-8'>HTML, CSS, Bootstrap</p>
               
            </div>
            <button className='bg-black text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><a href='https://daysuwaa.github.io/Flickr-clone/' target='_blank' rel="noreferrer">Check it out!</a></button>
        </div>
    </div>

</div>
)
}

  

export default Projects