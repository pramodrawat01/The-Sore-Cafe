import React from 'react'
import cafe from '../assets/localCafe.png'
import Navbar from './Navbar'

export const Home = () => {
    
  return (
    <div className='relative w-screen h-[100vh] overflow-y-auto'>
        
        <Navbar/>   
        
        <div className="">
            <img src={cafe} alt="main img" className="w-full h-auto object-cover  " />
        </div>

        
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h1 className='main text-[100px] text-white '>THE SORE CAFE</h1>
            <div className='text-white text-2xl flex gap-[30px]'><span>SIKKIM</span>   |   <span>DELHI</span></div>
        </div>

    </div>
  )
}
