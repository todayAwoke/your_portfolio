import { useEffect, useState } from 'react';
import SectionHeading from '@/components/helper/SectionHeading';
import BlogCard from './BlogCard';

// Define the type for blog post
interface BlogPost {
    title: string;
    summary: string;
    detail: string;
    date: string;
    image: string;
}

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyn5Y67_Hf885vhAhfo31wpTJS3ThrOBdBOgqGYucXDlEzRZjnyl582g0Jr4tn3uQFhhg/exec');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div className='text-white text-center'>Loading...</div>;
    }

    if (error) {
        return <div className='text-red-500 text-center'>Error: {error}</div>;
    }

    return (
        <div className='pt-28 pb-16 bg-gray-800' id='blogs'>
            <SectionHeading>My Blogs</SectionHeading>
            <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
                {posts.map((post, index) => (
                    <div key={index}>
                        {/* Blog card */}
                        <BlogCard blog={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;