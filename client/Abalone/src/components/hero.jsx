import React from 'react'
import Abalone_img from '../assets/abalone_shell_img.jpg'
import { Link } from 'react-router-dom'

const hero = () => {
  return (
    <div className='flex w-full h-[calc(100vh-96px)] '>
        
        <div className='flex-1 relative'>
            <div className='flex h-full w-full justify-center items-center '><img className="h-[26rem] mr-24 z-20    rounded-xl" src={Abalone_img}/></div>
            <div className='h-[57%] w-[50%] absolute top-[31%] left-[12%] bg-[#E8E3DE] z-0 rounded-xl'></div>
        </div>
        
        <div className='flex-1 '>
            
            <h1 className='text-[40px] font-[500] font-rubik leading-[50px] mt-36'>Lets Predict the <br/><span className='text-[#a17655]'>Age of Abalone Shells !</span></h1>

            <p className='text-[19px] text-justify w-[700px] mt-8'>Abalone shells are marine mollusk exoskeletons, known for their vibrant, iridescent nacre. Highly valued for jewelry and decoration,
             they also hold cultural significance, symbolizing healing and protection in various traditions around the world. Our Abalone Age Prediction ML model leverages the CatBoost
              Gradient algorithm, utilizing features like Length, Diameter, Height, and various weights (Whole, Shucked, Viscera, Shell) to accurately estimate the age of abalones.</p>
            
            <div className="flex justify-start">
                
                <Link to='/predict'>
                  <button className='text-[20px] py-2 mt-8 border-2 border-black rounded-full w-fit px-8 hover:bg-black hover:text-yellow-50 transition duration-200'>Predict</button>
                </Link>

                <Link to='/about'>
                  <button className='text-[20px] py-2 mx-3 mt-8 bg-black text-white rounded-full w-fit px-8 hover:bg-white hover:border-2 hover:text-black hover:border-black '>Know More</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default hero
