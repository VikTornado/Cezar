import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuSection = () => {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/categories/`);
        setCategories(res.data);
        if (res.data.length > 0) {
          setActiveCategory(res.data[0].slug);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, [API_URL]);

  useEffect(() => {
    const fetchDishes = async () => {
      if (!activeCategory) return;
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/api/dishes/?category=${activeCategory}`);
        setDishes(res.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDishes();
  }, [activeCategory, API_URL]);

  return (
    <section id="menu" className="py-20 md:py-32 bg-warm-light relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-default mb-4">Наше Меню</h2>
          <p className="text-gray-600 text-lg">
            Обирайте серед наших найкращих страв. Усе готується з найсвіжіших інгредієнтів 
            та за традиційними родинними рецептами.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-6 py-2.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-sm
                ${activeCategory === cat.slug 
                  ? 'bg-primary-600 text-white shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-primary-50 border border-gray-100 hover:text-primary-700'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : dishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 flex flex-col group">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  {dish.main_image ? (
                    <img 
                      src={dish.main_image} 
                      alt={dish.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Немає фото
                    </div>
                  )}
                  {dish.is_popular && (
                    <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Популярне
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-bold font-serif text-dark-default leading-tight">
                      {dish.title}
                    </h3>
                    {dish.price && (
                      <span className="text-primary-700 font-bold whitespace-nowrap bg-primary-50 px-2 py-1 rounded">
                        {dish.price} ₴
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                    {dish.description}
                  </p>
                  <button className="w-full py-2.5 rounded border border-primary-200 text-primary-600 font-medium hover:bg-primary-50 transition-colors mt-auto">
                    Детальніше
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 bg-white rounded-2xl shadow-sm border border-gray-100">
            Для цієї категорії ще не додано страв.
          </div>
        )}

      </div>
    </section>
  );
};

export default MenuSection;
