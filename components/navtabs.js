
import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navtabs (){

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
    return (
            <>
            <div className='font-Kanit w-screen min-h-screen relative flex flex-col items-center'>

            <img src='homebg.png'
                className='object-cover'/>

              {/* Nav bar */}
              <div className='absolute top-0 h-[60px] z-1 w-full filter backdrop-blur-md flex items-center justify-between px-16'>

               <div className='w-[50%]'>
               <div className='w-[70px] h-[50px]'>
                  <img src='/logo.png'
                  className='object-cover'/>
                </div>
               </div>
                

                <div className='w-[50%]'>
                  <div className='flex items-center justify-end'>
                    <div className='px-4 py-2 text-sm bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mr-2 cursor-pointer'>Mint</div>
                    <div className='px-4 py-2 text-sm bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>Utlity</div>
                    <div className='px-4 py-2 text-sm bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>Map</div>
                    <div className='px-4 py-2 text-sm bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>More</div>
                    <div className='px-4 py-2 text-sm bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>Buy</div>
                    <div className='px-4 py-2 text-sm bg-black hover:bg-green-500 text-white font-medium rounded-sm uppercase ml-2 cursor-pointer'>Connect</div>
                  </div>
                </div>
              </div>

              {/* Contents */}

               
              
            </div>
            </>

            
    
        
    ) 
}