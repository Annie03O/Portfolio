"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectSymbolProps {
  title: string;
  imageSrc: string;
  id: string;
}

const ProjectSymbol: React.FC<ProjectSymbolProps> = ({ title, imageSrc, id }) => {
  const nav = useRouter();

  return (
    <section
      onClick={() => nav.push(`/projects/${id}`)}
      className="relative flex justify-center items-center w-[450px] h-[250px] rounded-lg shadow-lg mb-3 cursor-pointer"
    >
      <section className="relative bg-blue-500 w-[400px] h-[250px] border flex flex-col items-center rounded-lg" />

      <section className="absolute flex bg-white right-8 border border-black bottom-2 w-[400px] h-[230px] overflow-hidden rounded-lg text-white justify-center items-center">
        <Image
          width={375}
          height={250}
          src={imageSrc}
          alt={`${title} Preview`}
          className="object-cover rounded-lg shadow-lg blur-xs"
        />
        <h2 className="absolute text-3xl">{title}</h2>
      </section>

      <section className="absolute flex bg-blue-500 right-10 border bottom-0 w-[400px] h-[230px] overflow-hidden rounded-lg text-white justify-center items-center">
        <Image
          width={375}
          height={250}
          src={imageSrc}
          alt={`${title} Preview`}
          className="object-cover rounded-lg shadow-lg blur-xs"
        />
        <h2 className="absolute text-3xl">{title}</h2>
      </section>
    </section>
  );
};

export default ProjectSymbol;