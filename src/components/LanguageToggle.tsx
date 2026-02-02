import { Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white rounded-full shadow-lg p-2 flex gap-1">
        <button
          onClick={() => setLanguage('he')}
          className={`px-4 py-2 rounded-full font-bold transition-all ${
            language === 'he'
              ? 'bg-primary-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          עברית
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full font-bold transition-all ${
            language === 'en'
              ? 'bg-primary-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          English
        </button>
      </div>
    </div>
  );
}
