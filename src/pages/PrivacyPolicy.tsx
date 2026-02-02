import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
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

        <h1 className="text-5xl font-bold mb-8 text-gray-900">
          {language === 'he' ? 'מדיניות פרטיות ותנאי שימוש' : 'Privacy Policy & Terms of Use'}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          {language === 'he' ? (
            <>
              <p className="text-xl leading-relaxed mb-8">
                מאחר שהגוף (עסק, תאגיד, חברה וכד') VitalAI (להלן "החברה"), מכבדת את פרטיות המשתמשים באתרי האינטרנט שהיא מנהלת ומפעילה (להלן-"האתרים"), החליטה החברה לפרסם את מדיניותה ביחס להגנת הפרטיות באתרים, והיא מתחייבת כלפי המשתמש לקיים מדיניות זו.
              </p>

              <p className="mb-6">
                מטרת המדיניות להסביר מהם נוהגי החברה ביחס לפרטיות המשתמשים באתרים, וכיצד משתמשת החברה במידע, הנמסר לה על-ידי המשתמשים באתרים או הנאסף על-ידה בעת השימוש באתרים.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">כללי</h2>
              <p className="mb-6">
                בעת שימוש בשירותי האתרים נאסף מידע עליך. חלק מהמידע מזהה אותך באופן אישי, כלומר בשמו ובכתובתך, מוצרים ושירותים שרכשת או ביקשת למכור, אמצעי התשלום ששימשו אותך, וכיו"ב. זהו המידע שאתה מוסר ביודעין, לדוגמה בעת שתירשם לשירותים באתרים. חלק מהמידע אינו מזהה אותך אישית ואינו נשמר ביחד עם פרטיך. זהו מידע סטטיסטי ומצטבר. לדוגמה, פרסומות שקראת באתר, העמודים שבהם צפית, ההצעות והשירותים שעניינו אותך, כתובת האינטרנט (IP) שממנה פנית ועוד.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">רישום לשירותים</h2>
              <p className="mb-6">
                ככל שנדרשים פרטים אישיים בעת רישום לשירותים באתרים או בעת רכישת מוצרים בהם, החברה תבקש ממך רק את המידע הנחוץ במישרין לאספקת השירותים או לרכישת המוצרים.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">מאגר המידע</h2>
              <p className="mb-6">
                הנתונים שנאספו יישמרו במאגר המידע של החברה ובאחריותה.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">השימוש במידע</h2>
              <p className="mb-4">השימוש במידע שנאסף, ייעשה רק על פי מדיניות פרטיות זו או על פי הוראות כל דין, על מנת:</p>
              <ul className="list-disc pr-6 space-y-2 mb-6">
                <li>לאפשר להשתמש בשירותים שונים באתרים</li>
                <li>לשפר ולהעשיר את השירותים והתכנים המוצעים באתרים</li>
                <li>לשנות או לבטל שירותים ותכנים קיימים</li>
                <li>לצורך רכישת מוצרים ושירותים באתרים – לרבות פרסום מידע ותכנים</li>
                <li>כדי להתאים את המודעות שיוצגו בעת הביקור באתרים לתחומי ההתעניינות שלך</li>
              </ul>
              <p className="mb-6">
                המידע שישמש את החברה יהיה בעיקרו מידע סטטיסטי, שאינו מזהה אישית.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">דיוור ישיר אלקטרוני</h2>
              <p className="mb-6">
                החברה מעונינת לשלוח אליך מדי פעם בדואר אלקטרוני מידע בדבר שירותיה וכן מידע שיווקי ופרסומי. מידע כזה ישוגר אליך רק אם נתת הסכמה מפורשת לכך, ובכל עת תוכל לבטל את הסכמתך ולחדול מקבלתו.
              </p>
              <p className="mb-6">
                החברה לא תמסור את פרטיך האישיים למפרסמים. עם זאת, היא רשאית להעביר מידע סטטיסטי על פעילות המשתמשים באתרים. מידע סטטיסטי שיועבר לא יזהה אותך אישית.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">מסירת מידע לצד שלישי</h2>
              <p className="mb-4">החברה לא תעביר לצדדים שלישיים את פרטיך האישיים והמידע שנאסף על פעילותך באתר אלא במקרים המפורטים להלן:</p>
              <ul className="list-disc pr-6 space-y-2 mb-6">
                <li>אם תרכוש מוצרים ושירותים מצדדים שלישיים המציעים אותם למכירה באמצעות האתרים, יועבר לצדדים שלישיים אלה המידע הדרוש להם לשם השלמת תהליך הרכישה</li>
                <li>במקרה של מחלוקת משפטית בינך לבין החברה שתחייב חשיפת פרטיך</li>
                <li>אם תבצע באתרים, פעולות שבניגוד לדין</li>
                <li>אם יתקבל צו שיפוטי המורה למסור את פרטיך או המידע אודותיך לצד שלישי</li>
                <li>אם החברה תמכור או תעביר בכל צורה שהיא את פעילות האתרים לתאגיד כלשהו – וכן במקרה שתתמזג עם גוף אחר או תמזג את פעילות האתרים עם פעילותו של צד שלישי, ובלבד שתאגיד זה יקבל על עצמו כלפיך את הוראות מדיניות פרטיות זו</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4">Cookies</h2>
              <p className="mb-6">
                אתר החברה משתמש ב"עוגיות" (Cookies) לצורך תפעולם השוטף והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר, לאימות פרטים, כדי להתאים את האתר להעדפותיך האישיות ולצורכי אבטחת מידע.
              </p>
              <p className="mb-6">
                דפדפנים מודרניים כוללים אפשרות להימנע מקבלת Cookies. אם אינך יודע כיצד לעשות זאת, בדוק בקובץ העזרה של הדפדפן שבו אתה משתמש.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">פרסומות של צדדים שלישיים</h2>
              <p className="mb-6">
                החברה מתירה לחברות אחרות לנהל את מערך הפרסומות באתרים. המודעות שבהן אתה צופה בעת הביקור באתרי מגיעות ממחשביהן של אותן חברות. כדי לנהל את הפרסומות שלהן, חברות אלה מציבות Cookies במחשבך. ה-Cookies מאפשרים להן לאסוף מידע על האתרים שבהם צפית בפרסומות שהציבו ועל אילו פרסומות הקשת. השימוש שחברות אלה עושות ב-Cookies כפוף למדיניות הפרטיות שלהן ולא למדיניות הפרטיות של החברה.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">אבטחת מידע</h2>
              <p className="mb-6">
                החברה מיישמת באתריה מערכות ונהלים עדכניים לאבטחת מידע. בעוד שמערכות ונהלים אלה מצמצמים את הסיכונים לחדירה בלתי-מורשית, אין הם מעניקים בטחון מוחלט. לכן, החברה לא מתחייבת ששירותיה יהיו חסינים באופן מוחלט מפני גישה בלתי-מורשית למידע המאוחסן בהם.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">זכות לעיין במידע</h2>
              <p className="mb-6">
                על-פי חוק הגנת הפרטיות, התשמ"א – 1981, כל אדם זכאי לעיין במידע שעליו המוחזק במאגר מידע. אדם שעיין במידע שעליו ומצא כי אינו נכון, שלם, ברור או מעודכן, רשאי לפנות לבעל מאגר המידע בבקשה לתקן את המידע או למוחקו.
              </p>
              <p className="mb-6">
                פנייה כזאת יש להפנות אל: <a href="mailto:vitalipavlovsk@gmail.com" className="text-primary-600 hover:text-primary-700">vitalipavlovsk@gmail.com</a>
              </p>
              <p className="mb-6">
                בנוסף, אם המידע שבמאגרי החברה משמש לצורך פניה אישית אליך, אתה זכאי על-פי חוק הגנת הפרטיות, התשמ"א- 1981 לדרוש בכתב שהמידע המתייחס אליך יימחק ממאגר המידע.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">שינויים במדיניות הפרטיות</h2>
              <p className="mb-6">
                בכל מקרה בו יבוצעו במדיניות זו שינויים מהותיים בהוראות שעניינן השימוש במידע אישי שמסרת, תפורסם על-כך הודעה בעמוד הבית של האתרים.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">הצהרה בדבר מערכות והטמעות</h2>
              <p className="mb-6">
                איננו שותפים רשמיים של חלק מהתוכנות המוצגות באתר. אנחנו יוצרים קשר עם החברות ועם השותפים ונותנים ומספקים הטמעות מלאות בהתאם למדיניות של כל אחת מן החברות המצוינות.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">תנאי שימוש</h2>
              <ul className="list-disc pr-6 space-y-2 mb-6">
                <li>השימוש באתר על תכניו והשירותים הניתנים בו, מוצעים לך בכפוף לקבלתך את כל התנאים הכלולים בתקנון זה</li>
                <li>הגלישה באתר ו/או הרשמתך כמנוי לקבלת שירותיו, ייחשבו להסכמה מצדך לתנאים אלה</li>
                <li>הנהלת האתר רשאית להשעות, לחסום או להפסיק לאלתר את גישת הגולש לשירות אם יפר את תנאי התקנון</li>
                <li>הנהלת האתר רשאית לעדכן את תנאי התקנון מעת לעת</li>
                <li>אין לעשות באתר או באמצעותו כל שימוש למטרות בלתי חוקיות</li>
                <li>ההרשמה מיועדת ומותרת לגילאי 18 ומעלה בלבד. בהרשמתך הנך מצהיר כי גילך אכן מעל 18 שנה</li>
                <li>אין לרשום אדם אחר שלא בהסכמתו ו/או ללא נוכחותו מול המסך בשעת הרישום ולאחר שהוסברו לו כל תנאי תקנון זה</li>
                <li>הנך מצהיר כי ידוע לך שלהנהלת האתר אין כל יכולת או אפשרות לבדוק, לנפות או לסנן את הנרשמים לאתר</li>
                <li>כל זכויות הקניין הרוחני וזכויות היוצרים בקשר לאתר הם של הנהלת האתר</li>
                <li>הימצאותם של קישורים ("לינקים") לאתרים אחרים אינם מהווים ערובה לתכנים באתרים אלה מבחינת מהימנותם, שלמותם, או מכל בחינה אחרת</li>
                <li>על התקנון יחול הדין הישראלי. סמכות השיפוט לגביו לבתי המשפט המוסמכים בישראל</li>
              </ul>

              <div className="bg-primary-50 p-6 rounded-xl mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">יצירת קשר</h3>
                <p className="mb-2"><strong>ויטלי פבלובסקי</strong></p>
                <p className="mb-2">
                  אימייל: <a href="mailto:vitalipavlovsk@gmail.com" className="text-primary-600 hover:text-primary-700">vitalipavlovsk@gmail.com</a>
                </p>
                <p>טלפון: 0545696851</p>
              </div>

              <p className="text-gray-600 italic mt-8">
                מסמך זה עודכן לאחרונה: פברואר 2026
              </p>
            </>
          ) : (
            <>
              <p className="text-xl leading-relaxed mb-8">
                VitalAI (hereinafter "the Company") respects the privacy of users on the websites it manages and operates (hereinafter "the Sites"). The Company has decided to publish its policy regarding privacy protection on the Sites and is committed to maintaining this policy.
              </p>

              <p className="mb-6">
                The purpose of this policy is to explain the Company's practices regarding user privacy on the Sites, and how the Company uses information provided by users or collected during use of the Sites.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">General</h2>
              <p className="mb-6">
                When using the Site's services, information about you is collected. Some of this information identifies you personally, such as your name and address, products and services you purchased or requested to sell, payment methods you used, etc. This is information you knowingly provide, for example when registering for services on the Sites. Some information does not identify you personally and is not stored with your details. This is statistical and aggregate information, such as advertisements you read on the site, pages you viewed, offers and services that interested you, the IP address from which you accessed, etc.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Service Registration</h2>
              <p className="mb-6">
                When personal details are required when registering for services on the Sites or purchasing products, the Company will only request information directly necessary for providing services or purchasing products.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Data Storage</h2>
              <p className="mb-6">
                The collected data will be stored in the Company's database and under its responsibility.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Use of Information</h2>
              <p className="mb-4">Use of collected information will only be made according to this privacy policy or according to any law, in order to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Enable use of various services on the Sites</li>
                <li>Improve and enrich services and content offered on the Sites</li>
                <li>Change or cancel existing services and content</li>
                <li>For purchasing products and services on the Sites</li>
                <li>To tailor advertisements displayed during site visits to your areas of interest</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4">Electronic Direct Marketing</h2>
              <p className="mb-6">
                The Company wishes to occasionally send you information about its services and marketing and advertising information by email. Such information will only be sent if you have given explicit consent, and you can cancel your consent at any time.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Cookies</h2>
              <p className="mb-6">
                The Company's website uses "cookies" for routine and proper operation, including collecting statistical data about site usage, verifying details, adapting the site to your personal preferences, and for information security purposes.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Information Security</h2>
              <p className="mb-6">
                The Company implements up-to-date information security systems and procedures on its sites. While these systems and procedures reduce the risks of unauthorized intrusion, they do not provide absolute security.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Right to Access Information</h2>
              <p className="mb-6">
                According to the Privacy Protection Law, 1981, every person is entitled to review information about them held in a database. A person who reviews their information and finds it incorrect, incomplete, unclear or outdated may request the database owner to correct or delete the information.
              </p>
              <p className="mb-6">
                Such requests should be directed to: <a href="mailto:vitalipavlovsk@gmail.com" className="text-primary-600 hover:text-primary-700">vitalipavlovsk@gmail.com</a>
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Systems and Implementation Disclaimer</h2>
              <p className="mb-6">
                We are not official partners of some of the software displayed on the site. We contact the companies and their partners and provide complete implementations according to the policies of each of the mentioned companies.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Terms of Use</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Use of the site and its services is subject to acceptance of all terms included in these regulations</li>
                <li>Browsing the site and/or registering as a subscriber will be considered consent to these terms</li>
                <li>Site management may suspend, block or immediately terminate user access if terms are violated</li>
                <li>Registration is intended and permitted for ages 18 and over only</li>
                <li>All intellectual property and copyright rights related to the site belong to site management</li>
                <li>Israeli law applies to these regulations</li>
              </ul>

              <div className="bg-primary-50 p-6 rounded-xl mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact</h3>
                <p className="mb-2"><strong>Vitali Pavlovski</strong></p>
                <p className="mb-2">
                  Email: <a href="mailto:vitalipavlovsk@gmail.com" className="text-primary-600 hover:text-primary-700">vitalipavlovsk@gmail.com</a>
                </p>
                <p>Phone: 0545696851</p>
              </div>

              <p className="text-gray-600 italic mt-8">
                This document was last updated: February 2026
              </p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
