import { useRouter } from "next/router";

const getProjectById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/project/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch project details");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading project details: ", error);
        return null;
    }
};

export default async function ProjectDetails() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) return <div>Loading...</div>;

    const project = await getProjectById(id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="mt-4">{project.description}</p>
            <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
            >
                Visit Website
            </a>
            <a
                href={project.file}
                download
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-900 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-all duration-200"
            >
                Download File
            </a>
        </div>
    );
}
