import React from 'react'
import cafe from '../assets/localCafe.png'
import AnimateLine from './AnimateLine'
import content from '../assets/content.png'
import cafe2 from '../assets/cafe2.png'
import cafe3 from '../assets/cafe3.png'
import cafe4 from '../assets/cafe4.png'
import snap from '../assets/cafemp4.mp4'
import snap2 from '../assets/snap2.mp4'
import snap3 from '../assets/snap3.mp4'
import snap4 from '../assets/snap4.mp4'

export const Home = () => {
  
    
  return (
    <div className='relative w-[100%] h-[100vh] overflow-y-auto'>
        
        <div className='font-mono text-white text-[1.2rem] h-[50px] w-screen justify-start pl-[3rem] gap-[100px] items-center py-4 transition-all duration-300 z-50 fixed top-0 flex bg-white/10 backdrop-blur-sm '>
          <div className='relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full'>WHO?</div>
          <div className='relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full'>Offerings</div>
          <div className='relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full'>Book yours..</div>
        </div>
         
        
        <div className="">
            <img src={cafe} alt="main img" className="w-full h-auto object-cover  " />
        </div> 

        
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h1 className='main text-[100px] text-white '>THE SORE CAFE</h1>
            <div className='text-white text-2xl flex gap-[30px]'><span>SIKKIM</span>   |   <span>DELHI</span></div>
        </div>

        {/* horizon line */}
        <div className='absolute top-[450px] left-[385px] h-[5px] w-[750px] bg-white'></div>

        <div className='absolute top-[500px] w-[100%]'>
          <img src={content} alt='content img'/>
        </div>

        <div className="w-full h-[700px] bg-gradient-to-b from-[#0B1D26] via-[#0B1D26] via-[30%] to-black text-white flex gap-[15px] items-start pt-[250px] px-10">
          {/* Left Section - 40% */}
          <div className="w-[40%] h-[100%] flex flex-col justify-between">
            <h1 className="text-4xl">Left Section</h1>
            <p className="text-lg">This is the left section content.</p>
          </div>

          {/* Right Section - 60% */}
          <div className="w-[60%] flex flex-col justify-around word-spacing-[10px] h-[100%]">
            <h1  className="font-playfair text-5xl">The cafe offers a journey through Himalayan flavors, with each dish crafted to honer the region's traditions.</h1>
            <p className="">With the focus of traditional flavors and a worm, inviting atmosphere, it provides a dining experience that feels both comforting and genuine. Each visit promises a taste of Himalayas and a worm embrace of local culture.</p>
          </div>
        </div>



        <div className='h-[800px] w-[100%]  flex relative'>
          <div className="absolute top-[50%] text-center translate-y-[-50%] text-white  z-10 flex items-center justify-around w-[100%]">  
            <div className='text-black text-2xl'>FROM SIKKIM</div>
            <div className='text-7xl w-[700px]'> <span className='text-black'>Savoring th</span>e Essence of <span className='text-black'>the N</span>ortheast</div>
            <div className='text-2xl'>TO DELHI</div>
          </div>
          <div className='h-[100%] w-[50%] bg-amber-100'>
            <img src={cafe3} alt="main img" className="w-full h-[100%] grayscale-100 object-cover  " />
          </div>
          <div className='h-[100%] w-[50%] bg-black'></div>
        </div>


        <div className='h-[800px] w-[100%]  flex relative'>
          <div className="absolute top-[50%] text-center translate-y-[-50%] text-white  z-10 w-full flex justify-center h-[100%]">
    
            <div className="w-[70%] flex flex-col justify-between py-24 items-start text-left pl-10">
              <div className='text-2xl'>thien inei n ineinrnn</div>
              <div className=''>
                <div className='text-6xl w-[900px]'>
                  The eirn osnier ineo inerin  einrner ien ineri   eirnine n eireieenieefn  ieni venfien ien ien efiefneifn  
                </div>
                <div>
                  The eirn osnier ineo inerin  einrner ien ineri   eirnine n eireieenieefn  
                </div>
              </div>
              
            </div>
            <div className="w-[30%] overflow-hidden flex flex-col justify-between py-10">
              <div>typo</div>
              <div className='text-7xl text-black bg-white w-[800px]'></div>
            </div>
          </div>
          <div className='h-[100%] w-[50%] bg-black'></div>
          <div className='h-[100%] w-[50%] bg-amber-100'>
            <img src={cafe2} alt="main img" className="w-full h-[100%] grayscale-0 object-cover  " />
          </div>
        </div>


        <div className='h-[700px] relative'>
          <div className='grayscale-80 h-[100%]'>
            <img src={cafe4} alt="main img" className="w-full h-[100%] object-cover  " />
          </div>

          <div className='absolute top-0 flex h-[100%] w-[100%] justify-center items-end gap-8 pb-4'>
            <div className='h-[500px] rounded-[20px] overflow-hidden w-[300px] border-2 relative text-white'>
              <div className="absolute top-0 left-0 w-full h-full">
                <video
                  src={snap}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className='absolute top-0 flex flex-col justify-center items-center w-[100%] h-[100%] gap-[20px]'>
                <div>FROM GANGTOK, SIKKIM</div>
                <div className='text-3xl text-center'>THE SORE OPENING SOON</div>
                <div>GK 1 | NEW DELHI</div>
              </div>
            </div>
            
            {/* second */}
            <div className='h-[500px] rounded-[20px] overflow-hidden w-[300px] border-2 relative text-white'>
              <div className="absolute top-0 left-0 w-full h-full">
                <video
                  src={snap2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className='absolute top-0 flex flex-col justify-center items-center w-[100%] h-[100%] gap-[20px]'>
                <div>FROM GANGTOK, SIKKIM</div>
                <div className='text-3xl text-center'>THE SORE OPENING SOON</div>
                <div>GK 1 | NEW DELHI</div>
              </div>
            </div>

            {/* third */}
            <div className='h-[500px] rounded-[20px] overflow-hidden w-[300px] border-2 relative text-white'>
              <div className="absolute top-0 left-0 w-full h-full">
                <video
                  src={snap3}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className='absolute top-0 flex flex-col justify-center items-center w-[100%] h-[100%] gap-[20px]'>
                <div>FROM GANGTOK, SIKKIM</div>
                <div className='text-3xl text-center'>THE SORE OPENING SOON</div>
                <div>GK 1 | NEW DELHI</div>
              </div>
            </div>

            {/* fourth  */}
            <div className='h-[500px] rounded-[20px] overflow-hidden w-[300px] border-2 relative text-white'>
              <div className="absolute top-0 left-0 w-full h-full">
                <video
                  src={snap4}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className='absolute top-0 flex flex-col justify-center items-center w-[100%] h-[100%] gap-[20px]'>
                <div>FROM GANGTOK, SIKKIM</div>
                <div className='text-3xl text-center'>THE SORE OPENING SOON</div>
                <div>GK 1 | NEW DELHI</div>
              </div>
            </div>

          </div>
        </div>


        




    </div>
  )
}
