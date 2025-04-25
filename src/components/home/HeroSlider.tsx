import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSlideProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ image, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full">
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8">{subtitle}</p>
          <Link href={buttonLink} className="bg-[#E63946] text-white px-6 py-3 rounded-md hover:bg-[#c5303b] transition-colors inline-block">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

interface HeroSliderProps {
  slides: HeroSlideProps[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            <HeroSlide {...slide} />
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
        onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
        onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;
