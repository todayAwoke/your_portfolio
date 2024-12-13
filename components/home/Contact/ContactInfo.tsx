import { contactData } from '@/app/Data/data'
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const ContactInfo = () => {
  return (
    <div className=' '>
      <div className='flex items-center space-x-8 hover:scale-105'>
        <div className='w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-950 flex items-center justify-center flex-cols'>
          <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white' />
        </div>

        <div><h1 className='text-lg sm:xl text-white font-bold '>Phone</h1>
          <h1 className='text-white text-base sm:text-lg text-opacity-85'>{contactData.phone}</h1>
        </div>
      </div>
      <div className='flex items-center space-x-8  mt-5 mb-5 hover:scale-105'>
        <div className='w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-950 flex items-center justify-center flex-cols'>
          <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white' />
        </div>

        <div><h1 className='text-lg sm:xl text-white font-bold '>Email</h1>
          <h1 className='text-white text-base sm:text-lg text-opacity-85'>{contactData.email}</h1>
        </div>
      </div>
      <div className='flex items-center space-x-8  hover:scale-105'>
        <div className='w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-950 flex items-center justify-center flex-cols'>
          <FaLocationDot className='w-4 h-4 md:w-7 md:h-7 text-white' />
        </div>

        <div><h1 className='text-lg sm:xl text-white font-bold '>Address</h1>
          <h1 className='text-white text-base sm:text-lg text-opacity-85'>{contactData.address}</h1>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo