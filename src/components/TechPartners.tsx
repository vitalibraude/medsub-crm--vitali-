const partners = [
  { name: 'OpenAI', logo: '🤖' },
  { name: 'Claude AI', logo: '🧠' },
  { name: 'Google Workspace', logo: '📧' },
  { name: 'Meta Business', logo: '📱' },
  { name: 'WhatsApp Business', logo: '💬' },
  { name: 'Make.com', logo: '⚡' },
];

export function TechPartners() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          שותפים טכנולוגיים
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3 group hover:-translate-y-1"
            >
              <span className="text-5xl group-hover:scale-110 transition-transform">
                {partner.logo}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
