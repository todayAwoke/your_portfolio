import React from 'react';
import Reference from './References';
import SectionHeading from '@/components/helper/SectionHeading';
import Certificate from './Certificate';
// import { certificateData } from '@/app/Data/data'


const Testimonail = () => {
  return (
    <div className='pt-24 pb-16 bg-gray-800' id='testimonails'>
        <SectionHeading>Testimonails</SectionHeading>
        <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
        <Reference/>
        </div>
    </div>
  );
};

export default Testimonail;