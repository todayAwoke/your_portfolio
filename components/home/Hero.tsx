import { BaseInfo } from '@/app/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className=' w-full pt-[4vh] md:pt-[12vh] h-screen bg-gray-800 overflow-hidden relative'>
            <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
                <div className=' grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    {/* content */}
                    <div >
                        <h1 className=' text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold  mb-5'>I am <span className='text-green-600 font-bold'>{BaseInfo.name}</span></h1>
                        {/* title */}
                        <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl font-bold  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>{BaseInfo.position}</h1>

                        {/* discription */}
                        <p className='mt-6  md:text-xl  text-white text-opacity-80'>{BaseInfo.description}</p>
                        {/* button */}
                        <a href='/cv/mmayer.pdf' target="_blank" rel="noopener noreferrer">
                            <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-900 hover:bg-blue-700 flex items-center space-x-2'>
                                <span>Download CV</span>
                                <FaDownload />
                            </button>
                        </a>
                    </div>
                    {/* image content */}
                    <div className='mx-auto hidden cursor-pointer lg:block rounded-[3rem] border-[0.2rem] border-blue-950 overflow-hidden '>
                        <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={350} height={350}/>

                    </div>
                    <div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero