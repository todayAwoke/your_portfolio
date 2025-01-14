"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogList from "./BlogList";

const initialLoginFormData = {
    username: "",
    password: "",
};

const Page = () => {
    const [authUser, setAuthUser] = useState(false);
    const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

    useEffect(() => {
        const storedAuth = JSON.parse(sessionStorage.getItem("authUser"));
        setAuthUser(storedAuth);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        const { username, password } = loginFormData;
        if (username === "awoke" && password === "12345") {
            setAuthUser(true);
            sessionStorage.setItem("authUser", JSON.stringify(true));
        } else {
            alert("Invalid username or password.");
        }
    };

    const handleLogout = () => {
        setAuthUser(false);
        sessionStorage.removeItem("authUser");
    };

    if (!authUser) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <div className="bg-white p-6 rounded shadow-md w-80">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={loginFormData.username}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginFormData.password}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <button
                        onClick={handleLogin}
                        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
                <Link className="text-white font-bold" href={"/admin"}>
                    Tarekeng
                </Link>
                <Link
                    className="bg-white text-slate-800 font-medium py-2 px-4 rounded shadow hover:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-300 transition-all"
                    href={"/admin/addBlog"}
                >
                    Add Blog
                </Link>
                <button
                    onClick={handleLogout}
                    className="p-4 text-xl text-white"
                >
                    Logout
                </button>
            </nav>
            <div className="flex justify-between">
                <div>
                    <BlogList />
                </div>
            </div>
        </div>
    );
};

export default Page;
