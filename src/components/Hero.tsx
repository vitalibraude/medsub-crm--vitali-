import { ArrowLeft } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          הפרטנרים שלכם לייעול תהליכי עבודה
          <br />
          <span className="text-primary-200">בעזרת טכנולוגיה</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-primary-100 max-w-3xl mx-auto">
          אנחנו מתמחים באינטגרציות, אוטומציות עסקיות, בינה מלאכותית ופתרונות טכנולוגיים מתקדמים
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
          >
            קבעו פגישת ייעוץ חינם
            <ArrowLeft className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
          >
            לשירותים שלנו
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
