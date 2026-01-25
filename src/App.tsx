import React, { useState, useEffect } from 'react';
import { ViewState, Patient, SubscriptionStatus, PlanType, ActivityLog, KPIStats } from './types';
import { Dashboard } from './components/Dashboard';
import { PatientManager } from './components/PatientManager';
import { AutomationCenter } from './components/AutomationCenter';

// Mock Initial Data
const INITIAL_PATIENTS: Patient[] = [
  { id: '1', fullName: 'ישראל ישראלי', email: 'israel@example.com', phone: '050-1234567', status: SubscriptionStatus.ACTIVE, plan: PlanType.PREMIUM, joinDate: '2023-01-15', lastVisit: '2023-10-01', monthlyFee: 300, notes: 'לקוח ותיק, מרוצה בדרך כלל.' },
  { id: '2', fullName: 'שרה כהן', email: 'sara@example.com', phone: '052-7654321', status: SubscriptionStatus.FAILED_PAYMENT, plan: PlanType.BASIC, joinDate: '2023-05-20', lastVisit: '2023-09-15', monthlyFee: 150, notes: 'כרטיס אשראי פג תוקף.' },
  { id: '3', fullName: 'דוד לוי', email: 'david@example.com', phone: '054-1112223', status: SubscriptionStatus.PENDING, plan: PlanType.VIP, joinDate: '2023-11-01', lastVisit: '2023-11-01', monthlyFee: 500, notes: 'מחכה לאישור רפואי סופי.' },
  { id: '4', fullName: 'מיכל אברהם', email: 'michal@example.com', phone: '050-9998887', status: SubscriptionStatus.CANCELLED, plan: PlanType.BASIC, joinDate: '2022-08-10', lastVisit: '2023-02-14', monthlyFee: 150, notes: 'עברה דירה לצפון.' },
  { id: '5', fullName: 'יוסי יוסף', email: 'yossi@example.com', phone: '052-3334445', status: SubscriptionStatus.ACTIVE, plan: PlanType.PREMIUM, joinDate: '2023-03-10', lastVisit: '2023-10-20', monthlyFee: 300, notes: 'מתעניין בשדרוג ל-VIP.' },
];

const INITIAL_LOGS: ActivityLog[] = [
  { id: 'l1', timestamp: new Date().toISOString(), action: 'מערכת עלתה', details: 'MedSub CRM אותחל בהצלחה', type: 'info' },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [view, setView] = useState<ViewState>('dashboard');
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS);
  const [logs, setLogs] = useState<ActivityLog[]>(INITIAL_LOGS);
  const [stats, setStats] = useState<KPIStats>({ totalRevenue: 0, activePatients: 0, churnRate: 0, pendingActions: 0 });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow Hebrew 'ויטלי' or English 'Vitali'
    if ((username === 'Vitali' || username === 'ויטלי') && password === '1234') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  // Add Log Helper
  const addLog = (action: string, details: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const newLog: ActivityLog = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      action,
      details,
      type
    };
    setLogs(prev => [newLog, ...prev]);
  };

  // Recalculate Stats when patients change
  useEffect(() => {
    const active = patients.filter(p => p.status === SubscriptionStatus.ACTIVE).length;
    const cancelled = patients.filter(p => p.status === SubscriptionStatus.CANCELLED).length;
    const pending = patients.filter(p => p.status === SubscriptionStatus.PENDING || p.status === SubscriptionStatus.FAILED_PAYMENT).length;
    const totalRevenue = patients
      .filter(p => p.status === SubscriptionStatus.ACTIVE)
      .reduce((sum, p) => sum + p.monthlyFee, 0);
    
    // Simple Churn Calculation
    const totalEver = patients.length;
    const churn = totalEver > 0 ? Math.round((cancelled / totalEver) * 100) : 0;

    setStats({
      totalRevenue,
      activePatients: active,
      churnRate: churn,
      pendingActions: pending
    });
  }, [patients]);

  // Handlers
  const handleAddPatient = (newPatientData: Omit<Patient, 'id'>) => {
    const newPatient: Patient = { ...newPatientData, id: Math.random().toString(36).substr(2, 9) };
    setPatients(prev => [newPatient, ...prev]);
    addLog('מטופל חדש', `נוסף מטופל: ${newPatient.fullName}`, 'success');
  };

  const handleUpdatePatient = (id: string, updates: Partial<Patient>) => {
    setPatients(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handleDeletePatient = (id: string) => {
    const p = patients.find(p => p.id === id);
    if (p) {
      setPatients(prev => prev.filter(item => item.id !== id));
      addLog('מחיקת מטופל', `נמחק מטופל: ${p.fullName}`, 'warning');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans" dir="rtl">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border-t-4 border-vitali-500">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-vitali-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 shadow-lg transform -rotate-3">V</div>
            <h1 className="text-2xl font-bold text-gray-800">התחברות למערכת</h1>
            <p className="text-gray-500 text-sm mt-1">MedSub CRM</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">שם משתמש</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vitali-500 focus:border-transparent outline-none transition"
                placeholder="הכנס שם משתמש"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">סיסמה</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vitali-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>

            {loginError && (
              <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                שם משתמש או סיסמה שגויים
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-vitali-600 hover:bg-vitali-700 text-white font-medium py-2.5 rounded-lg transition shadow-md hover:shadow-lg transform active:scale-95"
            >
              כניסה
            </button>
          </form>
          
          <div className="mt-6 text-center text-xs text-gray-400">
            Vitali Edition v1.0
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans" dir="rtl">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-l border-gray-200 shadow-sm flex-shrink-0 z-10 flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center gap-2">
          <div className="w-8 h-8 bg-vitali-500 rounded-lg flex items-center justify-center text-white font-bold">V</div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">MedSub CRM</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          <button 
            onClick={() => setView('dashboard')}
            className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition ${
              view === 'dashboard' ? 'bg-vitali-50 text-vitali-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            📊 דשבורד ראשי
          </button>
          <button 
            onClick={() => setView('patients')}
            className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition ${
              view === 'patients' ? 'bg-vitali-50 text-vitali-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            👥 ניהול מטופלים
          </button>
          <button 
            onClick={() => setView('automation')}
            className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition ${
              view === 'automation' ? 'bg-vitali-50 text-vitali-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            ⚡ אוטומציות ו-AI
          </button>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
           <button 
             onClick={() => {
               setIsAuthenticated(false);
               setUsername('');
               setPassword('');
             }}
             className="w-full flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm transition"
           >
             🚪 התנתק
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {view === 'dashboard' && 'סקירה כללית'}
              {view === 'patients' && 'תיקי מטופלים'}
              {view === 'automation' && 'מרכז בקרה'}
            </h2>
            <p className="text-gray-500 text-sm mt-1">שלום, ויטלי</p>
          </div>
          <div className="flex gap-3">
             <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-600">
                📅 {new Date().toLocaleDateString('he-IL')}
             </div>
          </div>
        </header>

        {view === 'dashboard' && (
          <Dashboard stats={stats} logs={logs} patients={patients} />
        )}

        {view === 'patients' && (
          <PatientManager 
            patients={patients} 
            onAddPatient={handleAddPatient}
            onUpdatePatient={handleUpdatePatient}
            onDeletePatient={handleDeletePatient}
            onLog={addLog}
          />
        )}

        {view === 'automation' && (
          <AutomationCenter />
        )}
      </main>
    </div>
  );
}

export default App;