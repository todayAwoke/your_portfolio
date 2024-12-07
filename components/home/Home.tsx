import React from 'react'
import Hero from './Hero'
import About from './About/About'
import Services from './Project/Project'
import Articles from './Articles/Articles'
import Testimonail from './Testimonail/Testimonail'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Articles/>
      <Testimonail/>
      <Contact/>
    </div>
  )
}

export default Home