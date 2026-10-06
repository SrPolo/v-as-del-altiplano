export type VehicleCategory = 'CAT1' | 'CAT2' | 'CAT3_7';

export interface VehicleCategoryInfo {
  id: VehicleCategory;
  code: string;
  name: string;
  description: string;
  iconName: string;
}

export type TollStationId = 'GUARNE' | 'LAS_PALMAS' | 'COCORNA';

export interface TollStation {
  id: TollStationId;
  name: string;
  corridor: string;
  baseRates: {
    CAT1: number;
    CAT2: number;
    CAT3_7: number;
  };
  note?: string;
}

export interface DiscountRule {
  categoryId: VehicleCategory;
  standardDiscountPct: number;
  specialConditionPct?: number;
  specialConditionLabel?: string;
  nightDiscountPct?: number;
  fixedChargeNote?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  category: string;
  location: string;
  lengthOrScope: string;
  description: string;
  technicalDetails: string[];
  travelTimeReduction: string;
  safetyImpact: string;
  status: string;
  badge: string;
  keyMetric: string;
  iconName: string;
  imageUrl?: string;
}

export interface SocialFund {
  percentage: string;
  title: string;
  target: string;
  description: string;
  pillars: string[];
  iconName: string;
  accentColor: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  role: 'Comunidad' | 'Municipio/Alcaldía' | 'Transportador' | 'Inversionista' | 'Otro';
  message: string;
}

export interface SimulationResult {
  tollName: string;
  categoryName: string;
  previousFare: number;
  newFare: number;
  savingsAmount: number;
  savingsPercentage: number;
  discountReason: string;
  notes: string[];
}
