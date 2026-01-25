import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Patient, KPIStats, ActivityLog } from '../types';
import { SubscriptionStatus } from '../types';

interface DashboardProps {
  stats: KPIStats;
  logs: ActivityLog[];
  patients: Patient[];
}

export const Dashboard: React.FC<DashboardProps> = ({ stats, logs, patients }) => {
  
  // Calculate status distribution for the chart
  const data = [
    { name: 'Active', value: patients.filter(p => p.status === SubscriptionStatus.ACTIVE).length },
    { name: 'Pending', value: patients.filter(p => p.status === SubscriptionStatus.PENDING).length },
    { name: 'Payment Failed', value: patients.filter(p => p.status === SubscriptionStatus.FAILED_PAYMENT).length },
    { name: 'Cancelled', value: patients.filter(p => p.status === SubscriptionStatus.CANCELLED).length },
  ];

  const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#6b7280'];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-vitali-500">
          <p className="text-gray-500 text-sm">הכנסות חודשיות</p>
          <h3 className="text-2xl font-bold text-gray-800">₪{stats.totalRevenue.toLocaleString()}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-emerald-500">
          <p className="text-gray-500 text-sm">מנויים פעילים</p>
          <h3 className="text-2xl font-bold text-gray-800">{stats.activePatients}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-red-400">
          <p className="text-gray-500 text-sm">אחוז נטישה (Churn)</p>
          <h3 className="text-2xl font-bold text-gray-800">{stats.churnRate}%</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-orange-400">
          <p className="text-gray-500 text-sm">פעולות נדרשות</p>
          <h3 className="text-2xl font-bold text-gray-800">{stats.pendingActions}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-lg font-bold text-gray-800 mb-4">התפלגות סטטוס מנויים</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">לוג פעילות אחרונה</h3>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {logs.length === 0 && <p className="text-gray-400 text-sm">אין פעילות להצגה.</p>}
            {logs.map(log => (
              <div key={log.id} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0">
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                  log.type === 'success' ? 'bg-green-500' :
                  log.type === 'error' ? 'bg-red-500' :
                  log.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                }`} />
                <div>
                  <p className="text-sm font-medium text-gray-800">{log.action}</p>
                  <p className="text-xs text-gray-500">{log.details}</p>
                  <span className="text-[10px] text-gray-400">{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};