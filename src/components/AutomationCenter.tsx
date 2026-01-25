import React from 'react';

export const AutomationCenter: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-3xl">🟣</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Make.com Integration</h3>
        <p className="text-gray-500 mb-6 text-sm">
          סנכרון אוטומטי של לידים חדשים המגיעים מדפי נחיתה ישירות למערכת ה-CRM.
        </p>
        <div className="flex gap-2 items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Active Webhook
        </div>
        <button 
          onClick={() => alert('Simulation: Webhook triggered! Syncing latest leads...')}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          בצע סנכרון יזום
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-3xl">📊</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Monday.com Sync</h3>
        <p className="text-gray-500 mb-6 text-sm">
          עדכון סטטוסים של משימות צוות בלוחות Monday עבור מטופלים בסיכון גבוה.
        </p>
        <div className="flex gap-2 items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Connected via API
        </div>
        <button 
          onClick={() => alert('Simulation: Updating Monday.com boards with high risk patients...')}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          עדכן משימות
        </button>
      </div>

      <div className="md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">אוטומציה חכמה</h3>
          <p className="text-gray-300 max-w-xl mb-6">
            המערכת מבצעת סריקה יומית אוטומטית של כל המנויים, מזהה דפוסי נטישה ושולחת התראות למנהל המרפאה לפני שהלקוח עוזב.
          </p>
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
              <div className="text-xs text-gray-400">סריקה אחרונה</div>
              <div className="font-mono">היום, 09:00</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
              <div className="text-xs text-gray-400">תובנות חדשות</div>
              <div className="font-mono">12 התראות</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-vitali-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
};