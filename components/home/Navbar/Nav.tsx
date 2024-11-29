
'use client';
import { NavLinks } from '@/constant/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
// define 
type Props={
    openNav:()=>void
}
const Nav = ({openNav}:Props) => {
    const [navBg,setNavBg]=useState(false);
    useEffect(()=>{
        const handler=()=>{

        if (window.scrollY>=90){
            setNavBg(true);
        }
        if(window.scrollY<90){
            setNavBg(false);
        }
    };
    window.addEventListener('scroll',handler)
    return ()=>{
        window.removeEventListener('scroll',handler)
    }
    },[]);
    return (
        <div className={`fixed ${navBg ? "bg-[#240b39]":"fixed" } h-[12vh] z-[10] w-full transition-all duration-200`}>
            <div className=' flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
                {/* logo */}
                <Image alt='image' src='/images/logo.png' width={170} height={170} className='ml-[-1.5rem] sm:ml-0' />

                <div className='flex items-center space-x-10 '>
                    <div className='hidden lg:flex items-center space-x-8 '>

                        {NavLinks.map((navlink) => {
                            return <Link key={navlink.id} href={navlink.url}><p className='nav__link'>{navlink.label}</p></Link>
                        })}
                    </div>
                    {/* button */}
                    <div className='flex items-center space-x-4 '>
                        <button className=' md:px-10 md:py-3 px-8 py-2 text-blue-800  font-semibold sm:text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                             Contact me </button>
                             {/* burgar */}
                             <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer  text-white lg:hidden'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav