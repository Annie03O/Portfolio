"use client"
import { useRouter } from "next/navigation";
import FFStart from "../../../public/FF_start.png";
import ProjectSymbol from "../ui/ProjectSymbol";
import { projects } from "@/app/models/objects/projects";
export default function ProjectsPreview() {

    return (
        <section className="relative flex flex-col items-center justify-center w-full h-full text-white">
            <h2 className="text-3xl mb-6">My Projects</h2>
            <p className="text-lg text-gray-600 mb-4">Here are some of my recent projects. Click to see more!</p>
            <section className="relative flex flex-col lg:flex-row justify-center items-center w-fit gap-6">
                {projects.map((project, index) => (
                    <ProjectSymbol id={project.id} key={index} title={project.title} imageSrc={project.thumbnail} />
                ))}
            </section>
        </section>
    );
}   