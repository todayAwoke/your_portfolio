import { aboutInfo, BaseInfo } from '@/app/Data/data'
import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      {/* section heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 '>
        {/* text contet */}
        <div>
          <h1 className='text-bg text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
            {aboutInfo.title}
          </h1>
          {/* description */}
          <p className='mt-6 text-base sm:text-[1.1rem] md:text-xl text-gray-300 opacity-90'>{aboutInfo.description}</p>

          <div className='mt-8'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                <FaCheck className='text-green-700 ' size={22} />

              </div>
            </div>
          </div>
        </div>
        <div></div>

      </div>
    </div>
  )
}

export default About