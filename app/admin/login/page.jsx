"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
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
            const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (res.ok) {
                router.push("/admin/adduser");
            } else {
                alert(data.message || "Login failed. Please try again.");
            }

        } catch (error) {
            console.log(error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="pt-28 px-14 text-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-10">
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
                    className="bg-blue-600 font-bold rounded-2xl text-white py-3 px-6 w-fit"
                >
                    Login
                </button>
            </form>
        </div>
    );
}