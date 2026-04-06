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
    <section>
      {/* thumbnails */}
      <section className="flex flex-col items-center justify-center w-full h-full text-white">
        <h1 className="text-2xl mb-4">Gallery</h1>
        <section className="grid grid-cols-3 gap-4 mb-4 w-[auto] ">
        {images.map((image, index) => (
          <section
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="cursor-pointer"
          >
            <img
              className="w-[200px]"
              src={image}
              alt={`${title} image ${index + 1}`}
            />
          </section>
        ))}
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
          <button onClick={() => setCurrentIndex(null)}>
            <FontAwesomeIcon
              icon={faX}
              className="absolute top-4 right-4 text-white text-3xl z-50 cursor-pointer"
            />
          </button>

          {/* left arrow */}
          <button onClick={goPrev} className="absolute left-6 z-50">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-white text-4xl cursor-pointer"
            />
          </button>

          {/* right arrow */}
          <button onClick={goNext} className="absolute right-6 z-50">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white text-4xl cursor-pointer"
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