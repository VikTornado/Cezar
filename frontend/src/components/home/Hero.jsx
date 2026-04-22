import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop')",
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-warm-light text-shadow-sm">
            Смак, який <br /> об'єднує сім'ї.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl text-shadow-sm">
            Найкращі страви з вогню, домашні супи та легендарні піци від родини Cezar.
            Дозвольте нам подбати про ваш ідеальний обід або корпоративне свято.
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
