"use client";

import { faX, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type GalleryProps = {
  images: string[];
  title: string;
};

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const goNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goPrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="flex items-center justify-center w-[90%]">
      {/* thumbnails */}
      <section className="flex flex-col items-center justify-center w-full h-full text-white">
        <h1 className="text-3xl mb-4">Gallery</h1>
        <section className={`flex flex-wrap md:gap-4 w-full mb-4 items-center justify-center  ${images.length > 3 ? "md:h-[275px]" : ""} max-w-[700px] bg-gray-200 md:p-4 rounded-md min-h-[100px] max-h-[275px] overflow-scroll  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-00 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`} >
          <section className={`relative ${images.length > 3 ? "" : "top-2"}  w-full grid grid-cols-2 min-[481px]:grid-cols-3 p-2 md:p-0 gap-1 md:gap-7`}>
            {images.map((image, index) => (
              <section
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="cursor-pointer rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300 border-gray-400"
              >
                <img
                  className="w-[200px] opacity-80 hover:opacity-100 transition-opacity duration-300 h-[100px] object-cover"
                  src={image}
                  alt={`${title} image ${index + 1}`}
                />
              </section>
            ))}
          </section>
      </section>
      </section>

      {/* modal */}
      {currentIndex !== null && (
        <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">

          {/* overlay */}
          <div
            onClick={() => setCurrentIndex(null)}
            className="absolute bg-black opacity-50 w-full h-full"
          />

          {/* close */}
          <button onClick={() => setCurrentIndex(null)} >
            <FontAwesomeIcon
              icon={faX}
              className="absolute top-4 right-4 text-white hover:text-gray-500 text-3xl z-50 cursor-pointer"
            />
          </button>

          {/* left arrow */}
          <button onClick={goPrev} className="absolute bg-gray-500  md:bg-transparent rounded-lg left-6 z-50 p-1 md:p-0">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-white hover:text-gray-500 md:text-4xl cursor-pointer"
            />
          </button>

          {/* right arrow */}
          <button onClick={goNext} className="absolute bg-gray-500 md:bg-transparent rounded-lg right-6 z-50 p-1 md:p-0">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white hover:text-gray-500 md:text-4xl cursor-pointer"
            />
          </button>

          {/* image */}
          <section className="relative flex items-center justify-center w-full h-full">
            <img
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              src={images[currentIndex]}
              alt={`${title} image`}
            />
          </section>
        </section>
      )}
    </section>
  );
};

export default Gallery;