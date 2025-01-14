import { hash } from "bcryptjs"; // Import bcrypt for hashing
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { username, password } = await req.json();

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "Username already exists!",
            });
        }

        // Hash the password before saving to the database
        const hashedPassword = await hash(password, 12);

        // Create a new user
        const newUser = await User.create({
            username,
            password: hashedPassword,
        });

        return NextResponse.json({
            success: true,
            message: "User created successfully!",
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again.",
        });
    }
}