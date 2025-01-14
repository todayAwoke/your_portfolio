"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Username and password are required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            console.log(res);

            if (res.ok) {
                router.push("/"); // Redirect after successful user creation
            } else {
                throw new Error("Failed to create user");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="pt-28 px-14 text-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-10 ">
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="border w-1/2 border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Username"
                />

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="border border-slate-500 px-8 py-2"
                    type="password"
                    placeholder="Password"
                />

                <button
                    type="submit"
                    className="bg-green-600 font-bold rounded-2xl text-white py-3 px-6 w-fit"
                >
                    Add User
                </button>
            </form>
        </div>
    );
}