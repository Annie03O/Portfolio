"use client"    
import Image from "next/image";
import BannerImg from "../../../public/Annie_Olofsson.png";
import { useRouter } from "next/navigation";
export default function Banner() {
  const nav = useRouter();

  return (
    <section className="relative w-full block md:w-[80%]">
      <Image
        src={BannerImg}
        alt="Annie Olofsson"
        className="hidden md:block w-full h-auto object-cover"
        priority
      />

      <section className="hidden md:block absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <section className="flex md:flex-col text-center bg-white p-4 rounded-lg">
          <h1 className="text-4xl font-semibold">Annie Olofsson</h1>
          <h3 className="text-2xl font-medium text-gray-600">
            Frontend Developer / Web Designer
          </h3>
        </section>

        <section className="flex justify-center items-center w-full mt-4">
          <button
            onClick={() => nav.push("/About_Me")}
            className="text-center bg-blue-500 hover:bg-blue-300 text-white shadow-xl p-4 rounded-lg"
          >
            Get to know me
          </button>
        </section>
      </section>
      <section className="relative flex flex-col md:flex-row bg-white md:hidden w-full">
        <section className="flex flex-col   p-4 ">
          <h1 className="text-3xl font-semibold whitespace-nowrap">Annie Olofsson</h1>
          <h3 className="text-2xl font-medium text-gray-600 md:whitespace-nowrap">
            Frontend Developer / Web Designer
          </h3>
        </section>

        <section className="relative right-5 flex justify-end items-center w-full mt-4 bottom-2">
          <button
            onClick={() => nav.push("Portfolio/About_Me")}
            className="text-center bg-blue-500 hover:bg-blue-300 text-white shadow-xl p-4 rounded-lg "
          >
            Get to know me
          </button>
        </section>
      </section>
    </section>
  );
}