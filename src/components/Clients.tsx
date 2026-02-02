const clients = [
  { name: 'TechBridge Solutions Ltd', logo: 'https://ui-avatars.com/api/?name=TB&background=0D47A1&color=fff&size=128&bold=true' },
  { name: 'QuantumLeap Innovations', logo: 'https://ui-avatars.com/api/?name=QL&background=C2185B&color=fff&size=128&bold=true' },
  { name: 'CloudNine Consulting', logo: 'https://ui-avatars.com/api/?name=CN&background=00897B&color=fff&size=128&bold=true' },
  { name: 'DataStream Analytics', logo: 'https://ui-avatars.com/api/?name=DS&background=6A1B9A&color=fff&size=128&bold=true' },
  { name: 'NextGen Enterprises', logo: 'https://ui-avatars.com/api/?name=NG&background=D84315&color=fff&size=128&bold=true' },
  { name: 'SmartFlow Systems', logo: 'https://ui-avatars.com/api/?name=SF&background=0277BD&color=fff&size=128&bold=true' },
  { name: 'Apex Digital Group', logo: 'https://ui-avatars.com/api/?name=AD&background=00695C&color=fff&size=128&bold=true' },
  { name: 'Visionary Tech Partners', logo: 'https://ui-avatars.com/api/?name=VT&background=5D4037&color=fff&size=128&bold=true' },
  { name: 'Innovate Pro Ltd', logo: 'https://ui-avatars.com/api/?name=IP&background=1565C0&color=fff&size=128&bold=true' },
  { name: 'FutureWorks Corporation', logo: 'https://ui-avatars.com/api/?name=FW&background=AD1457&color=fff&size=128&bold=true' },
  { name: 'Digital Horizon UK', logo: 'https://ui-avatars.com/api/?name=DH&background=2E7D32&color=fff&size=128&bold=true' },
  { name: 'Momentum Strategies', logo: 'https://ui-avatars.com/api/?name=MS&background=F57C00&color=fff&size=128&bold=true' },
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
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3 hover:-translate-y-1"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
