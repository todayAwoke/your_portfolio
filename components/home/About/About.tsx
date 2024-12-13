import { aboutInfo } from '@/app/Data/data'
import SectionHeading from '@/components/helper/SectionHeading'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCheck, FaGraduationCap, FaMagic, FaSchool, FaVoicemail } from 'react-icons/fa'
import { FaCableCar } from 'react-icons/fa6'
const paragraphStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
};
const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <div className='pt-28 pb-16 bg-gray-800' id='about'>
      {/* section heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  '>
        {/* text contet */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className='text-bg text-[24px] sm:text-3xl md:text-4xl font-bold text-gray-200'>
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
            <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl items-center justify-center px-9 text-bg font-bold'>Research Interest</h1>
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
            <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl items-center justify-center px-9 text-bg font-bold'>Professional Membership</h1>
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

        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100" className='mt-10'>
          <div className='text-center' >
            <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl  items-center justify-center px-9 text-bg font-bold'>Experience </h1>
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
              <p className='mt-3 sm:font-bold  sm:text-xl   text-white px-7 mb-2'> Reseacher 1</p>
              <div>
                <h2 className='text-[#cbc7d3] sm:text-xl font-semibold mb-3'> Ethiopian Institute of Agricultural Research</h2>
                <div className='items-center flex justify-between text-white gap-5 mb-5'>
                  <p>Apr 2020-Present</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
                <ul className='text-white' style={isOpen ? {} : paragraphStyles}>
                  <li className='list-disc' >Advanced designs of experiments, conduct P-rep design for early generation and large field trials .</li>
                  <li className='list-disc'>Conduct spatial,pedigree analysis and crop modeling</li>
                  <li className='list-disc'>Multi-enviroment trial (MET) data analysis using enhanced statistical models</li>
                  <li className='list-disc'>Trainig on statistical method and computing software for crop breeder</li>
                  <li className='list-disc'> Crop breeding trials data management and developments of new research proposals.</li>
                  <li className='list-disc'>Implementing, follow up and M&E biometrics research projects.</li>
                  <li className='list-disc'>Lead and manage biometrics research team</li>
                  <li className='list-disc'>Writing technical publications and reports</li>
                </ul>
              </div>
              <button
                className='py-2 text-base  text-gray-100 rounded-lg mx-6 px-7 bg-blue-900 hover:bg-blue-700'
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Read Less...' : 'Read More...'}
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

              <div>
                <h2 className='text-[#8750f7] sm:text-xl font-semibold'>Jimma Agricultural Research Center</h2>
                <div className='items-center flex justify-between text-white gap-5 mb-5'>
                  <p>Feb 2013-Apr 2019</p>
                  <p>Jimma, Ethiopia</p>
                </div>
                <ul className='text-white' style={isOpen2 ? null : paragraphStyles}>
                  <li className='list-disc'> Coordinating Biometry, GIS, and Agro-meteorology team</li>
                  <li className='list-disc'>Implementing research activities.</li>
                  <li className='list-disc'>Generating design of experments for field trials.</li>
                  <li className='list-disc'>Managing crop breeding trials dataset.</li>
                  <li className='list-disc'>Cunducting data analysis for genotypes selection at each trial stage</li>

                </ul>
              </div>
              <button
                className='py-2 text-base  text-gray-100 rounded-lg mx-6 px-7 bg-blue-900 hover:bg-blue-700'
                onClick={() => setIsOpen2(!isOpen2)}
              >
                {isOpen2 ? 'Read Less...' : 'Read More...'}
              </button>
            </div>
          </div>
          <div className='px-1 mt-16'>
            <div className='text-center' >
              <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl items-center justify-center px-9 text-bg font-bold'>Programming Skills </h1>
            </div>
            <div className='grid grid-cols-1 md:mx-auto px-6'>
              <div >
                <div className='flex items-center gap-16'>
                  <p className='text-white text-sm sm:text-base mb-2'>R</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-full h-full flex items-center rounded-3xl justify-center text-sm text-white">100%</h2>
                  </div>
                </div>
                <div className='flex items-center'>
                  <p className='text-white text-sm sm:text-base mb-2'>ASReml-R</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-full h-full flex items-center rounded-3xl justify-center text-sm text-white">100%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-11'>
                  <p className='text-white text-sm sm:text-base mb-2 '>SAP</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-full h-full flex items-center rounded-3xl justify-center text-sm text-white">100%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-8'>
                  <p className='text-white text-sm sm:text-base mb-2'>SPSS</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-full h-full flex items-center rounded-3xl justify-center text-sm text-white">100%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <p className='text-white text-sm sm:text-base mb-2'>Minitab</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-[95%] h-full flex items-center rounded-3xl justify-center text-sm text-white">95%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-7'>
                  <p className='text-white text-sm sm:text-base mb-2'>STATA</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-[90%]  h-full flex items-center rounded-3xl justify-center text-sm text-white">90%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-8'>
                  <p className='text-white text-sm sm:text-base mb-2'>LaTex</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-600 w-[90%]  h-full flex items-center rounded-3xl justify-center text-sm text-white">90%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='text-white text-sm sm:text-base mb-2'>Genstat</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-600 w-[90%]  h-full flex items-center rounded-3xl justify-center text-sm text-white">90%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-white text-sm sm:text-base mb-2'>Python</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-600 w-[80%] h-full flex items-center rounded-3xl justify-center text-sm text-white">80%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-white text-sm sm:text-base mb-2'>AcrGIS</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-400 w-[60%] h-full flex items-center rounded-3xl justify-center text-sm text-white">60%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-1 mt-16'>
            <div className='text-center' >
              <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl items-center justify-center px-9 text-bg font-bold'>Education </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:mx-auto px-6 gap-12'>
              
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
                  <div className='flex gap-5 items-center justify-center'>
                    <FaCableCar className='text-yellow-600' size={24} />
                    <p>2009-2011</p>
                  </div>
                </div>
                <div className='flex gap-5 sm:gap-7 mt-3'>
                  <div className='flex gap-5 items-center justify-center'>
                    <FaVoicemail className='text-yellow-600' size={24} />
                    <p>infolib@lib.aau.edu.et</p>
                  </div>
                </div>
              </div>
              <div className='text-white'>
                <div className='flex gap-3'>
                  <FaGraduationCap className='text-blue-800' size={56} />
                  <h1>Master of Science with Honord in Biostatistice</h1>
                </div>
                <div className='flex gap-4 mt-2'>
                  <FaSchool className='text-cyan-800' size={24} />
                  <p>Jimma University</p>
                </div>
                <div className='flex gap-5 sm:gap-10 mt-3'>
                  <div className='flex gap-5 items-center justify-center'>
                    <FaCableCar className='text-yellow-600' size={24} />
                    <p>2014-2016</p>
                  </div>

                </div>
                <div className='flex gap-10 mt-3'>
                  <div className='flex gap-5 items-center justify-center'>
                    <FaVoicemail className='text-yellow-600' size={24} />
                    <p>ero@ju.edu.et</p>
                  </div>

                </div>
              </div>
            </div>
            <div className='text-white mt-8'>
              <div className='text-center '>
                <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl items-center justify-center px-9 text-bg font-bold'>Languages </h1>
              </div>
              <div className='items-center justify-center  px-10 mx-5'>
                <div className='flex items-center gap-6'>
                  <p className='text-white text-sm sm:text-base mb-2'>English</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-full h-full flex items-center rounded-3xl justify-center text-sm text-white">100%</h2>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <p className='text-white text-sm sm:text-base mb-2'>Amharic</p>
                  <div className="mb-3 bg-blue-700 sm:h-5 h-3 rounded-full flex flex-1 mx-2">
                    <h2 className="bg-indigo-800 w-full h-full flex items-center rounded-3xl justify-center text-sm text-white">100%</h2>
                  </div>
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