import Image from 'next/image';
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

type Props = {
  blog: {
    title: string;
    summary: string;
    detail: string;
    date: string;
    image: string;
  };
};

const BlogCard = ({ blog }: Props) => {
  const { date, image, summary, title, detail } = blog;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='bg-indigo-950 rounded-md overflow-hidden'>
      <Image src={image} alt={title} width={500} height={300} className='w-full h-48 object-cover' />
      <div className='p-6'>
        <div className='flex flex-col items-start'>
          <p className='text-sm font-semibold text-opacity-90 text-white'>{summary}</p>
          {isOpen && <p className='mt-2 text-gray-200'>{detail}</p>}
          <button
            onClick={toggleDetails}
            className='transition-all duration-200 rounded-lg bg-blue-900 hover:bg-blue-700 items-center text-white mt-1 px-3 py-2'>
            {isOpen ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div className='mt-4 mb-4 w-full h-[1.5px] bg-gray-400'>
          <div className='flex items-center justify-between'>
            <h1 className='text-sm text-white'>{new Date(date).toLocaleDateString()}</h1>
            <a href='/cv/mmayer.pdf' target="_blank" rel="noopener noreferrer">
              <button className='text-white font-semibold text-sm m-2 p-2 transition-all duration-200 rounded-lg bg-blue-900 hover:bg-blue-700 flex items-center space-x-2'>
                <span>Download PDF</span>
                <FaDownload />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;