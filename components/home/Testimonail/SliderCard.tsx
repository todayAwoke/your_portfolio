import Image from 'next/image';
import React from 'react'

type Props={
    reference: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
    }
}

const SliderCard = ({reference}:Props) => {
    const {image,name,profession,rating,review}=reference;
  return (
    <div className='rounded-md overflow-hidden  bg-[#140c1c] m-4'>
        <div className='p-6'>
<Image src={image} alt={name} width={50} height={50}/>
        </div>
        </div>
  )
}

export default SliderCard