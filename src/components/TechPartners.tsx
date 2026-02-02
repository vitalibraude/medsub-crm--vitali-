import { useLanguage } from '../i18n/LanguageContext';

const partners = [
  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/412991' },
  { name: 'Claude AI', logo: 'https://cdn.simpleicons.org/anthropic/191919' },
  { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/google/4285F4' },
  { name: 'Meta Business', logo: 'https://cdn.simpleicons.org/meta/0668E1' },
  { name: 'WhatsApp Business', logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Make.com', logo: 'https://cdn.simpleicons.org/make/6D00CC' },
  { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/monday/FF3D57' },
  { name: 'Asana', logo: 'https://cdn.simpleicons.org/asana/F06A6A' },
  { name: 'ClickUp', logo: 'https://cdn.simpleicons.org/clickup/7B68EE' },
  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0' },
  { name: 'SAP', logo: 'https://cdn.simpleicons.org/sap/0FAAFF' },
  { name: 'Oracle', logo: 'https://cdn.simpleicons.org/oracle/F80000' },
  { name: 'Priority', logo: 'https://cdn.simpleicons.org/databricks/FF3621' },
  { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
];

export function TechPartners() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t('techPartnersTitle')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3 group hover:-translate-y-1"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium text-gray-700 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
