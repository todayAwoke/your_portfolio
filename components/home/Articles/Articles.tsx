import { articlesData } from '@/app/Data/data'
import SectionHeading from '@/components/helper/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Articles = () => {
    return (
        <div className='pt-28 pb-16 bg-gray-800' id='articles'>
            <SectionHeading>Articles</SectionHeading>
            <div className='text-center mt-10'>
                <h1 className='text-white mb-14 text-[24px] sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center px-9 text-bg font-bold'>Published Articles</h1>
            </div>
            <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center '>
                {articlesData.map((article,i) => {
                    return <div data-aos="flip-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay={`${i*100}`} 
                     key={article.id} className='bg-indigo-950 p-5 rounded-lg hover:scale-105 transition-all duration-300 '>
                        <div className='mb-5'>

                        <Link href={article.url} target='_blank' >
                            <Image src={article.image} width={400} height={400} alt='article' className='w-80 h-52 ' />
                        </Link>
                        </div>
                        <Link href={article.url} target='_blank' className='text-center mt-10 '>
                            <span className='text-white bg-blue-900 hover:bg-blue-700 px-4 py-3 mt-5  rounded-lg'>Click for details</span>
                        </Link>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Articles