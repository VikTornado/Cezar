import React from 'react';
import { Utensils, Flame, Heart } from 'lucide-react';

const FamilyStory = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-warm-default">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">
              <Heart size={18} />
              <span>Про нас</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-default leading-tight">
              Справжня родинна справа з душею
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cezar — це не просто ресторан, це наша родина, яка щодня запрошує вас до себе в гості. Ми вкладаємо тепло та любов у кожну страву, щоб ви відчували себе як вдома.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                <Flame className="text-primary-500 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Батько за мангалом</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Готує неперевершені страви на відкритому вогні — соковиті м'ясні шедеври та гриль, що тане в роті.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                <Utensils className="text-primary-500 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Мамині рецепти</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Створює домашній затишок у тарілці: супи, салати, ніжний банош, плов та ідеальні комплексні обіди.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-gray-200">
              <p className="text-gray-700 italic font-medium">
                "А наша донька зустрічає кожного гостя з щирою усмішкою, створюючи ту саму неповторну атмосферу гостинності Cezar."
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary-200 rounded-2xl transform translate-x-4 -translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" 
              alt="Родина за столом" 
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary-50 p-4 rounded-full text-primary-600">
                  <Utensils size={32} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark-default">10+</div>
                  <div className="text-gray-500 font-medium text-sm">Років досвіду</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FamilyStory;
