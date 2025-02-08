import React from 'react';
import { Brain, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface AutomatedInsightsProps {
  timeframe: string;
}

const mockInsights = [
  {
    type: 'trend',
    title: 'Rising Satisfaction in Engineering Team',
    description: 'Employee satisfaction scores have increased by 15% after implementing flexible work hours.',
    impact: 'positive',
    confidence: 89
  },
  {
    type: 'alert',
    title: 'Potential Retention Risk',
    description: 'Pattern detected: Decreased engagement in Marketing department over the last 3 weeks.',
    impact: 'negative',
    confidence: 76
  },
  {
    type: 'insight',
    title: 'Training Impact Analysis',
    description: 'Leadership training programs show 23% improvement in team collaboration scores.',
    impact: 'positive',
    confidence: 92
  },
  {
    type: 'trend',
    title: 'Improved Code Quality Metrics',
    description: 'Code review completion rates increased by 28% following new peer review process.',
    impact: 'positive',
    confidence: 94
  },
  {
    type: 'alert',
    title: 'Work-Life Balance Concerns',
    description: 'Sales team reporting 30% increase in overtime hours during Q3.',
    impact: 'negative',
    confidence: 85
  },
  {
    type: 'insight',
    title: 'Remote Work Productivity',
    description: 'Remote employees showing 12% higher productivity compared to office-based staff.',
    impact: 'positive',
    confidence: 88
  },
  {
    type: 'trend',
    title: 'Meeting Efficiency Improvement',
    description: 'Average meeting duration reduced by 25% after implementing new scheduling guidelines.',
    impact: 'positive',
    confidence: 91
  },
  {
    type: 'alert',
    title: 'Skills Gap Identified',
    description: 'Data analysis skills shortage detected in Business Intelligence team.',
    impact: 'negative',
    confidence: 82
  },
  {
    type: 'insight',
    title: 'Onboarding Success Rate',
    description: 'New hire retention rate improved by 18% with revised onboarding program.',
    impact: 'positive',
    confidence: 87
  },
  {
    type: 'trend',
    title: 'Customer Support Performance',
    description: 'First response time improved by 40% in customer support department.',
    impact: 'positive',
    confidence: 95
  },
  {
    type: 'alert',
    title: 'Communication Channel Usage',
    description: 'Significant decline in internal communication tool adoption rates.',
    impact: 'negative',
    confidence: 79
  },
  {
    type: 'insight',
    title: 'Project Delivery Metrics',
    description: 'Project completion rates increased by 20% after Agile methodology adoption.',
    impact: 'positive',
    confidence: 93
  },
  {
    type: 'trend',
    title: 'Employee Learning Engagement',
    description: 'Online course completion rates up by 35% in Technical departments.',
    impact: 'positive',
    confidence: 90
  },
  {
    type: 'alert',
    title: 'Budget Utilization Warning',
    description: 'Training budget utilization tracking 45% below annual targets.',
    impact: 'negative',
    confidence: 88
  },
  {
    type: 'insight',
    title: 'Cross-team Collaboration',
    description: 'Inter-departmental project initiatives showed 25% better outcomes.',
    impact: 'positive',
    confidence: 86
  },
  {
    type: 'trend',
    title: 'Employee Wellness Program',
    description: 'Sick leave usage decreased by 22% following wellness program implementation.',
    impact: 'positive',
    confidence: 84
  },
  {
    type: 'alert',
    title: 'Knowledge Transfer Risk',
    description: 'Critical knowledge gaps identified in DevOps team succession planning.',
    impact: 'negative',
    confidence: 81
  },
  {
    type: 'insight',
    title: 'Innovation Metrics',
    description: 'Internal hackathon participation increased by 50% year-over-year.',
    impact: 'positive',
    confidence: 89
  },
  {
    type: 'trend',
    title: 'Career Development Progress',
    description: 'Individual development plan completion rate up by 28%.',
    impact: 'positive',
    confidence: 87
  },
  {
    type: 'alert',
    title: 'Team Diversity Metrics',
    description: 'Gender diversity ratio in leadership roles below industry benchmark.',
    impact: 'negative',
    confidence: 92
  },
  {
    type: 'insight',
    title: 'Employee Recognition Impact',
    description: 'Peer recognition program correlates with 15% higher employee satisfaction.',
    impact: 'positive',
    confidence: 88
  },
  {
    type: 'trend',
    title: 'Documentation Quality',
    description: 'Knowledge base usage increased by 60% after content restructuring.',
    impact: 'positive',
    confidence: 91
  },
  {
    type: 'alert',
    title: 'Performance Review Completion',
    description: 'Q4 performance review completion rate tracking 25% behind schedule.',
    impact: 'negative',
    confidence: 85
  },
  {
    type: 'insight',
    title: 'Remote Team Building',
    description: 'Virtual team building activities improved remote team satisfaction by 30%.',
    impact: 'positive',
    confidence: 83
  },
  {
    type: 'trend',
    title: 'Client Satisfaction Metrics',
    description: 'Client satisfaction scores improved by 18% in Q3.',
    impact: 'positive',
    confidence: 90
  },
  {
    type: 'alert',
    title: 'Resource Allocation',
    description: 'Project resource utilization showing 20% inefficiency in allocation.',
    impact: 'negative',
    confidence: 84
  },
  {
    type: 'insight',
    title: 'Mentorship Program Results',
    description: 'Junior developer productivity increased 40% through mentorship program.',
    impact: 'positive',
    confidence: 89
  },
  {
    type: 'trend',
    title: 'Code Deploy Frequency',
    description: 'Production deployments frequency increased by 35% this quarter.',
    impact: 'positive',
    confidence: 93
  },
  {
    type: 'alert',
    title: 'Technical Debt Accumulation',
    description: 'Legacy system maintenance costs increased by 28% year-over-year.',
    impact: 'negative',
    confidence: 87
  },
  {
    type: 'insight',
    title: 'Team Autonomy Impact',
    description: 'Self-organizing teams showed 25% higher sprint completion rates.',
    impact: 'positive',
    confidence: 86
  }
];

export function AutomatedInsights({ timeframe }: AutomatedInsightsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Brain className="text-green-600" size={20} />
          <h3 className="text-lg font-semibold text-gray-800">AI-Generated Insights</h3>
        </div>
        <span className="text-sm text-gray-500">Based on {timeframe} data</span>
      </div>

      <div className="space-y-4">
        {mockInsights.map((insight, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg border-l-4 ${
              insight.impact === 'positive' 
                ? 'border-l-green-500 bg-green-50'
                : 'border-l-red-500 bg-red-50'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {insight.impact === 'positive' ? (
                  <TrendingUp size={18} className="text-green-600" />
                ) : (
                  <AlertTriangle size={18} className="text-red-600" />
                )}
                <h4 className="font-medium text-gray-800">{insight.title}</h4>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {insight.confidence}% confidence
              </span>
            </div>
            <p className="text-sm text-gray-600">{insight.description}</p>
            <div className="mt-2 flex justify-end">
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
