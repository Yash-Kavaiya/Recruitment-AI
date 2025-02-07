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
