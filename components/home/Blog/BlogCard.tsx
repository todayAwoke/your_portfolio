import Image from 'next/image';
import React from 'react'
type Props = {
  blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
  };
};
const BlogCard = ({ blog }: Props) => {
  const { date, image, summary, title } = blog;
  return (
    <div className='bg-indigo-950 rounded-md overflow-hidden'>
      <Image src={image} alt={title} width={40} height={40} className='w-full h-30 object-cover' />
      <div className='p-6'>
        <p className='rounded-lg px-6 py-1.5  bg-rose-500 text-white w-fit'>News</p>
        <h1 className='sm:text=lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold'> {title}</h1>
        <p className=' text-sm font-semibold text-opacity-80 text-gray-300'>{summary}</p>
        <div className=' mt-4 mb-4 w-full h-[1.5px] bg-gray-400 opacity-60 '>
          <div className='flex items-center justify-between'>
            <h1 className='text-sm text-gray-200 '>{date}</h1>
            <button data-aos="zoom-in" data-aos-delay="50" className='transition-all duration-200 rounded-lg  bg-blue-900 hover:bg-blue-700  items-center text-white mt-1 px-3 py-2'>Read More</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogCard