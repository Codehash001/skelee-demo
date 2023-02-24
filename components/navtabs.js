
import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Base from '../components/base'

export default function Navtabs (){

  const [nav, setNav] = useState(false)


  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
   }

  const handleNav = () => {
    setNav(!nav);
  };
  
    return (
            <>
            <div className='font-Kanit w-screen h-screen relative flex flex-col items-center'>

            {toggleState === 1 ?(
                <img src='homebg.png'
                className='object-cover'/>
                ) :
               (<></>)
              }

              {/* Nav bar */}
              <div className='absolute top-0 h-[60px] z-1 w-full filter backdrop-blur-md flex items-center justify-between px-16'>

               <div className='w-[50%]'>

                  <img src='/logo.png'
                  className='w-[70px] h-[30px]'/>

               </div>
                

                <div className='w-[50%]'>
                  <div className='flex items-center justify-end'>
                    <div className={toggleState === 2 ? 'px-3 py-1 text-[13px] bg-green-500 text-white font-medium rounded-sm uppercase mr-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mr-2 cursor-pointer'}
                    onClick={() => toggleTab(2)}>
                      Mint
                    </div>
                    <div className={toggleState === 3 ? 'px-3 py-1 text-[13px] bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mr-2 cursor-pointer'}
                    onClick={() => toggleTab(3)}>
                      Utlity
                    </div>
                    <div className={toggleState === 4 ? 'px-3 py-1 text-[13px] bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mr-2 cursor-pointer'}
                    onClick={() => toggleTab(4)}>
                      Map
                    </div>
                    <div className={toggleState === 5 ? 'px-3 py-1 text-[13px] bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mr-2 cursor-pointer'}
                    onClick={() => toggleTab(5)}>
                      More
                    </div>
                    <div className={toggleState === 6 ? 'px-3 py-1 text-[13px] bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mr-2 cursor-pointer'}
                    onClick={() => toggleTab(6)}>
                      Buy
                    </div>
                    <div className='px-3 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase ml-2 cursor-pointer'>
                      Connect
                    </div>
                  </div>
                </div>
              </div>

              {/* Contents */}
              
              {toggleState === 1 ? (
              <div className='absolute w-full top-[100px] flex flex-col items-center'>
                <h1 className='text-lg text-light'>Home page</h1>
              </div>
              ) :toggleState === 2 ? (
                
                <div className='absolute w-full top-0'>
                <Base/>
              </div>
             
              ) : (
               
                <div className='absolute w-full top-[100px]'>
                <h1 className='text-lg text-light'>Othe page</h1>
              </div>
              
              )
              }
              
               
              
            </div>
            </>

            
    
        
    ) 
}