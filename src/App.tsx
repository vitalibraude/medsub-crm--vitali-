import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { TechPartners } from './components/TechPartners';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { LanguageToggle } from './components/LanguageToggle';
import { Logo } from './components/Logo';
import { useLanguage } from './i18n/LanguageContext';
import { useEffect } from 'react';

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Logo />
      <LanguageToggle />
      <Hero />
      <Services />
      <Process />
      <TechPartners />
      <Testimonials />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <AccessibilityMenu />
    </div>
  );
}

export default App;
