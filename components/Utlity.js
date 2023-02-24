import { useState, Fragment } from "react";

 
export default function Utlity() {
 
  return (
    <>
    <div id='utlity'className='text-white w-full h-full flex flex-col items-center font-Kanit text-center'>
    <h1 className='md:text-[40px] text-[30px] font-Kanit text-white text-center uppercase font-semibold tracking-wide mb-8'> Utlity</h1>

    {/* first row */}
      <div className="flex flex-row items-center justify-center border-b border-white">
        
        <div className="w-[400px] p-6 flex flex-col items-center justify-center border-r border-white">
          <img src="/1.jpg" className="w-[150px] h-[150px] rounded-lg"/>
          <h1 className='font-semibold my-4 uppercase'>1 0F 1 ART PIECE</h1>
          <p>Skelee was created by a world class artist.
            <br/>Each NFT has uniqu value and desirability.
            <br/> as it not only represents ownership of a unique digital
            <br/> assest but also reflects the artist who created it.
          </p>
        </div>
        <div className="w-[400px] p-6 flex flex-col items-center justify-center border-l border-white">
          <img src="/1.jpg" className="w-[150px] h-[150px] rounded-lg"/>
          <h1 className='font-semibold my-4 uppercase'>Gaming champions league</h1>
          <p>Skelee's gaming champion league for
            <br/>NFT holders is the ultimate battleground
            <br/> where skilled players complete for glory and
            <br/> valuble digital assets.
          </p>
        </div>
        
      </div>
      {/* second-row */}
       <div className="flex flex-row items-center justify-center border-t border-white">
        
        <div className="w-[400px] p-6 flex flex-col items-center justify-center border-r border-white">
          <img src="/1.jpg" className="w-[150px] h-[150px] rounded-lg"/>
          <h1 className='font-semibold my-4 uppercase'>Immortal Community</h1>
          <p>Our immortal community is a lively
            <br/>and engaging space where late night gamers
            <br/>from around the world can connect, chat and share
            <br/>their passion for gaming
          </p>
        </div>
        <div className="w-[400px] p-6 flex flex-col items-center justify-center border-l border-white">
          <img src="/1.jpg" className="w-[150px] h-[150px] rounded-lg"/>
          <h1 className='font-semibold my-4 uppercase'>Argumented Reality</h1>
          <p>Skelees argumented reality 'experience' will
            <br/>provide a fully impressive and interactive gameplay
            <br/>adventure thatseamlessly blends
            <br/>the digital and physical world.
          </p>
        </div>
        
      </div>
    </div>
    </>
  );
}
