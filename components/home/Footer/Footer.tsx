import React from 'react';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiTimesOutline } from 'react-icons/ti';
import { RiTelegramFill } from "react-icons/ri";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='pt-16 pb-16 bg-[#0f0715]'>
            <div className='block justify-between items-center'>
                <div className='flex items-center flex-wrap justify-center gap-10  space-x-6 space-y-4 text-white font-bold'>
                    <Link className='nav__link' href={'#hero'}>Home</Link>
                    <Link className='nav__link' href={'#about'} >About</Link>
                    <Link className='nav__link' href={'#project'} >Project</Link>
                    <Link className='nav__link' href={'#articles'} >Articles</Link>
                    <Link className='nav__link' href={'#blog'} >Blogs</Link>
                    <Link className='nav__link' href={'#testimonials'} >Testimonials</Link>
                    <Link className='nav__link' href={'#contact'} >Contact</Link>
                </div>
                <div className='px-8 mx-3'>
                    <div className='flex gap-10 items-center justify-center mt-7'>
                        <Link className=' text-white hover:scale-125 ' href={'https://www.facebook.com/tarekegne.argaw?mibextid=ZbWKwL'} target='_blank'> <TiSocialFacebook className='w-11 h-11' /></Link>
                        <Link className=' text-white hover:scale-125' href={'https://www.linkedin.com/in/tarekegn-argaw-12708461/?originalSubdomain=et'} target='_blank'> <TiSocialLinkedin className='w-11 h-11' /></Link>
                        <Link className=' text-white hover:scale-125' href={'/'}>  <TiSocialTwitter className='w-11 h-11' /></Link>
                        <Link className=' text-white hover:scale-125' href={'/'}>   <RiTelegramFill className='w-11 h-11' /></Link>
                    </div>
                </div>
            </div>
            <p className='text-white text-opacity-65 mt-6 text-center'>@ 2024 All Rights Reserved</p>
        </div>
    );
}

export default Footer;