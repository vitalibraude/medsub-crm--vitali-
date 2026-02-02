import { Target, Users, FileText, Database, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Process() {
  const { t } = useLanguage();

  const processSteps = [
    {
      icon: Target,
      titleKey: 'process1Title' as const,
      descKey: 'process1Desc' as const,
    },
    {
      icon: Users,
      titleKey: 'process2Title' as const,
      descKey: 'process2Desc' as const,
    },
    {
      icon: FileText,
      titleKey: 'process3Title' as const,
      descKey: 'process3Desc' as const,
    },
    {
      icon: Database,
      titleKey: 'process4Title' as const,
      descKey: 'process4Desc' as const,
    },
    {
      icon: CheckCircle2,
      titleKey: 'process5Title' as const,
      descKey: 'process5Desc' as const,
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('processTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('processSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300 group"
              >
                <div className="absolute -top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center shadow-2xl">
          <a
            href="#contact"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl"
          >
            {t('heroJourneyButton')}
          </a>
        </div>
      </div>
    </section>
  );
}
