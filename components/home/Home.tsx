import React from 'react'
import Hero from './Hero'
import About from './About/About'
import Services from './Project/Project'
import Articles from './Articles/Articles'
import Testimonail from './Testimonail/Testimonail'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Articles/>
      <Testimonail/>
    </div>
  )
}

export default Home