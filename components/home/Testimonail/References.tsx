'use client'
import { referenceData } from '@/app/Data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';
const Slider = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      //   slidesToSlide:1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div className='text-center' >
        <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>My References </h1>
      </div>
      <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive} >
        {referenceData.map((reference) => (
          <div key={reference.image}>
            <SliderCard reference={reference} />
          </div>
        ))}

      </Carousel>
    </div>
  )
}

export default Slider