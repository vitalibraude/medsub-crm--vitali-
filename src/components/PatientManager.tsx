import React, { useState } from 'react';
import { Patient, SubscriptionStatus, PlanType } from '../types';
import { analyzePatientRisk, generateEngagementMessage } from '../services/geminiService';

interface PatientManagerProps {
  patients: Patient[];
  onAddPatient: (p: Omit<Patient, 'id'>) => void;
  onUpdatePatient: (id: string, updates: Partial<Patient>) => void;
  onDeletePatient: (id: string) => void;
  onLog: (action: string, details: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export const PatientManager: React.FC<PatientManagerProps> = ({ 
  patients, onAddPatient, onUpdatePatient, onDeletePatient, onLog 
}) => {
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analyzingId, setAnalyzingId] = useState<string | null>(null);
  const [generatedMessage, setGeneratedMessage] = useState<{ id: string, text: string } | null>(null);
  const [messageLoading, setMessageLoading] = useState<string | null>(null);

  // Form State
  const [newPatientName, setNewPatientName] = useState('');
  const [newPatientEmail, setNewPatientEmail] = useState('');
  const [newPatientPlan, setNewPatientPlan] = useState<PlanType>(PlanType.BASIC);

  const filteredPatients = patients.filter(p => 
    p.fullName.toLowerCase().includes(filter.toLowerCase()) ||
    p.email.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPatient({
      fullName: newPatientName,
      email: newPatientEmail,
      phone: '050-0000000',
      status: SubscriptionStatus.ACTIVE,
      plan: newPatientPlan,
      joinDate: new Date().toISOString().split('T')[0],
      lastVisit: new Date().toISOString().split('T')[0],
      monthlyFee: newPatientPlan === PlanType.VIP ? 500 : newPatientPlan === PlanType.PREMIUM ? 300 : 150,
      notes: 'New patient'
    });
    setIsModalOpen(false);
    setNewPatientName('');
    setNewPatientEmail('');
  };

  const runRiskAnalysis = async (patient: Patient) => {
    setAnalyzingId(patient.id);
    const insight = await analyzePatientRisk(patient);
    onUpdatePatient(patient.id, { 
      riskScore: insight.riskLevel, 
      aiInsight: insight.recommendation 
    });
    onLog('AI Analysis', `Risk analysis ran for ${patient.fullName}`, 'info');
    setAnalyzingId(null);
  };

  const draftMessage = async (patient: Patient) => {
    setMessageLoading(patient.id);
    const msg = await generateEngagementMessage(patient, 'friendly');
    setGeneratedMessage({ id: patient.id, text: msg });
    onLog('AI Draft', `Message drafted for ${patient.fullName}`, 'info');
    setMessageLoading(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="חיפוש מטופל..."
            className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-vitali-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-vitali-600 hover:bg-vitali-700 text-white px-4 py-2 rounded-lg shadow transition flex items-center gap-2"
        >
          <span>+</span> הוסף מטופל
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">שם מלא</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">תוכנית</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">סטטוס</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">AI ניתוח סיכון</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">פעולות</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPatients.map(patient => (
                <React.Fragment key={patient.id}>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{patient.fullName}</div>
                      <div className="text-sm text-gray-500">{patient.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        patient.plan === PlanType.VIP ? 'bg-purple-100 text-purple-800' :
                        patient.plan === PlanType.PREMIUM ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {patient.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        patient.status === SubscriptionStatus.ACTIVE ? 'bg-green-100 text-green-800' :
                        patient.status === SubscriptionStatus.FAILED_PAYMENT ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {patient.riskScore ? (
                        <div>
                          <span className={`font-bold ${
                            patient.riskScore === 'High' ? 'text-red-600' :
                            patient.riskScore === 'Medium' ? 'text-orange-500' : 'text-green-600'
                          }`}>
                            {patient.riskScore} Risk
                          </span>
                          <p className="text-xs text-gray-500 mt-1 max-w-[200px]">{patient.aiInsight}</p>
                        </div>
                      ) : (
                        <button 
                          onClick={() => runRiskAnalysis(patient)}
                          disabled={analyzingId === patient.id}
                          className="text-xs text-vitali-600 hover:text-vitali-800 underline disabled:opacity-50"
                        >
                          {analyzingId === patient.id ? 'מנתח...' : 'הפעל ניתוח AI'}
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => draftMessage(patient)}
                          disabled={messageLoading === patient.id}
                          className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-2 py-1 rounded"
                        >
                          {messageLoading === patient.id ? '...' : '✉️ הודעה'}
                        </button>
                        <button 
                          onClick={() => {
                            if(window.confirm('למחוק מטופל?')) onDeletePatient(patient.id);
                          }}
                          className="text-red-600 hover:text-red-900 bg-red-50 px-2 py-1 rounded"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Generated Message Area */}
                  {generatedMessage?.id === patient.id && (
                    <tr className="bg-indigo-50">
                      <td colSpan={5} className="px-6 py-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h4 className="text-xs font-bold text-indigo-800 uppercase mb-1">טיוטת הודעה (AI Generated)</h4>
                            <p className="text-sm text-gray-800 bg-white p-3 rounded border border-indigo-100">
                              {generatedMessage.text}
                            </p>
                          </div>
                          <button 
                            onClick={() => setGeneratedMessage(null)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            ✕
                          </button>
                          <button
                            onClick={() => {
                              onLog('Message Sent', `Sent WhatsApp to ${patient.fullName}`, 'success');
                              setGeneratedMessage(null);
                              alert('הודעה נשלחה בהצלחה (סימולציה)');
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded self-end"
                          >
                            שלח כעת
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {filteredPatients.length === 0 && (
            <div className="p-8 text-center text-gray-500">לא נמצאו מטופלים התואמים לחיפוש.</div>
          )}
        </div>
      </div>

      {/* Add Patient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">הוספת מנוי חדש</h2>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                <input required type="text" className="w-full border rounded-lg p-2" 
                  value={newPatientName} onChange={e => setNewPatientName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                <input required type="email" className="w-full border rounded-lg p-2" 
                  value={newPatientEmail} onChange={e => setNewPatientEmail(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">תוכנית</label>
                <select className="w-full border rounded-lg p-2" 
                  value={newPatientPlan} onChange={e => setNewPatientPlan(e.target.value as PlanType)}>
                  {Object.values(PlanType).map(plan => (
                    <option key={plan} value={plan}>{plan}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">ביטול</button>
                <button type="submit" className="bg-vitali-600 text-white px-4 py-2 rounded-lg hover:bg-vitali-700">שמור</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};