'use client'

import React,{useState,useEffect} from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible,setIsVisible]=useState(false)

    useEffect(()=>{
const toggleVisiblity=()=>{
    if(window.scrollY>300){
        setIsVisible(true)
    }
    else{
        setIsVisible(false)
    }
}
window.addEventListener('scroll',toggleVisiblity);
return()=>{
    window.removeEventListener('scroll',toggleVisiblity);

}
    },[])

    const scrolltoTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }
  return (
    <div className='fixed bottom-4 animate-pulse right-4 '>
        {isVisible &&(<button onClick={scrolltoTop}  className='bg-blue-600 text-white rounded-full  w-12 h-12 flex items-center justify-center focus:outline-none'>
            <FaArrowAltCircleUp/>
        </button>) }
    </div>
  )
}

export default ScrollToTop