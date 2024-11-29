import { NavLinks } from '@/constant/constants'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
//define props type 
type Props = {
    showNav: boolean;
    closeNav: () => void;
}
const MobileNavBar = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : 'translate-x-[-100%]'
    return (
        <div>
            {/* overlay */}

            <div className={`fixed ${navOpen} transform transition-all duration-500  inset-0 z-[1000] bg-black opacity-90 w-full h-screen`} >
                <div className={`text-white ${navOpen} transform transition-all duration-500  delay-300  fixed justify-center flex flex-col h-full w-[100%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>
                    {NavLinks.map((navlink) => {
                        return <Link key={navlink.id} href={navlink.url}>
                            <p className='nav__link text-[20] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30]'>{navlink.label}</p>
                        </Link>
                    })}
                    {/*close button  */}
                    <CgClose  onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
                </div>

            </div>
        </div>
    )
}

export default MobileNavBar