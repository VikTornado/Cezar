import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/auth/check/`);
        if (response.data.is_authenticated && response.data.is_superuser) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [API_URL]);

  const navLinks = [
    { name: 'Про нас', href: '#story' },
    { name: 'Меню', href: '#menu' },
    { name: 'Корпоративи', href: '#corporate' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Контакти', href: '#contacts' }
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-warm-light/95 backdrop-blur-md shadow-sm border-b border-warm-dark/20">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 text-2xl font-serif font-bold text-primary-700 tracking-wider">
          <span className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">C</span>
          Cezar
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-dark-light hover:text-primary-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ADMIN/LOGIN BUTTONS - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {!loading && isAdmin ? (
            <>
              <a 
                href={`${API_URL}/admin/`}
                className="flex items-center gap-1 text-sm bg-primary-50 text-primary-700 px-3 py-1.5 rounded border border-primary-200 hover:bg-primary-100 transition-colors"
              >
                <ShieldCheck size={16} />
                Адмін-панель
              </a>
              <a 
                href={`${API_URL}/admin/logout/?next=http://localhost:5173/`}
                className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
              >
                Вихід
              </a>
            </>
          ) : (
            <a 
              href={`${API_URL}/admin/login/?next=http://localhost:5173/`}
              className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
            >
              Вхід
            </a>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-primary-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROP-DOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-warm-light border-b border-warm-dark shadow-md flex flex-col p-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="py-3 text-lg text-dark-light border-b border-gray-100 hover:text-primary-600"
            >
              {link.name}
            </a>
          ))}
          
          <div className="mt-4 flex flex-col gap-3">
            {!loading && isAdmin ? (
              <>
                <a 
                  href={`${API_URL}/admin/`}
                  className="flex items-center justify-center gap-2 bg-primary-50 text-primary-700 py-2 rounded border border-primary-200"
                >
                  <ShieldCheck size={18} />
                  Адмін-панель
                </a>
                <a 
                  href={`${API_URL}/admin/logout/?next=http://localhost:5173/`}
                  className="text-center py-2 text-gray-500 hover:text-red-500"
                >
                  Вихід
                </a>
              </>
            ) : (
              <a 
                href={`${API_URL}/admin/login/?next=http://localhost:5173/`}
                className="text-center py-2 text-primary-600 font-medium"
              >
                Вхід
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
