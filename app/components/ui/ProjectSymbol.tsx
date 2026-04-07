
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
      className="relative w-[250px] h-[170px] md:w-[400px] md:h-[230px] cursor-pointer"
    >
      {/* Bakre lager */}
      <section className="absolute inset-0 rounded-lg border bg-blue-500" />

      {/* Mittenlager */}
      <section className="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-2 overflow-hidden rounded-lg border border-black bg-white flex items-center justify-center">
        <Image
          fill
          src={imageSrc}
          alt={`${title} Preview`}
          className="object-cover rounded-lg blur-xs"
        />
        <h2 className="absolute px-2 text-center text-xl md:text-3xl text-white">
          {title}
        </h2>
      </section>

      {/* Främre lager */}
      <section className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-5 md:translate-y-3 overflow-hidden rounded-lg border border-black bg-blue-500 flex items-center justify-center">
        <Image
          fill
          src={imageSrc}
          alt={`${title} Preview`}
          className="object-cover rounded-lg blur-xs"
        />
        <h2 className="absolute px-2 text-center text-xl md:text-3xl text-white">
          {title}
        </h2>
      </section>
    </section>
  );
};

export default ProjectSymbol;