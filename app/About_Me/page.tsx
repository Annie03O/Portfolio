import Image from "next/image";
import Banner from "../../public/Annie_Olofsson.png";

export default function Page() {  
  return (
    <section className="flex justify-center w-full px-4">
   
      <div className="max-w-7xl w-full bg-white p-8 border-t border-black shadow-md">
        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-8 r">
          {/* Bild */}
          <div className="w-full max-w-sm aspect-[2/3] relative overflow-hidden rounded-xl">
            <Image
              src={Banner}
              alt="Annie Olofsson"
              fill
              className="object-cover object-[0%_20%]"
            />
          </div>
          <div>
            <section className="flex flex-col items-start gap-2">
                <h1 className="text-4xl font-semibold">
                    Annie Olofsson
                </h1>
                <h3 className="text-2xl font-medium text-gray-600">
                    Frontend Developer
                </h3>
            </section>
                <section className="mt-4 text-gray-700">
                    <h2 className="text-3xl font-semibold">About me</h2>
                    I am a passionate frontend developer with experience in building responsive and user-friendly web applications. I enjoy creating seamless user experiences and bringing designs to life using modern web technologies.
                </section>
                <section className="flex flex-col mt-4 text-gray-700 gap-2">
                    <h2 className="text-3xl font-semibold">Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>HTML, CSS, JavaScript</li>
                        <li>React, Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Version Control (Git)</li>
                        <li>PHP</li>
                        <li>UX</li>
                    </ul>
                </section>
                 <section className="flex  gap-2">   
                    <section className="flex flex-col mt-4 text-gray-700 gap-2">
                        <h2 className="text-3xl font-semibold">Experience</h2>
                        <ul className="list-disc list-inside">
                            <li>Knitted For You (2026 - Present)</li>
                            <li>Tegel Consulting (2025)
                            </li>
                        </ul>
                    </section>
                    <section className="flex flex-col mt-4 text-gray-700 gap-2 ">
                        <h2 className="text-3xl font-semibold">Education</h2>
                        <ul className="list-disc list-inside">
                            <li>Medieinstitutet – Frontend Developer (2024 - Present)</li>
                            <li>Rudbecks Gymnasium – Samhällvetenskapsprogrammet (2019-2023)</li>
                        </ul>
                    </section>
                </section>
          </div>
        </div>
      </div>
    </section>
  );
};