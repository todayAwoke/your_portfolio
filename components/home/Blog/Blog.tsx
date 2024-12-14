import { blogs } from '@/app/Data/data'
import SectionHeading from '@/components/helper/SectionHeading'
import React ,{useEffect,useState} from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyn5Y67_Hf885vhAhfo31wpTJS3ThrOBdBOgqGYucXDlEzRZjnyl582g0Jr4tn3uQFhhg/exec');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data.data);
            } catch (err:any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className='pt-28 pb-16 bg-gray-800' id='blogs' >
            <SectionHeading>My Blogs</SectionHeading>
            <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
{posts.map((post,index)=>{
    return <div key={index}>
        {/* blog card */}
        <BlogCard blog={post} />
    </div>
}

)}
            </div>
        </div>
    )
}

export default Blog