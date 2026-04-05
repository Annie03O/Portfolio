"use client"    
import Image from "next/image";
import BannerImg from "../../../public/Annie_Olofsson.png";
import { useRouter } from "next/navigation";

export default function Banner() {
    const nav = useRouter();
    return (
        <section className="block w-[80%] object-[80%] relative">
        <Image src={BannerImg} alt="Annie Olofsson"  className="object-fit "/>
        <section className="flex-col absolute top-1/2 left-2/3 transform -translate-x-1/20-translate-y-1/2 ">
          <section className="text-center bg-white  bg-opacity-75 p-4 rounded-lg">
              <h1 className="text-4xl font-semibold">
                  Annie Olofsson
              </h1>
              <h3 className="text-2xl font-medium text-gray-600">
                  Frontend Developer / Web Designer
              </h3>
          </section>
          <section className="flex justify-center items-center w-full mt-4 ">
             <button onClick={() => nav.push("Portfolio/About_Me")} 
                className="left-0 top-0 text-center bg-blue-500 shadow-blue-500/50 
                   hover:bg-blue-300 text-white shadow-xl bg-opacity-75 p-4 rounded-lg
                "
              >
                Get to know me
              </button>
          </section>
        </section>
        </section>
      );
    }