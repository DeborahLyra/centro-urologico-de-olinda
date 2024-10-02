import React, { useState, useEffect } from "react";
import logo1 from "/public/imgs/centro-uro-1.jpeg";
import logo2 from "/public/imgs/funcionarios.png";
import allDocs from "/public/imgs/medicos.png";

const images = [logo1, allDocs, logo2];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getBackgroundPosition = () => {
    // Se for a terceira imagem (índice 2), aplica bg-bottom para telas médias e grandes
    return currentIndex === 2 ? "md:bg-top lg:bg-top" : "";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext(); 
    }, 5000);

    return () => clearInterval(interval); 
  }, [currentIndex]);


  return (
    <div className="max-w-full h-64 relative group md:h-84 lg:h-96">
      {/* Imagem */}
      <div
        className={`w-full h-full bg-contain bg-center transition-all duration-500 ease-in-out bg-no-repeat md:bg-cover lg:bg-cover ${getBackgroundPosition()}`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Botão para voltar */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white p-2 rounded-full lg:hover:bg-blue-800 transition"
      >
        ❮
      </button>

      {/* Botão para avançar */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white p-2 rounded-full lg:hover:bg-blue-800 transition"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-primary" : "bg-blue-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
