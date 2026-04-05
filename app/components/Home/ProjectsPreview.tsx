"use client"
import { useRouter } from "next/navigation";

export default function ProjectsPreview() {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full text-white">
            <h2 className="text-3xl mb-6">My Projects</h2>
            <p className="text-lg text-gray-600 mb-4">Here are some of my recent projects. Click to see more!</p>
            <section></section>
        </section>
    );
}   