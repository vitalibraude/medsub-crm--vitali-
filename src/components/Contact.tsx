import { useState } from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length !== 9 && digitsOnly.length !== 10) {
      setPhoneError('מספר טלפון חייב להכיל 9 או 10 ספרות');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhone(formData.phone)) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxkriOJuwF-Kwu-fl8VQbtc-EHyxEWcTH4LAKLP3wBF5s1x8l8vpJ1tQ8B2_AFpVU0cOA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('תודה! הפרטים נשלחו בהצלחה. ניצור איתך קשר בהקדם 🚀');
    } catch (error) {
      console.error('Error:', error);
      alert('אופס! משהו השתבש. נסה שוב או צור קשר בטלפון.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            בואו נדבר
          </h2>
          <p className="text-xl text-primary-100">
            מלאו את הפרטים ונחזור אליכם תוך 24 שעות
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">שם מלא</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">טלפון</label>
              <input
                type="tel"
                required
                className={`w-full px-4 py-3 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900`}
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (phoneError) validatePhone(e.target.value);
                }}
                onBlur={(e) => validatePhone(e.target.value)}
                placeholder="050-1234567"
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">אימייל</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">מה תרצו לספר לנו?</label>
            <textarea
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-gray-900"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'שולח...' : 'שליחה'}</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
