import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySlider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/gallery/`);
        setImages(res.data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, [API_URL]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      </section>
    );
  }

  if (images.length === 0) return null;

  return (
    <section id="gallery" className="py-20 md:py-32 bg-dark-default text-warm-light relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary-400">Галерея страв</h2>
          <p className="text-gray-400 text-lg">
            Пориньте в атмосферу Cezar. Кожна наша страва – це витвір мистецтва, 
            створений з любов'ю та натхненням.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4 shrink-0">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="w-full pl-4 lg:pl-8">
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((item, index) => (
            <div 
              key={item.id} 
              className="relative shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] aspect-[4/3] snap-center md:snap-start rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.caption || `Галерея ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium text-lg text-shadow-sm">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
          {/* Spacer for right padding in scroll */}
          <div className="shrink-0 w-4 lg:w-8"></div>
        </div>
      </div>
      
      {/* Add custom CSS to hide scrollbar for webkit browsers */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
};

export default GallerySlider;
