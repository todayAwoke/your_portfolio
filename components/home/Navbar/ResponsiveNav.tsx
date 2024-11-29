"use client"
import React, { useState } from 'react'
import MobileNavBar from './MobileNavBar'
import Nav from './Nav'
const ResponsiveNav = () => {
    const [showNav,setShowNav]=useState(false);
    const showNavHandler=()=>setShowNav(true);
    const closeNavHandler=()=>setShowNav(false)
  return (
    <div>
        <Nav openNav={showNavHandler} />
        <MobileNavBar showNav={showNav}  closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav