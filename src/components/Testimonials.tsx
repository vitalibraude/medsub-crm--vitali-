import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'דוד כהן',
    company: 'מנכ"ל חברת טכנולוגיה',
    content: 'העבודה עם Vitali הייתה מדהימה. הם הבינו בדיוק מה אנחנו צריכים והביאו לנו פתרון שחסך לנו שעות עבודה בכל יום.',
    rating: 5,
  },
  {
    name: 'רחל לוי',
    company: 'בעלת עסק e-commerce',
    content: 'האוטומציות שבנו יחד שינו לנו את העסק. המכירות עלו ב-40% והזמן שלנו התפנה לעסוק בפיתוח ולא בניהול יומיומי.',
    rating: 5,
  },
  {
    name: 'יוסי אברהם',
    company: 'סטארטאפ טכנולוגי',
    content: 'צוות מקצועי, יצירתי ומסור. כל פגישה איתם הייתה מלאת ערך והפתרונות שהם הביאו היו בדיוק מה שחיפשנו.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            הלקוחות שלנו מדברים בעד עצמם
          </h2>
          <p className="text-xl text-gray-600">
            אנחנו מקפידים לקבל משוב מהלקוחות שלנו ולהשתפר כל הזמן
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
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
