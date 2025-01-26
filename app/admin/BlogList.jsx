import RemoveBtn from "./RemoveBtn";
import { useState, useEffect } from "react";
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
const deleteProject = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/project/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            alert("Project deleted successfully");
        } else {
            alert("Failed to delete project");
        }
    } catch (error) {
        console.error("Error deleting project:", error);
        alert("An error occurred while deleting the project");
    }
};

export default function BlogList() {
    const [projects, setProjects] = useState([]);

    // Fetch projects when the component mounts
    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getBlog();
            setProjects(data.projects);
        };
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        await deleteProject(id);
        setProjects(projects.filter((project) => project._id !== id)); // Remove project from state
    };
    if (!projects || projects.length === 0) {
        return <div>No projects available</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((t) => (
                    <div
                        key={t._id}
                        className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t.name}</h3>
                            <p className="text-sm text-gray-600 mb-4">{t.description}</p>
                            <a
                                href={t.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-sm"
                            >
                                {t.website}
                            </a>
                        </div>

                        <div className="flex justify-between items-center mt-4">

                            <button
                                onClick={() => handleDelete(t._id)}
                                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-400 transition-all"
                            >
                                <RemoveBtn size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
