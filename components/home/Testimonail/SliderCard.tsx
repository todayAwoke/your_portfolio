import Image from 'next/image';
import React from 'react'

type Props = {
  reference: {
    name: string;
    description: string;
    email:string;
    phone: string;
    profession: string;
    image: string;
  }
}

const SliderCard = ({ reference }: Props) => {
  const { image} = reference;
  return (
    <div className='rounded-md overflow-hidden text-white bg-indigo-950 m-4'>
      
      <div className='p-6'>
        <div className=' flex gap-4'>
      <Image src={image} alt='' width={50} height={50} className='rounded-full h-20' />
      <div>
        <h2>{reference.name}</h2>
        <p className='text-blue-600'>{reference.email}</p>
        <p>{reference.profession}</p>
        <p className='text-sm text-gray-300 overflow-hidden py-4 pr-5 mr-3'>{reference.description}</p>
        {/* <p>{}</p> */}
      </div>
        </div>
      </div>
    </div>
  )
}

export default SliderCard