import { useState, Fragment } from "react";

 
export default function About() {
 
  return (
    <>
    <div id='utlity'className='text-white w-full h-full flex flex-col items-center font-Kanit text-center'>
	<h1 className='md:text-[40px] text-[30px] font-Kanit text-white text-center uppercase font-semibold tracking-wide mb-2'> About</h1>

      <div className="flex flex-col items-center justify-center my-4 md:px-16 px-4">
        
      <p className="text-center text-lg md:w-[800px]">
      Welcome to an immortal gamer’s paradise, AKA SKELEE. A non-fungible token, that brings
together a community of late-night gamers from all around the world. Skelee is a collection of 8,000 unique NFTs on the Ethereum blockchain. Inspired by late night gaming, Beeple, 3D art, and a friend that never gave up on us, we released Skelee from the underworld to show him the other side of life. Filled with gaming, friends, competitions and augmented reality experiences, Skelee has a lot to explore. This is just the beginning, Rare Studios New York is our laboratory and we are a species that are set to live amongst others in our own unique metaverse and world to come. Join us for the gaming, stay for the family we build.
</p>
        
      </div>
    </div>
    </>
  );
}