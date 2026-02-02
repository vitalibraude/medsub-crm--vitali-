import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Vitali AI</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footerTagline')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('footerContactTitle')}</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 mb-2">🇮🇱 {t('contactOfficeIsrael')}</p>
                <a href="tel:0545696851" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>0545696851</span>
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">🇬🇧 {t('contactOfficeUK')}</p>
                <a href="tel:07778924382" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>07778924382</span>
                </a>
              </div>
              <a href="mailto:VITALIPAVLOVSK@GMAIL.COM" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>VITALIPAVLOVSK@GMAIL.COM</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{t('contactOfficeIsrael')} | {t('contactOfficeUK')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('footerSocialTitle')}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
}
