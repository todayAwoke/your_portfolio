import { aboutInfo, BaseInfo } from '@/app/Data/data'
import SectionHeading from '@/components/helper/SectionHeading'
import Image from 'next/image'
import React from 'react'
import { FaCheck, FaGraduationCap, FaMagic, FaMailBulk, FaSchool, FaVoicemail } from 'react-icons/fa'
import { FaCableCar, FaLocationDot } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-800'>
      {/* section heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20 '>
        {/* text contet */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className='text-bg text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
            {aboutInfo.title}
          </h1>
          {/* description */}
          <p className='mt-6 text-base sm:text-[1.1rem] md:text-xl text-gray-300 opacity-90'>{aboutInfo.description}</p>
          <div className='mt-8'>
            <div className='flex items-center space-x-4 mb-6'>
              <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                <FaCheck className='text-blue-700 ' size={22} />
              </div>
              <p className='text-sm sm:text-base md:text-xg font-semibold text-gray-300'>Fitting enhanced statistical models to
                unbalnced large dataset using ASreml-R</p>
            </div>
          </div>
          <div className='sm:mt-3'>
            <div className='flex items-center space-x-4 mb-6'>
              <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                <FaCheck className='text-blue-700 ' size={22} />
              </div>
              <p className='text-sm sm:text-base md:text-xg font-semibold text-gray-300'>Coordinator of biometrics Research
                Team at EIAR</p>
            </div>
          </div>
          <div className='sm:mt-3'>
            <div className='flex items-center space-x-4 mb-6'>
              <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                <FaCheck className='text-blue-700 ' size={22} />
              </div>
              <p className='text-sm sm:text-base md:text-xg font-semibold text-gray-300'>Statistical methods and software
                training for agricultural researchers</p>
            </div>
          </div>
          <div className='text-white mt-5 sm:mt-8'>
            <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Research Interest</h1>
            <div className='mt-2 sm:mt-3'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                  <FaMagic className='text-blue-700 ' size={22} />
                </div>
                <p className='text-sm sm:text-base md:text-xg sm:font-semibold text-gray-300'>Improving multi-environment trials (MET) data
                  analysis using enhanced statistical models</p>
              </div>
            </div>
            <div className='mt-2 sm:mt-3'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                  <FaMagic className='text-blue-700 ' size={22} />
                </div>
                <p className='text-sm sm:text-base md:text-xg sm:font-semibold text-gray-300'>Computer programming, Mixed model
                  statistics, Experimental design</p>
              </div>
            </div>
            <div className='mt-2 sm:mt-3'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                  <FaMagic className='text-blue-700 ' size={22} />
                </div>
                <p className='text-sm sm:text-base md:text-xg sm:font-semibold text-gray-300'>Crop Growth Modeling</p>
              </div>
            </div>
          </div>
          <div className='text-white mt-3 sm:mt-6'>
            <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Professional Membership</h1>
            <div>
              <div className='mt-2'>
                <div className='flex items-center space-x-4 mb-6'>
                  <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                    <FaMagic className='text-blue-700 ' size={22} />
                  </div>
                  <p className='text-sm sm:text-base md:text-xg sm:font-semibold sm:text-white text-gray-300'>Member of International Biometric Society (IBS)</p>
                </div>
              </div>
            </div>
            <div>
              <div className='mt-2'>
                <div className='flex items-center space-x-4 mb-6'>
                  <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                    <FaMagic className='text-blue-700 ' size={22} />
                  </div>
                  <p className='text-sm sm:text-base md:text-xg sm:font-semibold sm:text-white text-gray-300'>Member Ethiopian Statistical Association (ESA)</p>
                </div>
              </div>
            </div>
            <div>
              <div className='mt-2'>
                <div className='flex items-center space-x-4 mb-6'>
                  <div className='w-7 h-7 bg-white flex flex-col rounded items-center justify-center'>
                    <FaMagic className='text-blue-700 ' size={22} />
                  </div>
                  <p className='text-sm sm:text-base md:text-xg sm:font-semibold sm:text-white text-gray-300'>Member of Crop Science Society of Ethiopia (CSSE)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* left part of the page */}

        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100" className=''>
          <div className='text-center' >
            <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Experience </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 items-center lg:mx-auto'>
            <div className='relative justify-center rounded-md  '>
              <Image
                src='/images/experience1.png'
                alt='image 1'
                width={150}
                height={150}
                className='object-cover cursor-pointer h-56 w-56 sm:h-60 sm:w-80 rounded-md hover:scale-105 transition-all duration-200 mx-5 '
              />
              <p className='absolute text-[#8750f7] opacity-0 hover:opacity-85 top-16 left-10 text:xl sm:text-2xl '>Ethiopian Institute of Agricultural Research</p>
              <p className='mt-3 sm:font-bold  sm:text-xl   text-white px-7 mb-2'>Researcher I</p>
              <button className='py-2 text-base sm:text-lg text-gray-100 rounded-lg mx-6  px-7 bg-blue-900 hover:bg-blue-700 '>
                Read More...
              </button>
            </div>
            <div className=' relative justify-center'>
              <Image
                src='/images/experience2.png'
                alt='image 2'
                width={400}
                height={500}
                className='object-cover cursor-pointer h-56 w-56 sm:h-60 sm:w-80 rounded-md mx-5 hover:scale-105'
              />

              <p className='absolute text-[#8750f7] top-16 left-10 text:xl sm:text-2xl'>Jimma Agricultural Research Center</p>
              <p className='mt-3 sm:font-bold sm:text-xl text-white px-4 mb-2'>Assistant Researcher</p>
              <button className='py-2 text-base sm:text-lg text-gray-100 rounded-lg  px-6 mx-6 bg-blue-900 hover:bg-blue-700 '>
                Read More...
              </button>
            </div>
          </div>
          <div className='px-1 mt-16'>
            <div className='text-center' >
              <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Programming Skills </h1>
            </div>
            <div className='grid grid-cols-1 md:mx-auto px-6'>
              <div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-teal-500 w-[100%] text-sm h-full justify-center items-center flex text-white">100%</h2>
                  <p className='text-white mb-2'>R</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-teal-500 w-[100%] text-sm h-full justify-center items-center flex text-white">100%</h2>
                  <p className='text-white mb-2'>ASReml-R</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-teal-500 w-[100%] text-sm h-full justify-center items-center flex text-white">100%</h2>
                  <p className='text-white mb-2'>SAP</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-teal-500 w-[100%] text-sm h-full justify-center items-center flex text-white">100%</h2>
                  <p className='text-white mb-2'>SPSS</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-purple-500 w-[90%] text-sm h-full justify-center items-center flex text-white">90%</h2>
                  <p className='text-white mb-2'>STATA</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-purple-500 w-[90%] text-sm h-full justify-center items-center flex text-white">90%</h2>
                  <p className='text-white mb-2'>LaTex</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-purple-500 w-[90%] text-sm h-full justify-center items-center flex text-white">90%</h2>
                  <p className='text-white mb-2'>Genstat</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-purple-500 w-[80%] text-sm h-full justify-center items-center flex text-white">80%</h2>
                  <p className='text-white mb-2'>Python</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-yellow-500 w-[60%] text-sm h-full justify-center items-center flex text-white">60%</h2>
                  <p className='text-white mb-2'>AcrGIS</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-teal-500 w-[95%] text-sm h-full justify-center items-center flex text-white">95%</h2>
                  <p className='text-white mb-2'>Minitab</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-1 mt-16'>
            <div className='text-center' >
              <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Education </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:mx-auto px-6 gap-14'>

              <div className='text-white'>
                <div className='flex gap-3'>
                  <FaGraduationCap className='text-blue-800' size={48} />
                  <h1>Master of Science with Honord in Biostatistice</h1>
                </div>
                <div className='flex gap-4 mt-2'>
                  <FaSchool className='text-cyan-800' size={24} />
                  <p>Jimma University</p>
                </div>
                <div className='flex gap-5 sm:gap-10 mt-3'>
                  <div className='flex gap-2 items-center justify-center'>
                    <FaCableCar className='text-yellow-600' size={24} />
                    <p>2014-2016</p>
                  </div>

                </div>
                <div className='flex gap-10 mt-3'>
                  <div className='flex gap-2 items-center justify-center'>
                    <FaVoicemail className='text-yellow-600' size={24} />
                    <p>ero@ju.edu.et</p>
                  </div>

                </div>
              </div>
              <div className='text-white'>
                <div className='flex gap-3'>
                  <FaGraduationCap className='text-blue-800' size={48} />
                  <h1>Bachelor of Science in Statistice</h1>
                </div>
                <div className='flex gap-4 mt-2'>
                  <FaSchool className='text-cyan-800' size={24} />
                  <p>Addis Ababa University</p>
                </div>

                <div className='flex gap-6 sm:gap-10 mt-3'>
                  <div className='flex gap-2 items-center justify-center'>
                    <FaCableCar className='text-yellow-600' size={24} />
                    <p>2009-2011</p>
                  </div>
                </div>
                <div className='flex gap-5 sm:gap-7 mt-3'>
                  <div className='flex gap-2 items-center justify-center'>
                    <FaVoicemail className='text-yellow-600' size={24} />
                    <p>infolib@lib.aau.edu.et</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-white mt-8'>
              <div className='text-center '>
                <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Languages </h1>
              </div>
              <div className='items-center justify-center  px-10 mx-5'>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-teal-500 w-[100%] text-sm h-full justify-center items-center flex text-white">100%</h2>
                  <p className='text-white mb-2'>Amharic</p>
                </div>
                <div className="mb-3 bg-blue-700 h-5 rounded-full flex gap-6">
                  <h2 className="bg-teal-500 w-[100%] text-sm h-full justify-center items-center flex text-white">100%</h2>
                  <p className='text-white mb-2'>English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About