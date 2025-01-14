import { useEffect, useState } from 'react';
import SectionHeading from '@/components/helper/SectionHeading';
import BlogCard from '@/app/client-view/BlogCard';
// Define the type for blog post


const Blog = () => {
    useEffect(() => {


        // fetchPosts();
    }, []);

    return (
        <div className='pt-28 pb-16 bg-gray-800' id='blogs'>
            <SectionHeading>My Blogs</SectionHeading>
            {/* <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'> */}
             <BlogCard/> 
                {/* <BlogList/> */}
            </div>
        // </div>
    );
};

export default Blog;