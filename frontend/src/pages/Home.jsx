import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FamilyStory from '../components/home/FamilyStory';
import MenuSection from '../components/menu/MenuSection';
import CorporateEvents from '../components/corporate/CorporateEvents';
import ContactSection from '../components/contact/ContactSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cezar - Смачна сімейна кухня в Ужгороді</title>
        <meta name="description" content="Ресторан Cezar в Ужгороді. Справжня сімейна гостинність, неймовірні страви з мангалу, комплексні обіди та організація корпоративів." />
      </Helmet>
      
      <main>
        <Hero />
        <FamilyStory />
        <MenuSection />
        <CorporateEvents />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
