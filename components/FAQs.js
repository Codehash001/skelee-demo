import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <div id='faqs'className='md:mx-16 mx-2 p-6 rounded-lg text-white'>
      <h1 className='md:text-[40px] text-[30px] font-Kanit text-white text-center uppercase font-semibold tracking-widest mb-8'> FAQ</h1>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className=' dark:text-white  text-[21px]'>
          What is Skelee nft?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
         description
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation} className=' dark:text-white  text-[22px]'>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What are the benifits of holding a Skelee?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
        description
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation} className=' dark:text-white  text-[22px]'>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Who can mint Skelee?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
          description
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation} className=' dark:text-white text-[21px]'>
        <AccordionHeader onClick={() => handleOpen(4)}>
          How do I claim my Skelee Boots?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
        description
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={customAnimation} className=' dark:text-white text-[21px]'>
        <AccordionHeader onClick={() => handleOpen(5)}>
          How will minting work?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
        description
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} animate={customAnimation} className=' dark:text-white text-[21px]'>
        <AccordionHeader onClick={() => handleOpen(6)}>
          Are Skelee Nfts on ERC-721 or ERC-1155?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
        description
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7} animate={customAnimation} className=' dark:text-white text-[21px]'>
        <AccordionHeader onClick={() => handleOpen(7)}>
          Where can I view my SKELEE after purchasinh it?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
        description
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 8} animate={customAnimation} className=' dark:text-white text-[21px]'>
        <AccordionHeader onClick={() => handleOpen(8)}>
          Will there be another Skelee's in the future?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
        description
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 9} animate={customAnimation} className=' dark:text-white text-[21px]'>
        <AccordionHeader onClick={() => handleOpen(9)}>
          What is the royalty % ?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 text-[20px]'>
        description
        </AccordionBody>
      </Accordion>
    </div>
  );
}
