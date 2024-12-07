'use client'
import Tilt from 'react-parallax-tilt';
import React from 'react'
import Image from 'next/image';

type Props = {
  project: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }
}

const ServicesCard = ({ project }: Props) => {

  return <Tilt className="shadow-2xl p-6 rounded-lg bg-[#20132b]" >
    <Image src={`${project.icon}`} alt={project.title} width={50} height={50} className=' h-40 w-full' />
    <h1 className='mt-4 text-lg font-bold text-gray-100'> {project.title}</h1>
    <p className='mt-3 text-sm text-white text-opacity-80'>{project.description}</p>
  </Tilt>


}

export default ServicesCard