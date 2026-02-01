import { Bot, Workflow, Database, Globe, Mail, Zap } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'מערכות CRM לניהול קשרי לקוחות',
    description: 'מערכות CRM מתקדמות שמסייעות לך לנהל את כל קשרי הלקוחות שלך במקום אחד',
  },
  {
    icon: Bot,
    title: 'תכנון ובניית בוטים וצ\'אט-בוטים',
    description: 'בוטים חכמים בכל הפלטפורמות - WhatsApp, Instagram, Facebook ועוד',
  },
  {
    icon: Workflow,
    title: 'אינטגרציות ואוטומציה עסקית',
    description: 'חיבור בין מערכות שונות ואוטומציה של תהליכים עסקיים מורכבים',
  },
  {
    icon: Zap,
    title: 'מערכות ERP לניהול משאבים',
    description: 'פתרונות ERP מקיפים לניהול יעיל של כל משאבי הארגון',
  },
  {
    icon: Globe,
    title: 'עיצוב ופיתוח אתרים וממשקי Web',
    description: 'אתרים מודרניים, מהירים ומותאמים אישית לצרכי העסק שלך',
  },
  {
    icon: Mail,
    title: 'מערכות דיוור ודפי נחיתה',
    description: 'קמפיינים שיווקיים מתקדמים ודפי נחיתה ממירים',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            פתרונות טכנולוגיים מתקדמים המותאמים לצרכים העסקיים שלכם
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
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
