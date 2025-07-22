// components/ImageSlider.js
import React, { useState, useEffect } from 'react';

const images = [
  '/pictures/banner1.jpg',
  '/pictures/banner2.png',
  '/pictures/banner3.jpg',
  '/pictures/banner1.jpg',
  '/pictures/banner1.jpg',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[300px] overflow-hidden relative top-[90px]">
      <img
        src={images[currentIndex]} 
        alt="slider" 
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />
    </div>
  );
}
