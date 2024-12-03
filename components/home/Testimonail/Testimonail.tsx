import React from 'react';
import Reference from './References';
import SectionHeading from '@/components/helper/SectionHeading';
import Certificate from './Certificate';
// import { certificateData } from '@/app/Data/data'


const Testimonail = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading>Testimonails</SectionHeading>
        <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
        <Reference/>
        </div>
        <div className='text-center' >
        <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>My Certificate</h1>
      {/* {certificateData} */}
      {/* <Certificate certificate={certificate} /> */}
      </div>
    </div>
  );
};

export default Testimonail;