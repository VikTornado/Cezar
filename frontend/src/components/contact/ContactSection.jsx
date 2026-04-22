import React, { useState } from 'react';
import axios from 'axios';
import { Send, Phone, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post(`${API_URL}/api/contact/`, formData);
      setStatus({ 
        type: 'success', 
        message: 'Дякуємо! Ваша заявка успішно надіслана. Ми зв\'яжемось з вами найближчим часом.' 
      });
      setFormData({ name: '', phone: '', message: '' }); // Clear form
    } catch (error) {
      console.error("Submit error:", error);
      setStatus({ 
        type: 'error', 
        message: 'Помилка відправки. Будь ласка, спробуйте пізніше або зателефонуйте нам.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-20 md:py-32 bg-dark-default text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-light mb-6">
              Замовляйте столик або кейтеринг
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              Залиште свої контакти, і ми зв'яжемося з вами для уточнення деталей замовлення,
              бронювання столика або організації вашого ідеального свята.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark-light rounded-full flex items-center justify-center text-primary-400 shrink-0">
                   <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Або зателефонуйте нам:</div>
                  <a href="tel:+380000000000" className="text-2xl font-bold hover:text-primary-400 transition-colors">
                    +38 000 000 00 00
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-dark-default">
            <h3 className="text-3xl font-bold font-serif mb-8 border-b border-gray-100 pb-4">
              Залишити заявку
            </h3>

            {status.message && (
              <div className={`p-4 rounded-lg mb-8 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше і'мя</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    placeholder="Олександр"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Номер телефону</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    placeholder="+380"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Коментар (необов'язково)</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare size={18} className="text-gray-400" />
                  </div>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                    placeholder="Напишіть деталі замовлення..."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary flex justify-center items-center gap-2 py-4"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
                    Відправка...
                  </span>
                ) : (
                  <>
                    Надіслати заявку
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
