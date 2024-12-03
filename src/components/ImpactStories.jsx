import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aibg from "../assets/aibg.jpg";

const ImpactStoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = 5000; // 5 seconds

  const stories = [
    {
      name: "Sumit Sable",
      institute:
        "Padmabhooshan Vasantdada Patil Institute of Technology CU Maharashtra",
      description:
        "Sumit belongs to a family of farmers, and he is the first one to move out to a big...",
      image: aibg,
    },
    {
      name: "Samyakta Patil",
      institute: "Lokmanya Tilak College of Engineering CU Maharashtra",
      description:
        "Samyakta belongs to a family of engineers, hence it became her natural choice...",
      image: aibg,
    },
    {
      name: "Mann Pandya",
      institute: "Sardar Vallabhbhai Patel Institute of Technology CU Gujarat",
      description:
        "Mann's decision to pursue engineering was heavily influenced by his father's passion...",
      image: aibg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [stories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-5xl mx-auto px-2 py-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">
        Impact Stories
      </h1>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {stories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {stories.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded shadow-md overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-blue-500 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                          {item.institute}
                        </p>
                        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-1.5 text-sm rounded hover:bg-blue-600 transition-colors">
                          READ MORE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-blue-500" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-blue-500" />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors text-sm font-semibold">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default ImpactStoriesCarousel;
