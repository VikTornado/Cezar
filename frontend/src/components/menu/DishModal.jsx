import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const DishModal = ({ dish, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (dish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [dish]);

  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-primary-600 transition-colors shadow-sm"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative shrink-0">
          {dish.main_image ? (
            <img 
              src={dish.main_image} 
              alt={dish.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Немає фото
            </div>
          )}
          {dish.is_popular && (
            <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Популярне
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-serif font-bold text-dark-default mb-2 pr-10">
              {dish.title}
            </h2>
            {dish.price && (
              <span className="text-2xl text-primary-700 font-bold">
                {dish.price} ₴
              </span>
            )}
          </div>

          <div className="prose prose-sm sm:prose-base prose-gray mb-8">
            <p className="text-gray-600 leading-relaxed">
              {dish.description || "Опис страви відсутній."}
            </p>
          </div>

          {/* Extra Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-warm-light p-4 rounded-xl border border-primary-100">
            {dish.weight && (
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Вага / Об'єм</span>
                <span className="font-medium text-dark-default">{dish.weight}</span>
              </div>
            )}
            {dish.calories && (
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Калорійність</span>
                <span className="font-medium text-dark-default">{dish.calories} ккал</span>
              </div>
            )}
            {dish.ingredients && (
              <div className="col-span-2 mt-2">
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Склад</span>
                <span className="font-medium text-dark-default leading-relaxed">{dish.ingredients}</span>
              </div>
            )}
            {!dish.weight && !dish.calories && !dish.ingredients && (
              <div className="col-span-2 text-sm text-gray-500 italic">
                Детальна інформація відсутня
              </div>
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center mb-4">
              Сподобалась страва? Зробіть замовлення за телефоном або залишіть заявку в розділі контактів.
            </p>
            <a href="#contacts" onClick={onClose} className="btn-primary w-full text-center block">
              Замовити столик
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishModal;
