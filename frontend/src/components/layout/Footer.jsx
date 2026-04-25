import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const Footer = () => {
  return (
    <footer className="bg-dark-default text-warm-light py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-serif font-bold text-primary-400">Cezar</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Справжня сімейна гостинність та найсмачніші страви з Ужгорода. 
            Створено з любов'ю та теплом для ваших найкращих моментів.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-primary-600 transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-primary-600 transition-colors">
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 md:ml-auto">
          <h4 className="text-lg font-bold">Навігація</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#story" className="text-gray-400 hover:text-primary-400 transition-colors">Про нашу родину</a></li>
            <li><a href="#menu" className="text-gray-400 hover:text-primary-400 transition-colors">Наше меню</a></li>
            <li><a href="#corporate" className="text-gray-400 hover:text-primary-400 transition-colors">Корпоративи</a></li>
            <li><a href="#gallery" className="text-gray-400 hover:text-primary-400 transition-colors">Галерея страв</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 md:ml-auto">
          <h4 className="text-lg font-bold">Контакти</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin size={20} className="text-primary-400 shrink-0 mt-0.5" />
              <span>88000, вулиця Мукачівська, 8-10,<br/>Ужгород, Закарпатська область</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone size={20} className="text-primary-400 shrink-0" />
              <a href="tel:+380000000000" className="hover:text-primary-400 transition-colors">+380 (00) 000-00-00</a>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Mail size={20} className="text-primary-400 shrink-0" />
              <a href="mailto:info@cezar.uz.ua" className="hover:text-primary-400 transition-colors">info@cezar.uz.ua</a>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="container mx-auto px-4 lg:px-8 mt-12 pt-6 border-t border-dark-light text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Родиний бренд "Cezar". Всі права захищено.
      </div>
    </footer>
  );
};

export default Footer;
