import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, CheckCircle2, Rocket, Factory, Bot, Zap, Building2, Brain } from 'lucide-react';
import { Footer } from '../components/Footer';

export function ServiceDetailPage() {
  const { category } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const categoryDetails = {
    'new-business': {
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      he: {
        title: 'עסקים חדשים - מהרעיון להצלחה',
        subtitle: 'אנחנו מלווים אתכם בכל שלב בדרך להקמת העסק',
        story: 'כשאתם מתחילים עסק חדש, יש מיליון דברים לחשוב עליהם. הטכנולוגיה לא צריכה להיות אחד מהם. אנחנו כאן כדי לקחת את כל הצד הטכנולוגי על עצמנו - מבחירת הכלים הנכונים, דרך הקמת המערכות, ועד ליווי שוטף שמבטיח שהכל עובד חלק.',
        process: [
          'פגישת ייעוץ ראשונית - מבינים את החזון והצרכים שלכם',
          'בחירת טכנולוגיות - ממליצים על הכלים המתאימים ביותר',
          'הקמת תשתית - בונים את המערכות הדיגיטליות',
          'אינטגרציות - מחברים בין כל המערכות',
          'הדרכה והטמעה - מלמדים אתכם להשתמש בכל דבר',
          'ליווי שוטף - תמיד כאן לשאלות ושדרוגים'
        ],
        features: [
          'מערכת CRM לניהול לקוחות',
          'כלי שיווק דיגיטלי ואוטומציות',
          'מערכות סליקה ותשלומים',
          'אתר או אפליקציה מותאמים',
          'דשבורדים לניהול העסק',
          'גיבוי אוטומטי ואבטחת מידע'
        ]
      },
      en: {
        title: 'New Businesses - From Idea to Success',
        subtitle: 'We guide you through every step of building your business',
        story: 'When starting a new business, there are a million things to think about. Technology shouldn\'t be one of them. We\'re here to take the entire tech side off your hands - from choosing the right tools, through setting up systems, to ongoing support that ensures everything runs smoothly.',
        process: [
          'Initial consultation - understanding your vision and needs',
          'Technology selection - recommending the most suitable tools',
          'Infrastructure setup - building digital systems',
          'Integrations - connecting all systems together',
          'Training and implementation - teaching you to use everything',
          'Ongoing support - always here for questions and upgrades'
        ],
        features: [
          'CRM system for customer management',
          'Digital marketing tools and automation',
          'Payment processing systems',
          'Custom website or application',
          'Business management dashboards',
          'Automatic backup and data security'
        ]
      }
    },
    'factories': {
      icon: Factory,
      color: 'from-orange-500 to-orange-600',
      he: {
        title: 'מפעלים ו-IoT - הייצור החכם של המחר',
        subtitle: 'הפכו את המפעל שלכם לחכם עם טכנולוגיות IoT מתקדמות',
        story: 'המפעל המודרני הוא חכם, מחובר ויעיל. אנחנו עוזרים לכם להטמיע טכנולוגיות IoT שיאפשרו לכם לנטר, לנהל ולבקר את תהליכי הייצור בזמן אמת. מבחירת החיישנים הנכונים ועד בניית פלטפורמת ניהול מקיפה - אנחנו איתכם בכל שלב.',
        process: [
          'סקר צרכים - מפה מפורטת של תהליכי הייצור',
          'בחירת חיישנים וספקים - מצויים לכם את הפתרונות המתאימים',
          'התקנה וחיבור - מתקינים ומחברים את המערכות',
          'בניית פלטפורמה - מערכת מרכזית לניהול הנתונים',
          'אנליטיקה מתקדמת - תובנות שמשפרות את הייצור',
          'תחזוקה ושדרוגים - שמירה על המערכת עדכנית'
        ],
        features: [
          'ניטור בזמן אמת של קווי ייצור',
          'התראות אוטומטיות לתקלות',
          'חיזוי תחזוקה מונעת',
          'אופטימיזציה של תהליכי ייצור',
          'דוחות ואנליטיקה מתקדמת',
          'אינטגרציה עם מערכות ERP קיימות'
        ]
      },
      en: {
        title: 'Factories & IoT - The Smart Production of Tomorrow',
        subtitle: 'Transform your factory into a smart facility with advanced IoT technologies',
        story: 'The modern factory is smart, connected and efficient. We help you implement IoT technologies that allow you to monitor, manage and control production processes in real-time. From choosing the right sensors to building a comprehensive management platform - we\'re with you every step of the way.',
        process: [
          'Needs assessment - detailed mapping of production processes',
          'Sensor and supplier selection - finding the right solutions',
          'Installation and connection - installing and connecting systems',
          'Platform development - central system for data management',
          'Advanced analytics - insights that improve production',
          'Maintenance and upgrades - keeping the system up-to-date'
        ],
        features: [
          'Real-time production line monitoring',
          'Automatic fault alerts',
          'Predictive maintenance forecasting',
          'Production process optimization',
          'Advanced reports and analytics',
          'Integration with existing ERP systems'
        ]
      }
    },
    'automation': {
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      he: {
        title: 'אוטומציות עסקיות - תעבדו חכם, לא קשה',
        subtitle: 'פנו את הזמן שלכם למה שחשוב באמת',
        story: 'דמיינו עולם שבו כל המשימות החוזרות קורות מאליהן. מיילים נשלחים אוטומטית, נתונים מתעדכנים, חשבוניות נוצרות ונשלחות. זה לא קסם - זו אוטומציה. אנחנו מזהים את התהליכים שלוקחים לכם הכי הרבה זמן, ובונים אוטומציות שמשחררות אתכם להתמקד במה שבאמת חשוב.',
        process: [
          'ניתוח תהליכים - מזהים מה אפשר לאוטמט',
          'תכנון אוטומציה - בונים תרשים זרימה מדויק',
          'בחירת כלים - Make, Zapier או פיתוח מותאם',
          'בנייה ובדיקה - יוצרים את האוטומציה',
          'הטמעה והדרכה - מלמדים איך לעבוד עם זה',
          'מעקב ושיפור - משפרים ומוסיפים יכולות'
        ],
        features: [
          'אוטומציות שיווק ודיוור',
          'ניהול אוטומטי של לידים',
          'אינטגרציות בין מערכות',
          'יצירת מסמכים אוטומטית',
          'עדכון נתונים בזמן אמת',
          'התראות והתראות חכמות'
        ]
      },
      en: {
        title: 'Business Automation - Work Smart, Not Hard',
        subtitle: 'Free up your time for what really matters',
        story: 'Imagine a world where all repetitive tasks happen automatically. Emails send themselves, data updates, invoices are created and sent. It\'s not magic - it\'s automation. We identify the processes that take up most of your time and build automations that free you to focus on what truly matters.',
        process: [
          'Process analysis - identifying what can be automated',
          'Automation planning - building an accurate flow diagram',
          'Tool selection - Make, Zapier or custom development',
          'Building and testing - creating the automation',
          'Implementation and training - teaching how to work with it',
          'Monitoring and improvement - improving and adding capabilities'
        ],
        features: [
          'Marketing and email automation',
          'Automatic lead management',
          'System integrations',
          'Automatic document creation',
          'Real-time data updates',
          'Smart notifications and alerts'
        ]
      }
    },
    'ai-agents': {
      icon: Bot,
      color: 'from-green-500 to-green-600',
      he: {
        title: 'סוכני בינה מלאכותית - העובדים החכמים שלכם',
        subtitle: 'AI שעובד בשבילכם 24/7',
        story: 'בינה מלאכותית זה לא רק ChatGPT. זה סוכן שעונה ללקוחות שלכם בכל שעה, מנתח נתונים ומזהה הזדמנויות, מתריע על חריגות, ועוזר לכם לקבל החלטות חכמות יותר. אנחנו בונים סוכני AI מותאמים אישית שמתאימים בדיוק לצרכים שלכם.',
        process: [
          'הגדרת יעדים - מה ה-AI צריך לעשות בשבילכם',
          'בחירת מודלים - GPT, Claude או מודלים מיוחדים',
          'בניית הסוכן - פיתוח ואימון ה-AI',
          'אינטגרציה - חיבור למערכות שלכם',
          'בדיקות - וידוא שהכל עובד מושלם',
          'למידה מתמשכת - ה-AI משתפר עם הזמן'
        ],
        features: [
          'צ\'אט-בוט חכם לשירות לקוחות',
          'ניתוח אוטומטי של נתונים',
          'זיהוי דפוסים והתנהגויות',
          'המלצות והחלטות חכמות',
          'זיהוי הונאות וחריגות',
          'אוטומציה מבוססת AI'
        ]
      },
      en: {
        title: 'AI Agents - Your Smart Employees',
        subtitle: 'AI working for you 24/7',
        story: 'Artificial intelligence isn\'t just ChatGPT. It\'s an agent that answers your customers at any hour, analyzes data and identifies opportunities, alerts on anomalies, and helps you make smarter decisions. We build custom AI agents that fit exactly your needs.',
        process: [
          'Goal definition - what should the AI do for you',
          'Model selection - GPT, Claude or specialized models',
          'Agent building - developing and training the AI',
          'Integration - connecting to your systems',
          'Testing - ensuring everything works perfectly',
          'Continuous learning - AI improves over time'
        ],
        features: [
          'Smart chatbot for customer service',
          'Automatic data analysis',
          'Pattern and behavior detection',
          'Smart recommendations and decisions',
          'Fraud and anomaly detection',
          'AI-based automation'
        ]
      }
    },
    'enterprise': {
      icon: Building2,
      color: 'from-indigo-500 to-indigo-600',
      he: {
        title: 'ארגונים גדולים - פתרונות בקנה מידה',
        subtitle: 'טכנולוגיה ארגונית שמתאימה לצמיחה',
        story: 'ארגונים גדולים צריכים פתרונות גדולים. לא רק כלי - אלא מערכת שלמה שיכולה לצמוח איתכם, להתמודד עם נפחי עבודה גדולים, ולהישאר יציבה ומהירה. אנחנו מומחים בבניית תשתיות ארגוניות שמשרתות מאות ואלפי משתמשים בו-זמנית.',
        process: [
          'ניתוח ארגוני - הבנת המבנה והצרכים',
          'אסטרטגיה טכנולוגית - תכנון ארוך טווח',
          'תשתית ענן - AWS, Azure או Google Cloud',
          'פיתוח מותאם - בניית מערכות ייעודיות',
          'אבטחה ותאימות - עמידה בתקנים',
          'תמיכה ארגונית - SLA ותמיכה 24/7'
        ],
        features: [
          'מערכות ERP ארגוניות',
          'תשתית ענן סקלאבילית',
          'אבטחת מידע ברמה ארגונית',
          'אינטגרציות מורכבות',
          'BI ואנליטיקה מתקדמת',
          'ניהול משתמשים ותפקידים'
        ]
      },
      en: {
        title: 'Large Organizations - Enterprise-Scale Solutions',
        subtitle: 'Enterprise technology that scales with growth',
        story: 'Large organizations need large solutions. Not just tools - but a complete system that can grow with you, handle large workloads, and stay stable and fast. We specialize in building enterprise infrastructure serving hundreds and thousands of users simultaneously.',
        process: [
          'Organizational analysis - understanding structure and needs',
          'Technology strategy - long-term planning',
          'Cloud infrastructure - AWS, Azure or Google Cloud',
          'Custom development - building dedicated systems',
          'Security and compliance - meeting standards',
          'Enterprise support - SLA and 24/7 support'
        ],
        features: [
          'Enterprise ERP systems',
          'Scalable cloud infrastructure',
          'Enterprise-level data security',
          'Complex integrations',
          'Advanced BI and analytics',
          'User and role management'
        ]
      }
    },
    'consulting': {
      icon: Brain,
      color: 'from-pink-500 to-pink-600',
      he: {
        title: 'ייעוץ טכנולוגי - הדרך הנכונה מההתחלה',
        subtitle: 'עוזרים לכם לבחור את הטכנולוגיות הנכונות',
        story: 'לפעמים הדבר הכי חשוב הוא לא לבנות, אלא לדעת מה לבנות. יש מיליון כלים ופתרונות בשוק - איך בוחרים את הנכונים? אנחנו מביאים ניסיון של שנים בעשרות תחומים, ועוזרים לכם לקבל החלטות נכונות שיחסכו לכם זמן, כסף וכאבי ראש.',
        process: [
          'הבנת המצב הנוכחי - סקר טכנולוגי מקיף',
          'הגדרת יעדים - לאן רוצים להגיע',
          'מחקר אפשרויות - סקירת כלים ופתרונות',
          'המלצות - תכנית פעולה ברורה',
          'ליווי בהטמעה - עזרה בבחירת ספקים',
          'מעקב ושיפור - ייעוץ שוטף'
        ],
        features: [
          'ייעוץ בבחירת טכנולוגיות',
          'תכנון ארכיטקטורה',
          'הערכת ספקים וכלים',
          'ניתוח עלות-תועלת',
          'אסטרטגיה דיגיטלית',
          'ליווי ב-POC ופיילוטים'
        ]
      },
      en: {
        title: 'Technology Consulting - The Right Way From The Start',
        subtitle: 'Helping you choose the right technologies',
        story: 'Sometimes the most important thing isn\'t building, but knowing what to build. There are millions of tools and solutions on the market - how do you choose the right ones? We bring years of experience across dozens of fields, helping you make smart decisions that save time, money and headaches.',
        process: [
          'Current state assessment - comprehensive technology survey',
          'Goal definition - where you want to go',
          'Options research - reviewing tools and solutions',
          'Recommendations - clear action plan',
          'Implementation support - help with vendor selection',
          'Monitoring and improvement - ongoing consulting'
        ],
        features: [
          'Technology selection consulting',
          'Architecture planning',
          'Vendor and tool evaluation',
          'Cost-benefit analysis',
          'Digital strategy',
          'POC and pilot support'
        ]
      }
    }
  };

  const details = categoryDetails[category as keyof typeof categoryDetails];
  if (!details) return <div>Category not found</div>;

  const content = language === 'he' ? details.he : details.en;
  const Icon = details.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${details.color} text-white py-20 px-4`}>
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5" />
            <span>{language === 'he' ? 'חזרה לבחירת תחום' : 'Back to Categories'}</span>
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {content.title}
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            {content.story}
          </p>

          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            {language === 'he' ? 'איך אנחנו עובדים' : 'How We Work'}
          </h2>
          <div className="space-y-4 mb-16">
            {content.process.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className={`w-8 h-8 bg-gradient-to-br ${details.color} rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            {language === 'he' ? 'מה תקבלו' : 'What You Get'}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className={`w-6 h-6 text-green-500 flex-shrink-0`} />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-br from-primary-50 to-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              {language === 'he' ? 'מוכנים להתחיל?' : 'Ready to Start?'}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'he' 
                ? 'בואו נדבר על איך אנחנו יכולים לעזור לכם'
                : 'Let\'s talk about how we can help you'}
            </p>
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-xl"
            >
              {language === 'he' ? 'צרו קשר עכשיו' : 'Contact Us Now'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
