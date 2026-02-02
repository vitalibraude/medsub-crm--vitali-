import { useLanguage } from '../i18n/LanguageContext';
import { Rocket, Factory, Bot, Zap, Building2, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const { language } = useLanguage();

  const serviceCategories = language === 'he' ? [
    {
      id: 'new-business',
      icon: Rocket,
      title: 'עסקים חדשים',
      description: 'ליווי טכנולוגי מלא מהרעיון ועד ההצלחה',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:border-blue-400'
    },
    {
      id: 'factories',
      icon: Factory,
      title: 'מפעלים ו-IoT',
      description: 'מערכות חכמות לניטור וניהול הייצור',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:border-orange-400'
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'אוטומציות עסקיות',
      description: 'חיסכון בזמן והגדלת יעילות בתהליכים',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:border-purple-400'
    },
    {
      id: 'ai-agents',
      icon: Bot,
      title: 'סוכני בינה מלאכותית',
      description: 'טכנולוגיות AI מתקדמות לעסק שלכם',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:border-green-400'
    },
    {
      id: 'enterprise',
      icon: Building2,
      title: 'ארגונים גדולים',
      description: 'פתרונות ארגוניים בקנה מידה גדול',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:border-indigo-400'
    },
    {
      id: 'consulting',
      icon: Brain,
      title: 'ייעוץ טכנולוגי',
      description: 'בחירת הטכנולוגיות הנכונות לעסק',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:border-pink-400'
    }
  ] : [
    {
      id: 'new-business',
      icon: Rocket,
      title: 'New Businesses',
      description: 'Complete tech support from idea to success',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:border-blue-400'
    },
    {
      id: 'factories',
      icon: Factory,
      title: 'Factories & IoT',
      description: 'Smart systems for production monitoring',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:border-orange-400'
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Business Automation',
      description: 'Save time and increase process efficiency',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:border-purple-400'
    },
    {
      id: 'ai-agents',
      icon: Bot,
      title: 'AI Agents',
      description: 'Advanced AI technologies for your business',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:border-green-400'
    },
    {
      id: 'enterprise',
      icon: Building2,
      title: 'Large Organizations',
      description: 'Enterprise-scale solutions',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:border-indigo-400'
    },
    {
      id: 'consulting',
      icon: Brain,
      title: 'Technology Consulting',
      description: 'Choosing the right tech for your business',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:border-pink-400'
    }
  ];

  const pageTitle = language === 'he' ? 'באיזה תחום נעזור לכם?' : 'Which Area Can We Help You With?';
  const pageSubtitle = language === 'he' 
    ? 'בחרו את התחום המתאים לכם ונספר לכם איך אנחנו יכולים לעזור'
    : 'Choose your area and we\'ll tell you how we can help';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {pageSubtitle}
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/services/${category.id}`}
                className={`group ${category.bgColor} p-8 rounded-3xl border-2 border-transparent ${category.hoverColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                  <span>{language === 'he' ? 'לפרטים נוספים' : 'Learn More'}</span>
                  <span>{language === 'he' ? '←' : '→'}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            to="/#contact"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-xl"
          >
            {language === 'he' ? 'לא בטוחים? בואו נדבר' : 'Not Sure? Let\'s Talk'}
          </Link>
        </div>
      </div>
    </div>
  );
}
