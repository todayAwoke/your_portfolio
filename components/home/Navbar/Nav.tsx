'use client';
import { NavLinks } from '@/constant/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { HiBars3BottomRight } from 'react-icons/hi2';

// Define props type
type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            setNavBg(window.scrollY >= 90);
        };

        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

    // Smooth scroll function
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={`fixed ${navBg ? "bg-[#240b39]" : "bg-transparent"} h-[12vh] z-[10] w-full transition-all duration-200`}>
            <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
                {/* Logo */}
                <Link href='#hero'>
                    <Image
                        alt='image'
                        src='/images/logo.png'
                        width={50}
                        height={50}
                        className='rounded-full w-[10vw] h-[10vw] cursor-pointer sm:w-[7vw] sm:h-[7vw] md:w-[5vw] md:h-[5vw] p-1'
                    />
                </Link>

                <div className='flex items-center space-x-10'>
                    <div className='hidden lg:flex items-center space-x-8'>
                        {NavLinks.map((navlink) => (
                            <Link key={navlink.id} href={navlink.url} onClick={(e) => handleSmoothScroll(e, navlink.url.replace('#', ''))}>
                                <p className='nav__link'>{navlink.label}</p>
                            </Link>
                        ))}
                    </div>
                    {/* Button */}
                    <div className='flex items-center space-x-4'>
                        {/* Burger Menu */}
                        
                        <FiMenu onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;