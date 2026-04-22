import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GlassWater, CalendarClock, Users } from 'lucide-react';

const CorporateEvents = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/corporate/`);
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching corporate services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [API_URL]);

  return (
    <section id="corporate" className="py-20 md:py-32 bg-primary-50 relative overflow-hidden">
      
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 z-0"></div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex justify-center items-center p-3 bg-white rounded-full text-primary-600 shadow-sm mb-6">
            <GlassWater size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-default mb-6">
            Ми організовуємо корпоративи
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Сімейні свята, корпоративні заходи або масштабні вечірки — команда Cezar готова 
            взяти на себе турботу про ваш стіл. Ми гарантуємо преміальну якість страв та високий рівень сервісу.
          </p>
        </div>

        {/* Highlight features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 flex items-start gap-4">
            <div className="bg-primary-50 p-3 rounded-lg text-primary-600 shrink-0">
              <Users size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-dark-default">Будь-який формат</h4>
              <p className="text-gray-600 text-sm">Фуршети, банкети або індивідуальні порції для великих колективів.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 flex items-start gap-4">
            <div className="bg-primary-50 p-3 rounded-lg text-primary-600 shrink-0">
              <CalendarClock size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-dark-default">Пунктуальність</h4>
              <p className="text-gray-600 text-sm">Ми привозимо гарячі страви точно в обумовлений час.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Services from backend */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col group border border-white">
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold font-serif text-dark-default mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                    {service.description}
                  </p>
                  <a href="#contacts" className="text-primary-600 font-bold hover:text-primary-800 transition-colors inline-flex items-center gap-1 mt-auto">
                    Замовити прорахунок <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : null}

      </div>
    </section>
  );
};

export default CorporateEvents;
