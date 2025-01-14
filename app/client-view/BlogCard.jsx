import { useState } from "react";
const getBlog = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/project", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch projects");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading projects: ", error);
        return { projects: [] };
    }
};

export default async function BlogList() {
    const { projects } = await getBlog();

    if (!projects || projects.length === 0) {
        return <div>No projects available</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-lg">
            {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </div>
    );
}

function ProjectCard({ project }) {
    const [isFullDescription, setIsFullDescription] = useState(false);

    const toggleDescription = () => {
        setIsFullDescription(!isFullDescription);
    };

    return (
        <div className="bg-indigo-950 rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 ">
            <div  >
                <h3 className="text-xl font-semibold text-white truncate">{project.name}</h3>
                <div className="mt-2">
                    <p
                        className={`text-white mt-2 ${!isFullDescription ? "line-clamp-3" : ""}`}
                    >
                        {project.description}
                    </p>

                    <button
                        onClick={toggleDescription}
                        className="bg-blue-500 px-3 mt-4 py-2 rounded-xl text-white hover:underline text-sm"
                    >
                        {isFullDescription ? "Show Less" : "View More"}
                    </button>
                </div>

            </div>

            <div className="mt-auto flex justify-end">
                {project.website && (
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-sm"
                    >
                        Visit Website
                    </a>
                )}
            </div>
        </div>
    );
}
