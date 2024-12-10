import { blogs } from '@/app/Data/data'
import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-800'>
            <SectionHeading>My Blogs</SectionHeading>
            <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
{blogs.map((blog)=>{
    return <div key={blog.id}>
        {/* blog card */}
        <BlogCard blog={blog} />
    </div>
}

)}
            </div>
        </div>
    )
}

export default Blog