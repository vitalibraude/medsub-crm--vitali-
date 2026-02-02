import { Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      nameKey: 'testimonial1Author' as const,
      roleKey: 'testimonial1Role' as const,
      textKey: 'testimonial1Text' as const,
      rating: 5,
    },
    {
      nameKey: 'testimonial2Author' as const,
      roleKey: 'testimonial2Role' as const,
      textKey: 'testimonial2Text' as const,
      rating: 5,
    },
    {
      nameKey: 'testimonial3Author' as const,
      roleKey: 'testimonial3Role' as const,
      textKey: 'testimonial3Text' as const,
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-primary-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{t(testimonial.textKey)}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{t(testimonial.nameKey)}</p>
                <p className="text-sm text-gray-600">{t(testimonial.roleKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
