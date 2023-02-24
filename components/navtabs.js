
import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Base from '../components/base'
import Roadmap from '../components/test'

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
                className='object-cover w-screen h-screen'/>
                ) :
              toggleState === 2 ? (
                <img src='/mintbg.png'
                className='object-cover w-screen h-screen'/>
              ):
               (<></>)
              }

              {/* Nav bar */}
              <div className='absolute top-0 h-[60px] z-1 w-full filter backdrop-blur-md flex items-center justify-between px-16'>

               <div className='w-[50%]'>

                  <img src='/logo.png'
                  className='w-[80px] h-[30px]'/>

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
                    <a href='/'>
                    <div className='px-5 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
                    </div>
                    </a>
                    <a href='/'>
                    <div className='px-5 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
                    </div>
                    </a>
                    <a href='/'>
                    <div className='px-5 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
                    </div>
                    </a>
                    <div className='px-3 py-1 text-[13px] bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase ml-2 cursor-pointer'>
                      Connect
                    </div>
                  </div>
                </div>
              </div>

              {/* Contents */}
              
              {toggleState === 1 ? (
              <div className='absolute w-full top-[100px] flex flex-col items-center'>
                <h1 className='text-lg tracking-wide text-center'>
                  if you are a late <br/>
                  night gamer, you are at the <br/>
                  right place
                </h1>
              </div>
              ) :toggleState === 2 ? (
                
                <div className='absolute w-full top-0'>
                <Base/>
              </div>
             
              ) :

              toggleState === 3 ? (
              <div className='absolute w-full top-[100px]'>
                <h1 className='text-lg text-light'>Othe page</h1>
              </div>
              ) :

              toggleState === 4 ? (
                <div className='absolute w-full top-[100px]'>
                <Roadmap/>
              </div>) :


              toggleState === 5 ? (<div></div>) :
              toggleState === 6 ? (<div></div>) :
              (
               <></>
              )
              }
              
               
              
            </div>
            </>

            
    
        
    ) 
}