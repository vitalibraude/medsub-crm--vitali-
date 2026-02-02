import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Footer } from '../components/Footer';

export function AccessibilityStatement() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto py-20 px-4">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-8"
        >
          <ArrowRight className="w-5 h-5" />
          <span>{language === 'he' ? 'חזרה לדף הבית' : 'Back to Home'}</span>
        </Link>

        {language === 'he' ? (
          <>
            <h1 className="text-5xl font-bold mb-8 text-gray-900">הצהרת נגישות</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                VitalAI מחויבת להנגיש את שירותיה לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">מחויבות לנגישות</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                אנו מאמינים שהאינטרנט צריך להיות נגיש לכולם, ואנו עובדים ללא הרף כדי להבטיח שהאתר שלנו 
                יהיה נגיש ונוח לשימוש לכולם, ללא קשר ליכולות הטכנולוגיות או הפיזיות שלהם.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">תקנים והנחיות</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                אנו פועלים בהתאם לתקן הישראלי ת"י 5568 לנגישות תכנים באינטרנט ברמת AA, 
                ובהתאם להנחיות WCAG 2.1 של W3C.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">מאפייני נגישות באתר</h2>
              <ul className="list-disc pr-6 space-y-3 text-gray-700 mb-6">
                <li>ניווט באמצעות מקלדת</li>
                <li>תמיכה בתוכנות קורא מסך</li>
                <li>ניגודיות צבעים מתאימה</li>
                <li>אפשרות להגדלת טקסט</li>
                <li>תפריט נגישות ייעודי</li>
                <li>כותרות מובנות היררכית</li>
                <li>תיאורים חלופיים לתמונות</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">פניות והצעות לשיפור</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                אנו ממשיכים במאמצים לשפר את נגישות האתר. אם נתקלתם בבעיות נגישות או שיש לכם הצעות לשיפור, 
                נשמח לשמוע מכם:
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl mb-6">
                <p className="font-bold text-gray-900 mb-2">רכז נגישות:</p>
                <p className="text-gray-700">ויטלי פבלובסקי</p>
                <p className="text-gray-700">אימייל: vitalipavlovsk@gmail.com</p>
                <p className="text-gray-700">טלפון: 0545696851</p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">הגבלת אחריות</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                למרות מאמצינו להנגיש את כל הדפים באתר, ייתכן שחלקים מסוימים טרם הונגשו במלואם. 
                אנו ממשיכים בעבודה על שיפור הנגישות והתאמת האתר לתקנים המחמירים ביותר.
              </p>

              <p className="text-gray-600 italic mt-8">
                הצהרה זו עודכנה לאחרונה בתאריך: פברואר 2026
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-8 text-gray-900">Accessibility Statement</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                VitalAI is committed to making its services accessible to the entire population, including people with disabilities.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">Commitment to Accessibility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe the internet should be accessible to everyone, and we work continuously to ensure our website 
                is accessible and user-friendly for all, regardless of their technological or physical abilities.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">Standards and Guidelines</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We operate in accordance with Israeli Standard 5568 for web content accessibility at AA level, 
                and according to W3C WCAG 2.1 guidelines.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">Accessibility Features</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                <li>Keyboard navigation</li>
                <li>Screen reader support</li>
                <li>Appropriate color contrast</li>
                <li>Text enlargement option</li>
                <li>Dedicated accessibility menu</li>
                <li>Hierarchically structured headings</li>
                <li>Alternative text for images</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">Feedback and Suggestions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We continue our efforts to improve website accessibility. If you encounter accessibility issues or have suggestions for improvement, 
                we'd love to hear from you:
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl mb-6">
                <p className="font-bold text-gray-900 mb-2">Accessibility Coordinator:</p>
                <p className="text-gray-700">Vitali Pavlovski</p>
                <p className="text-gray-700">Email: vitalipavlovsk@gmail.com</p>
                <p className="text-gray-700">Phone: 0545696851</p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Despite our efforts to make all pages on the site accessible, some parts may not yet be fully accessible. 
                We continue to work on improving accessibility and adapting the site to the most stringent standards.
              </p>

              <p className="text-gray-600 italic mt-8">
                This statement was last updated: February 2026
              </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
