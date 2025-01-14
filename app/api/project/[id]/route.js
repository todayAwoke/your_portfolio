import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// GET: Fetch a project by ID
export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const project = await Project.findById(id);
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }
        return NextResponse.json(project, { status: 200 });
    } catch (error) {
        console.error("Error fetching project details:", error);
        return NextResponse.json({ error: "Failed to fetch project details" }, { status: 500 });
    }
}

// PUT: Update a project by ID
export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { name, website, description } = await request.json();
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

export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting project:", error);
        return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
    }
}
