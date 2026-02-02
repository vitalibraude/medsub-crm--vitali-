import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Rocket, Factory, Bot, TrendingUp, Users, CreditCard, Cpu, Gauge, Network, Sparkles, MessageSquare, Zap, BarChart, Shield, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const { t, language } = useLanguage();

  const categories = language === 'he' ? [
    {
      title: 'עזרה לעסקים חדשים',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      services: [
        {
          icon: TrendingUp,
          title: 'ליווי טכנולוגי מקצועי',
          description: 'ליווי צמוד בכל שלבי מסע הלקוח - משלב השיווק הראשוני ועד סגירת העסקה והמשך תמיכה'
        },
        {
          icon: Users,
          title: 'ניהול לידים חכם',
          description: 'מערכות מתקדמות לקליטה, ניהול ומעקב אחר לידים - מהרגע הראשון ועד ההמרה'
        },
        {
          icon: CreditCard,
          title: 'חיבור מערכות סליקה',
          description: 'אינטגרציה מלאה עם כל חברות הסליקה המובילות לקבלת תשלומים בקלות ובבטחה'
        },
        {
          icon: BarChart,
          title: 'מערכות CRM מתקדמות',
          description: 'בניית וניהול מערכת CRM המותאמת בדיוק לצרכי העסק שלכם'
        },
        {
          icon: MessageSquare,
          title: 'אוטומציות שיווקיות',
          description: 'דיוור אוטומטי, בוטים לשירות לקוחות וכלים לניהול הקשר עם הלקוח'
        }
      ]
    },
    {
      title: 'ליווי מפעלים ו-IoT',
      icon: Factory,
      color: 'from-orange-500 to-orange-600',
      services: [
        {
          icon: Cpu,
          title: 'בחירת חיישנים וספקים',
          description: 'ייעוץ מקצועי בבחירת החיישנים והספקים המתאימים ביותר לצרכי המפעל'
        },
        {
          icon: Gauge,
          title: 'מערכות ניטור IoT',
          description: 'התקנה וניהול של מערכות חיישנים לניטור ובקרה בזמן אמת'
        },
        {
          icon: Network,
          title: 'אינטגרציה עם מכונות',
          description: 'חיבור וסנכרון בין מערכות המפעל השונות לזרימת מידע חלקה'
        },
        {
          icon: Cloud,
          title: 'פלטפורמת ניהול נתונים',
          description: 'בניית מערכת מרכזית שמאגדת ומנתחת את כל הנתונים מהמפעל'
        },
        {
          icon: Zap,
          title: 'אוטומציה תעשייתית',
          description: 'אוטומציה של תהליכי ייצור ובקרה לשיפור יעילות והפחתת עלויות'
        }
      ]
    },
    {
      title: 'סוכני בינה מלאכותית',
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
      services: [
        {
          icon: MessageSquare,
          title: 'צ\'אט-בוט חכם 24/7',
          description: 'בוט שירות לקוחות שעובד בכל הפלטפורמות - WhatsApp, Facebook, אתר ועוד'
        },
        {
          icon: Sparkles,
          title: 'סוכן AI לניתוח נתונים',
          description: 'בינה מלאכותית שמנתחת את הנתונים העסקיים ומספקת תובנות פעולה'
        },
        {
          icon: Bot,
          title: 'אוטומציות מבוססות AI',
          description: 'תהליכים חכמים שלומדים ומשתפרים עם הזמן - מתקנים, מתייעצים ומטפלים'
        },
        {
          icon: Shield,
          title: 'AI לזיהוי הונאות',
          description: 'מערכות למידה עמוקה לזיהוי חריגות, התנהגות חשודה ומניעת הונאות'
        },
        {
          icon: TrendingUp,
          title: 'חיזוי ואופטימיזציה',
          description: 'מודלים חכמים לחיזוי ביקושים, ניהול מלאי ואופטימיזציה של תהליכים'
        }
      ]
    },
    {
      title: 'פתרונות מתקדמים נוספים',
      icon: Sparkles,
      color: 'from-green-500 to-green-600',
      services: [
        {
          icon: Cloud,
          title: 'מעבר לענן',
          description: 'ליווי בתהליך מעבר המערכות לענן - AWS, Google Cloud, Azure'
        },
        {
          icon: Shield,
          title: 'אבטחת מידע',
          description: 'ייעוץ והטמעת פתרונות אבטחת מידע וגיבוי אוטומטי'
        },
        {
          icon: BarChart,
          title: 'דשבורדים ו-BI',
          description: 'בניית לוחות בקרה ומערכות Business Intelligence מתקדמות'
        },
        {
          icon: Network,
          title: 'API ואינטגרציות',
          description: 'פיתוח ממשקי API ואינטגרציות בין מערכות שונות'
        },
        {
          icon: Zap,
          title: 'אוטומציות מותאמות אישית',
          description: 'פיתוח אוטומציות ייחודיות שמתאימות בדיוק לצרכי העסק'
        }
      ]
    }
  ] : [
    {
      title: 'Support for New Businesses',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      services: [
        {
          icon: TrendingUp,
          title: 'Professional Technology Support',
          description: 'Close support throughout the customer journey - from initial marketing to closing the deal and ongoing support'
        },
        {
          icon: Users,
          title: 'Smart Lead Management',
          description: 'Advanced systems for capturing, managing and tracking leads - from first contact to conversion'
        },
        {
          icon: CreditCard,
          title: 'Payment Gateway Integration',
          description: 'Full integration with all leading payment processors for easy and secure payment collection'
        },
        {
          icon: BarChart,
          title: 'Advanced CRM Systems',
          description: 'Building and managing a CRM system tailored exactly to your business needs'
        },
        {
          icon: MessageSquare,
          title: 'Marketing Automation',
          description: 'Automated email marketing, customer service bots and customer relationship management tools'
        }
      ]
    },
    {
      title: 'Factory Support & IoT',
      icon: Factory,
      color: 'from-orange-500 to-orange-600',
      services: [
        {
          icon: Cpu,
          title: 'Sensor & Supplier Selection',
          description: 'Professional consulting in selecting the most suitable sensors and suppliers for factory needs'
        },
        {
          icon: Gauge,
          title: 'IoT Monitoring Systems',
          description: 'Installation and management of sensor systems for real-time monitoring and control'
        },
        {
          icon: Network,
          title: 'Machine Integration',
          description: 'Connecting and synchronizing different factory systems for smooth information flow'
        },
        {
          icon: Cloud,
          title: 'Data Management Platform',
          description: 'Building a central system that aggregates and analyzes all factory data'
        },
        {
          icon: Zap,
          title: 'Industrial Automation',
          description: 'Automation of production and control processes to improve efficiency and reduce costs'
        }
      ]
    },
    {
      title: 'AI Agents',
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
      services: [
        {
          icon: MessageSquare,
          title: 'Smart Chatbot 24/7',
          description: 'Customer service bot working on all platforms - WhatsApp, Facebook, website and more'
        },
        {
          icon: Sparkles,
          title: 'AI Data Analysis Agent',
          description: 'Artificial intelligence that analyzes business data and provides actionable insights'
        },
        {
          icon: Bot,
          title: 'AI-Based Automation',
          description: 'Smart processes that learn and improve over time - fixing, consulting and handling'
        },
        {
          icon: Shield,
          title: 'AI Fraud Detection',
          description: 'Deep learning systems to detect anomalies, suspicious behavior and prevent fraud'
        },
        {
          icon: TrendingUp,
          title: 'Prediction & Optimization',
          description: 'Smart models for demand forecasting, inventory management and process optimization'
        }
      ]
    },
    {
      title: 'Additional Advanced Solutions',
      icon: Sparkles,
      color: 'from-green-500 to-green-600',
      services: [
        {
          icon: Cloud,
          title: 'Cloud Migration',
          description: 'Support in migrating systems to the cloud - AWS, Google Cloud, Azure'
        },
        {
          icon: Shield,
          title: 'Information Security',
          description: 'Consulting and implementation of information security and automatic backup solutions'
        },
        {
          icon: BarChart,
          title: 'Dashboards & BI',
          description: 'Building control panels and advanced Business Intelligence systems'
        },
        {
          icon: Network,
          title: 'API & Integrations',
          description: 'Development of API interfaces and integrations between different systems'
        },
        {
          icon: Zap,
          title: 'Custom Automation',
          description: 'Development of unique automations that fit exactly to business needs'
        }
      ]
    }
  ];

  const pageTitle = language === 'he' ? 'כל השירותים שלנו' : 'All Our Services';
  const pageSubtitle = language === 'he' 
    ? 'פתרונות טכנולוגיים מקיפים לכל סוג של עסק - מסטארטאפים ועד מפעלים גדולים'
    : 'Comprehensive technological solutions for every type of business - from startups to large factories';
  const backButton = language === 'he' ? 'חזרה לדף הראשי' : 'Back to Home';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5" />
            <span>{backButton}</span>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            {pageSubtitle}
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div
                        key={serviceIndex}
                        className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <ServiceIcon className="w-7 h-7 text-white" />
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
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'he' ? 'מוכנים להתחיל?' : 'Ready to Start?'}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {language === 'he' 
              ? 'בואו נדבר על הצרכים שלכם ונבנה יחד את הפתרון המושלם'
              : 'Let\'s talk about your needs and build the perfect solution together'}
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl"
          >
            {language === 'he' ? 'צרו קשר עכשיו' : 'Contact Us Now'}
          </Link>
        </div>
      </section>
    </div>
  );
}
