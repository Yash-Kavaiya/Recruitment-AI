import { SkillGap } from '../types';

export const skillGaps: SkillGap[] = [
  {
    id: 'sg1',
    employeeName: 'John Smith',
    currentRole: 'Frontend Developer',
    targetRole: 'Senior Frontend Developer',
    currentSkills: [
      { name: 'React', current: 75, required: 90 },
      { name: 'TypeScript', current: 65, required: 85 },
      { name: 'System Design', current: 45, required: 80 },
      { name: 'Testing', current: 60, required: 85 }
    ],
    requiredSkills: [
      { name: 'Team Leadership', current: 40, required: 75 },
      { name: 'Architecture', current: 35, required: 70 }
    ],
    completionRate: 68,
    priority: 'high'
  },
  {
    id: 'sg2',
    employeeName: 'Sarah Wilson',
    currentRole: 'Product Manager',
    targetRole: 'Senior Product Manager',
    currentSkills: [
      { name: 'Product Strategy', current: 85, required: 90 },
      { name: 'User Research', current: 80, required: 85 },
      { name: 'Analytics', current: 70, required: 85 }
    ],
    requiredSkills: [
      { name: 'Team Management', current: 65, required: 85 },
      { name: 'Stakeholder Management', current: 75, required: 90 }
    ],
    completionRate: 82,
    priority: 'medium'
  }
];
