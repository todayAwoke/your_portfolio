import React from 'react';
import Slider from './Slider';
import SectionHeading from '@/components/helper/SectionHeading';



const Testimonail = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading>Testimonails</SectionHeading>
        <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
        <Slider/>
        </div>
    </div>
  );
};

export default Testimonail;