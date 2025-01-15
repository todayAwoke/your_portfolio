"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog() {
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !description || !website) {
            alert("All fields are required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/project", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, website, description, file }),
            });

            if (res.ok) {
                setSuccessMessage("Project created successfully!");
                setTimeout(() => {
                    router.push("/admin");
                }, 2000);
            } else {
                throw new Error("Failed to create project");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error creating project.");
        }
    };
    return (
        <div className="pt-28 px-14  text-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-10">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="border w-1/2 border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Project Name"
                />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="border border-slate-500 px-8 py-2 w-1/2"
                    placeholder="Project Description"
                    rows="4"
                />
                <input
                    onChange={(e) => setWebsite(e.target.value)}
                    value={website}
                    className="border w-1/2 border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Project Website"
                />
                <button
                    type="submit"
                    className="bg-blue-600 font-bold rounded-2xl text-white py-3 px-6 w-fit">
                    Add Blog
                </button>
            </form>
            {successMessage && (
                <div className="mt-4 text-green-500 font-semibold">{successMessage}</div>
            )}
        </div>
    );
}
