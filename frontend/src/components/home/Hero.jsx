import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/hero/`);
        if (res.data && res.data.length > 0) {
          setHeroData(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchHero();
  }, [API_URL]);

  const defaultImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop";
  const bgImage = heroData?.image || defaultImage;
  const title = heroData?.title || "Смак, який об'єднує сім'ї.";
  const subtitle = heroData?.subtitle || "Найкращі страви з вогню, домашні супи та легендарні піци від родини Cezar. Дозвольте нам подбати про ваш ідеальний обід або корпоративне свято.";

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-dark/90 via-dark-default/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-white">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-600/20 border border-primary-500/50 text-primary-200 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm uppercase">
            Сімейна справа з Ужгорода
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-warm-light text-shadow-sm whitespace-pre-line">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl text-shadow-sm">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="btn-primary flex items-center justify-center gap-2 group text-lg">
              Переглянути меню
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacts" className="btn-secondary !text-white !border-white hover:!bg-white/10 flex items-center justify-center text-lg backdrop-blur-sm">
              Зробити замовлення
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
