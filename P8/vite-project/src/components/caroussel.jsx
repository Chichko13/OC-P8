import React, { useState } from "react";

function Carrousel({ slides, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextImage = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="house__carrousel--container">
      <img
        className="house__carrousel"
        src={slides[currentIndex]}
        alt={title}
        loading="eager"
      />
      {slides.length > 1 && (
        //affiche les flèches si plus d'une img est présente
        <>
          <svg
            onClick={previousImage}
            className="arrow__left"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
          <svg
            onClick={nextImage}
            className="arrow__right"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </>
      )}
      <span className="house__carrousel--counter">
        {currentIndex + 1}/{slides.length}
      </span>
    </div>
  );
}

export default Carrousel;
