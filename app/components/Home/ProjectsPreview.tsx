"use client"
import { useRouter } from "next/navigation";
import FFStart from "../../../public/FF_start.png";
import Image from "next/image";
export default function ProjectsPreview() {
    return (
        <section className="relative flex flex-col items-center justify-center w-full h-full text-white">
            <h2 className="text-3xl mb-6">My Projects</h2>
            <p className="text-lg text-gray-600 mb-4">Here are some of my recent projects. Click to see more!</p>
            <section className="relative flex justify-center items-center w-fit">
                <section className="relative flex flex-col items-center  w-[40%] bg-white text-black rounded-lg shadow-lg cursor-pointer bg-linear-to-bl from-violet-500 to-fuchsia-500">
                  <section className=" w-">
                   <span className="absolute bg-white w-full py-4 rounded-t-lg text-center text-4xl">Fanatic Fandom</span>
                   <Image src={FFStart} alt="Project Preview" className="object-cover rounded-lg shadow-lg cursor-pointer" />
                  </section>
                </section>
            </section>
        </section>
    );
}   