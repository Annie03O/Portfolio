"use client"
import { useRouter } from "next/navigation";
import FFStart from "../../../public/FF_start.png";
import ProjectSymbol from "../ui/ProjectSymbol";
import { projects } from "@/app/models/objects/projects";
export default function ProjectsPreview() {

    return (
        <section className="relative flex flex-col items-center justify-center w-full h-full text-white mt-6"> 
            <h2 className="text-3xl mb-6">My Projects</h2>
            <p className="text-lg text-gray-300 mb-4 w-[90%] text-center">Here are some of my recent projects. Click to see more!</p>
            <section className="flex flex-col md:flex-row justify-center items-center flex-wrap  px-4 gap-6">
              {projects.map((project) => (
                <ProjectSymbol
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  imageSrc={project.thumbnail}
                />
              ))}
            </section>
                    </section>
    );
}   