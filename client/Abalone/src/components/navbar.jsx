import React from 'react'
import shellImg from '../assets/shell_logo.png'
import { NavLink } from 'react-router-dom' 

const Navbar = () => {

  const linkClass  = ( { isActive } )=> (
    isActive 
    ? 'text-[#362f1b] text-[18px] backdrop-blur bg-[#24101005] border-[#2b1f16] border-2 rounded-full px-5 py-2 transition duration-1000' 
    : 'hover:border-b-4 border-[#090404] transition duration-500' 
   )

  //  'hover:border-b-2 border-[#090404] transition'

  return (
    <div className='h-24 w-full bg-[#CABDB5] flex justify-start font-libra gap-3 font-[400]'>
        <div className='h-24 w-1/2 flex justify-start'>
            <img src={shellImg} className='h-30 p-4 ml-6'/>
            <h1 className='text-4xl my-auto font-semibold '> Aarshell </h1>
        </div>
        <div className='h-24 w-1/2'>
            <div className="flex text-[18px] justify-end items-center gap-20 h-full mr-20 font-semibold" >
                <div><NavLink to='/' className={linkClass}>Home</NavLink></div>
                <div><NavLink to='/predict' className={linkClass} >Predict</NavLink></div>
                <div><NavLink to='/about' className={linkClass} >About</NavLink></div>
            </div> 
        </div>
    </div>
  )
}

export default Navbar
