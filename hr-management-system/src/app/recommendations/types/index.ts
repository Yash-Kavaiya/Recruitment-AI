export interface RecommendationCard {
  title: string;
  count: number;
  description: string;
  category: string;
  priority: "high" | "medium" | "low";
}

export interface Conversion {
  id: string;
  employeeName: string;
  currentRole: string;
  proposedRole: string;
  contractDuration: number;
  performance: number;
  skillMatch: number;
  recommendation: 'highly_recommended' | 'recommended' | 'consider';
}

export interface CareerPath {
  id: string;
  employeeName: string;
  currentRole: string;
  suggestedPath: {
    role: string;
    timeframe: string;
    requirements: string[];
  }[];
  readiness: number;
  skills: {
    name: string;
    proficiency: number;
  }[];
  mentorAvailable: boolean;
}

export interface SkillGap {
  id: string;
  employeeName: string;
  currentRole: string;
  targetRole: string;
  currentSkills: SkillLevel[];
  requiredSkills: SkillLevel[];
  completionRate: number;
  priority: 'high' | 'medium' | 'low';
}

export interface SkillLevel {
  name: string;
  current: number;
  required: number;
}
