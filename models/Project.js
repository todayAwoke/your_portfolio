import mongoose, { Schema } from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        name: String,
        website: String,
        description: String,
        file: String,
    },
    { timestamps: true }
);

const Project =
    mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
