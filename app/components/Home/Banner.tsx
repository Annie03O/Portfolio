"use client"    
import Image from "next/image";
import BannerImg from "../../../public/Annie_Olofsson.png";
import { useRouter } from "next/navigation";
export default function Banner() {
  const nav = useRouter();

  return (
    <section className="relative block w-[80%]">
      <Image
        src={BannerImg}
        alt="Annie Olofsson"
        className="w-full h-auto object-cover"
        priority
      />

      <section className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <section className="text-center bg-white p-4 rounded-lg">
          <h1 className="text-4xl font-semibold">Annie Olofsson</h1>
          <h3 className="text-2xl font-medium text-gray-600">
            Frontend Developer / Web Designer
          </h3>
        </section>

        <section className="flex justify-center items-center w-full mt-4">
          <button
            onClick={() => nav.push("/Portfolio/About_Me")}
            className="text-center bg-blue-500 hover:bg-blue-300 text-white shadow-xl p-4 rounded-lg"
          >
            Get to know me
          </button>
        </section>
      </section>
    </section>
  );
}