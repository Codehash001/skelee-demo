
import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar (){

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
    return (
            <>
            <div className='top-0 sticky z-10 filter drop-shadow-md w-screen h-auto font-Gotham '>
              <div className='flex flex-col items-center w-full'>

                <div className='w-full bg-gray-900 py-4'>
                  <h1 className='text-center font-semibold uppercase text-white'>Mint is Live</h1>
                </div>

                <div className='flex flex-row w-full h-[60px] lg:px-16 '>
                  <div className='w-[40%] flex items-center p-4 justify-center'>
                    <h1 className='text-center font-medium mx-6'>Home</h1>
                    <h1 className='text-center font-medium mx-6'>Roadmap</h1>
                  </div>

                  <div className='w-[20%] flex items-center p-4 justify-center'>
                    <h1 className='text-center font-medium mx-6'>Skelee Logo</h1>
                  </div>

                  <div className='w-[40%] flex items-center p-4 justify-center'>
                    <h1 className='text-center font-medium mx-6'>Team</h1>
                    <h1 className='text-center font-medium mx-6'>FAQ</h1>
                    <button className='text-center py-4 px-10 tracking-widest uppercase bg-gray-500 text-white font-semibold rounded-full mx-6'>MINT</button>
                  </div>

                </div>

              </div>
            </div>
            </>

            
    
        
    ) 
}