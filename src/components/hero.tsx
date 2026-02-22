import { useEffect, useState } from "react";
import bg from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/3.jpeg"


const images = [bg, bg2, bg3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt="school"
        className="absolute w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ruhuwiko Secondary School
        </h2>

        <p className="text-lg md:text-xl">
          Education, Work and Defence
        </p>
      </div>
    </div>
  );
};

export default Hero;