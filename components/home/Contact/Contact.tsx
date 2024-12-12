import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import { ContactForm } from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
    return (
        <div className='pt-24 pb-16 bg-gray-800' id='contact'>
            <SectionHeading>Contact Me</SectionHeading>
            <div className='text-center mt-10'>
                <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Getin touch with me</h1>
            </div>
            <div className='  grid grid-cols-1 md:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10 '>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center"
                    data-aos-delay="100"
                >
                    <ContactForm />
                </div>
                <div className='xl:mx-auto px-10'><ContactInfo /></div>
            </div>
        </div>
    )
}

export default Contact