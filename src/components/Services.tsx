import { Zap, Link2, Bot, Globe, Database, Lightbulb } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Zap,
      titleKey: 'service1Title' as const,
      descKey: 'service1Desc' as const,
    },
    {
      icon: Link2,
      titleKey: 'service2Title' as const,
      descKey: 'service2Desc' as const,
    },
    {
      icon: Bot,
      titleKey: 'service3Title' as const,
      descKey: 'service3Desc' as const,
    },
    {
      icon: Globe,
      titleKey: 'service4Title' as const,
      descKey: 'service4Desc' as const,
    },
    {
      icon: Database,
      titleKey: 'service5Title' as const,
      descKey: 'service5Desc' as const,
    },
    {
      icon: Lightbulb,
      titleKey: 'service6Title' as const,
      descKey: 'service6Desc' as const,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
