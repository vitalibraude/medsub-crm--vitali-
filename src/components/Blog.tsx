import { Calendar, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Blog() {
  const { t, language } = useLanguage();

  const blogPosts = language === 'he' ? [
    {
      title: 'כיצד אוטומציה עסקית חוסכת לכם 20 שעות עבודה בשבוע',
      excerpt: 'גלו איך עסקים מובילים משתמשים באוטומציה כדי לפנות זמן לפעילות אסטרטגית ולהגדיל את הרווחיות.',
      date: '5 ינואר 2026',
      category: 'אוטומציה',
    },
    {
      title: '5 טעויות נפוצות בהטמעת מערכת CRM - ואיך להימנע מהן',
      excerpt: 'למדו מהטעויות של אחרים וחסכו זמן וכסף בהטמעת מערכת ניהול קשרי לקוחות בעסק שלכם.',
      date: '29 דצמבר 2025',
      category: 'CRM',
    },
    {
      title: 'בינה מלאכותית בשירות העסק הקטן - המדריך המלא',
      excerpt: 'AI זה לא רק לחברות הענק. גלו כיצד גם עסקים קטנים ובינוניים יכולים לנצל את כוח הבינה המלאכותית.',
      date: '22 דצמבר 2025',
      category: 'בינה מלאכותית',
    },
    {
      title: 'WhatsApp Business API - איך להפוך את הלקוחות שלכם למעריצים',
      excerpt: 'מדריך מעשי לשימוש ב-WhatsApp Business API לשיפור שירות הלקוחות והגדלת המכירות.',
      date: '15 דצמבר 2025',
      category: 'אוטומציה',
    },
    {
      title: 'אינטגרציות בין מערכות - הסוד להצלחה עסקית',
      excerpt: 'למה חיבור נכון בין המערכות שלכם זה לא nice-to-have אלא must-have בעידן הדיגיטלי.',
      date: '8 דצמבר 2025',
      category: 'טכנולוגיה',
    },
    {
      title: 'צ\'אט-בוט שעובד 24/7 - האם זה מתאים לעסק שלכם?',
      excerpt: 'כל מה שצריך לדעת על בוטים חכמים, מתי להשתמש בהם ואיך להטמיע אותם נכון.',
      date: '1 דצמבר 2025',
      category: 'בוטים',
    },
    {
      title: 'Google Workspace vs Microsoft 365 - מה מתאים יותר לעסק שלכם?',
      excerpt: 'השוואה מקיפה בין שתי הפלטפורמות המובילות לניהול עסקי בענן.',
      date: '24 נובמבר 2025',
      category: 'כלים דיגיטליים',
    },
    {
      title: 'מערכת ERP - מתי הגיע הזמן לעשות את הקפיצה?',
      excerpt: 'איתותי אזהרה שמעידים שהעסק שלכם מוכן למערכת ERP וכיצד לבחור את הנכונה.',
      date: '17 נובמבר 2025',
      category: 'ERP',
    },
    {
      title: 'דפי נחיתה שממירים - 7 עקרונות מוכחים',
      excerpt: 'המדריך המעשי לבניית דפי נחיתה שהופכים מבקרים ללקוחות משלמים.',
      date: '10 נובמבר 2025',
      category: 'שיווק דיגיטלי',
    },
    {
      title: 'האוטומציה הבאה שלכם - מדריך צעד אחר צעד',
      excerpt: 'איך לזהות את התהליכים המתאימים לאוטומציה ולהתחיל את המסע שלכם להצלחה.',
      date: '3 נובמבר 2025',
      category: 'אוטומציה',
    },
  ] : [
    {
      title: 'How Business Automation Saves You 20 Hours of Work Per Week',
      excerpt: 'Discover how leading businesses use automation to free up time for strategic activities and increase profitability.',
      date: 'January 5, 2026',
      category: 'Automation',
    },
    {
      title: '5 Common Mistakes in CRM Implementation - and How to Avoid Them',
      excerpt: 'Learn from others\' mistakes and save time and money implementing a customer relationship management system in your business.',
      date: 'December 29, 2025',
      category: 'CRM',
    },
    {
      title: 'Artificial Intelligence for Small Business - The Complete Guide',
      excerpt: 'AI isn\'t just for big corporations. Discover how small and medium businesses can harness the power of artificial intelligence.',
      date: 'December 22, 2025',
      category: 'Artificial Intelligence',
    },
    {
      title: 'WhatsApp Business API - How to Turn Your Customers into Fans',
      excerpt: 'A practical guide to using WhatsApp Business API to improve customer service and increase sales.',
      date: 'December 15, 2025',
      category: 'Automation',
    },
    {
      title: 'System Integrations - The Secret to Business Success',
      excerpt: 'Why connecting your systems correctly is not a nice-to-have but a must-have in the digital age.',
      date: 'December 8, 2025',
      category: 'Technology',
    },
    {
      title: 'Chatbot Working 24/7 - Is It Right for Your Business?',
      excerpt: 'Everything you need to know about smart bots, when to use them and how to implement them correctly.',
      date: 'December 1, 2025',
      category: 'Bots',
    },
    {
      title: 'Google Workspace vs Microsoft 365 - Which Suits Your Business Better?',
      excerpt: 'A comprehensive comparison between the two leading platforms for cloud business management.',
      date: 'November 24, 2025',
      category: 'Digital Tools',
    },
    {
      title: 'ERP System - When Is It Time to Make the Leap?',
      excerpt: 'Warning signs that your business is ready for an ERP system and how to choose the right one.',
      date: 'November 17, 2025',
      category: 'ERP',
    },
    {
      title: 'Landing Pages That Convert - 7 Proven Principles',
      excerpt: 'The practical guide to building landing pages that turn visitors into paying customers.',
      date: 'November 10, 2025',
      category: 'Digital Marketing',
    },
    {
      title: 'Your Next Automation - A Step-by-Step Guide',
      excerpt: 'How to identify processes suitable for automation and start your journey to success.',
      date: 'November 3, 2025',
      category: 'Automation',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('blogTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('blogSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-primary-600 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t('blogReadMore')}
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg">
            {t('blogViewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}
