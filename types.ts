export enum SubscriptionStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  CANCELLED = 'Cancelled',
  FAILED_PAYMENT = 'Failed Payment'
}

export enum PlanType {
  BASIC = 'Basic Care',
  PREMIUM = 'Premium Health',
  VIP = 'VIP Total'
}

export interface Patient {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  status: SubscriptionStatus;
  plan: PlanType;
  joinDate: string;
  lastVisit: string;
  monthlyFee: number;
  notes: string;
  riskScore?: string; // AI generated
  aiInsight?: string; // AI generated
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  action: string;
  details: string;
  type: 'info' | 'warning' | 'success' | 'error';
}

export type ViewState = 'dashboard' | 'patients' | 'automation';

export interface KPIStats {
  totalRevenue: number;
  activePatients: number;
  churnRate: number;
  pendingActions: number;
}