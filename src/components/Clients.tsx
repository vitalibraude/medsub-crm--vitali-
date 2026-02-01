const clients = [
  'חברת טכנולוגיה א׳',
  'סטארטאפ ב׳',
  'עסק קמעונאי ג׳',
  'חברת יעוץ ד׳',
  'משרד עורכי דין ה׳',
  'קליניקה רפואית ו׳',
  'חברת נדל״ן ז׳',
  'חברת שיווק ח׳',
  'מסעדות רשת ט׳',
  'חברת פיננסים י׳',
  'אקדמיה יא׳',
  'עמותה יב׳',
];

export function Clients() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          הלקוחות שלנו
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center text-center text-sm font-medium text-gray-700 hover:-translate-y-1"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
