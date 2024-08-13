import React, { useState } from "react";

const ServicesCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[40rem] md:h-[20rem] sm:h-[30rem] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-[4em] transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50 rounded-full"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-[4em] transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ServicesCarousel;
