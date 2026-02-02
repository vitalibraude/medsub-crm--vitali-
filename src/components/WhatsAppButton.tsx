import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '972545696851';
  const message = 'היי, אשמח לקבל מידע נוסף';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group hover:scale-110 animate-bounce"
      aria-label="פתח שיחה ב-WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        שלח לנו הודעה
      </span>
    </a>
  );
}
