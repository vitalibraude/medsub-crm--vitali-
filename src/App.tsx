import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { LanguageToggle } from './components/LanguageToggle';
import { Logo } from './components/Logo';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AccessibilityStatement } from './pages/AccessibilityStatement';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { useLanguage } from './i18n/LanguageContext';
import { useEffect } from 'react';

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Logo />
        <LanguageToggle />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServiceDetailPage />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        
        <WhatsAppButton />
        <AccessibilityMenu />
      </div>
    </Router>
  );
}

export default App;
