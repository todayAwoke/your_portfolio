"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Function to update a project via API
const updateProject = async (id, updatedData) => {
    try {
        const res = await fetch(`http://localhost:3000/api/project/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });

        if (res.ok) {
            alert("Project updated successfully");
        } else {
            alert("Failed to update project");
        }
    } catch (error) {
        console.error("Error updating project:", error);
        alert("An error occurred while updating the project");
    }
};

export default function UpdateProject({ id }) {
    const router = useRouter();
    const [project, setProject] = useState(null);
    const [formData, setFormData] = useState({ name: "", description: "", website: "" });

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/project/${id}`);
                const data = await res.json();
                setProject(data);
                setFormData({ name: data.name, description: data.description, website: data.website });
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };

        if (id) fetchProject();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProject(id, formData);
        router.push("/"); // Navigate back to the main page
    };

    if (!project) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Update Project</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium">Website</label>
                    <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400"
                >
                    Update
                </button>
            </form>
        </div>
    );
}
