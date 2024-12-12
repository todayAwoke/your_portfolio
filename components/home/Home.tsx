'use client'
import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About/About';
import Services from './Project/Project';
import Articles from './Articles/Articles';
import Testimonail from './Testimonail/Testimonail';
import Contact from './Contact/Contact';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Blog from './Blog/Blog';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Services />
      <Articles />
      <Blog />
      <Testimonail />
      <Contact />
    </div>

  );
};

export default Home;