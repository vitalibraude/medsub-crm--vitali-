import { Target, Users, FileText, Database, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    icon: Target,
    title: 'אסטרטגיית שיווק',
    description: 'בניית אסטרטגיית שיווק מקיפה המותאמת למטרות העסק שלכם ולקהל היעד',
  },
  {
    icon: Users,
    title: 'קליטה וניהול לידים',
    description: 'מערכת חכמה לקליטת לידים, תיעוד מלא ויצירת קשר אוטומטית עם כל לקוח פוטנציאלי',
  },
  {
    icon: FileText,
    title: 'חוזים דיגיטליים',
    description: 'כתיבה ובנייה של חוזים דיגיטליים בקלות, מותאמים אישית לצרכים שלכם',
  },
  {
    icon: Database,
    title: 'ניהול מידע מרכזי',
    description: 'לא עוד אקסלים מיושנים! מערכת מרכזית לניהול כל הנתונים, קבלות וחשבוניות',
  },
  {
    icon: CheckCircle2,
    title: 'ליווי מתמיד',
    description: 'אנחנו איתכם בכל שלב - מהייעוץ הראשוני ועד הטמעה מלאה והצלחה',
  },
];

export function Process() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ייעוץ, פתרון ובנייה לכל שלב בעסק שלכם
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            אנחנו לא רק בונים מערכות - אנחנו שותפים למסע שלכם. 
            מבניית אסטרטגיה ועד ניהול מלא של כל המידע העסקי, אנחנו כאן בשבילכם.
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
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            סוף לאקסלים ושיטות מיושנות!
          </h3>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            עברו למערכת מודרנית שמנהלת עבורכם את כל הנתונים, הלידים, החוזים, הקבלות והחשבוניות במקום אחד.
            כל מה שצריך לנהל עסק מצליח - בלחיצת כפתור.
          </p>
          <button className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl">
            בואו נתחיל את המסע
          </button>
        </div>
      </div>
    </section>
  );
}
