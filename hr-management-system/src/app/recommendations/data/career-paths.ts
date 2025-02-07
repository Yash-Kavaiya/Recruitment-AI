import { CareerPath } from '../types';

export const careerPaths: CareerPath[] = [
  {
    id: "cp1",
    employeeName: "Alice Johnson",
    currentRole: "Junior Developer",
    suggestedPath: [
      {
        role: "Mid-level Developer",
        timeframe: "1-2 years",
        requirements: ["React expertise", "API Development", "Team Leadership"]
      },
      {
        role: "Senior Developer",
        timeframe: "2-3 years",
        requirements: ["System Architecture", "Mentoring", "Project Management"]
      }
    ],
    readiness: 85,
    skills: [
      { name: "React", proficiency: 80 },
      { name: "TypeScript", proficiency: 75 },
      { name: "Node.js", proficiency: 70 }
    ],
    mentorAvailable: true
  },
  {
    id: '2',
    employeeName: 'Maria Garcia',
    currentRole: 'UX Designer',
    suggestedPath: [
      {
        role: 'Senior UX Designer',
        timeframe: '1-2 years',
        requirements: ['User Research', 'Design Systems', 'Team Coordination']
      },
      {
        role: 'Design Manager',
        timeframe: '2-3 years',
        requirements: ['Design Strategy', 'Team Leadership', 'Product Vision']
      }
    ],
    readiness: 78,
    skills: [
      { name: 'User Research', proficiency: 90 },
      { name: 'Design Systems', proficiency: 85 },
      { name: 'Team Leadership', proficiency: 65 }
    ],
    mentorAvailable: true
  }
];
