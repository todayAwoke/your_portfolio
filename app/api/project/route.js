export const dynamic = "force-static";

import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// POST: Create a new project
export async function POST(request) {
    try {
        const { name, website, description, file } = await request.json();
        await connectMongoDB();
        await Project.create({ name, website, description, file });
        return NextResponse.json({ message: "Project Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating project:", error);
        return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }
}

// GET: Get all projects
export async function GET() {
    try {
        await connectMongoDB();
        const projects = await Project.find();
        return NextResponse.json({ projects });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}

// GET by ID: Get project details by ID (for dynamic routes)
export async function GET_BY_ID(request, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const project = await Project.findById(id); // Fetch by ID
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        return NextResponse.json(project, { status: 200 });
    } catch (error) {
        console.error("Error fetching project details:", error);
        return NextResponse.json({ error: "Failed to fetch project details" }, { status: 500 });
    }
}

// DELETE: Delete project by ID
export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const project = await Project.findByIdAndDelete(id); // Delete project by ID
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting project:", error);
        return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
    }
}

// PUT: Update project by ID
export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { name, website, description, file } = await request.json();
        await connectMongoDB();
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            { name, website, description, file },
            { new: true } // Return the updated document
        );
        if (!updatedProject) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }
        return NextResponse.json(updatedProject, { status: 200 });
    } catch (error) {
        console.error("Error updating project:", error);
        return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
    }
}
