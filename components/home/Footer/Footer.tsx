import Image from 'next/image'
import React from 'react'
import Nav from '../Navbar/Nav'
import ResponsiveNav from '../Navbar/ResponsiveNav'
import { TiSocialFacebook, TiSocialTwitter, TiTimesOutline } from 'react-icons/ti';
import { RiTelegramFill } from "react-icons/ri";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='pt-16 pb-16 bg-[#0f0715]'>
            <div className='block justify-between items-center'>


                <div className='flex items-center flex-wrap justify-center space-x-6 space-y-4 text-white font-bold'>

                    <Link href={'#hero'}>Home</Link>
                    <Link href={'#about'}>About</Link>
                    <Link href={'#project'}>Project</Link>
                    <Link href={'#articles'}>Articles</Link>
                    <Link href={'#blog'}>Bogs</Link>
                    <Link href={'#testimonails'}>Testimonials</Link>
                    <Link href={'#contact'}>Contact</Link>
                    
                </div>
                <div className=' px-8 mx-3'>
                    {/* <p className='text-white font-bold text-base sm:text-lg md:text-xl'>Social Media</p> */}
                    <div className='flex gap-10  items-center justify-center mt-7'>
                        <Link className=' text-white hover:scale-125'  href={'/'}> <TiSocialFacebook className='w-11 h-11' /></Link>
                        <Link  className=' text-white hover:scale-125' href={'/'}>  <TiSocialTwitter className='w-11 h-11' /></Link>
                        <Link className=' text-white hover:scale-125' href={'/'}>   <RiTelegramFill className='w-11 h-11' /></Link>
                        <p></p>
                    </div>
                </div>

            </div>
            <p className='text-white text-opacity-65 mt-6 text-center'>@ 2024 All Right Reserved </p>
        </div>
    )
}

export default Footer