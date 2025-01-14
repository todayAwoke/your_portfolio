import Image from 'next/image';
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const getBlog = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/project", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch projects");
        }

        return res.json(); // This should return { projects: Project[] }
    } catch (error) {
        console.log("Error loading projects: ", error);
        return { projects: [] }; // Default return to avoid issues
    }
};

const BlogCard = async () => {
    const { projects } = await getBlog();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="bg-indigo-950 p-8 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((t) => (
                <div key={t._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <p className="text-xl font-semibold text-indigo-800">{t.name}</p>
                    <div className="mt-4">
                        <div className="flex flex-col items-start">
                            <p className="text-sm font-semibold text-gray-600">{t.name}</p>
                            {isOpen && <p className="mt-2 text-gray-700 text-base">{t.description}</p>}
                            <button
                                type="button"
                                onClick={toggleDetails}
                                className="transition-all duration-200 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white mt-3 px-4 py-2"
                            >
                                {isOpen ? 'Read Less' : 'Read More'}
                            </button>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <a href={t.file} target="_blank" rel="noopener noreferrer">
                                <button
                                    type="button"
                                    className="text-white font-semibold text-sm m-2 p-3 transition-all duration-200 rounded-lg bg-indigo-700 hover:bg-indigo-600 flex items-center space-x-2"
                                >
                                    <span className="hidden sm:block">Download File</span>
                                    <FaDownload />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCard;
