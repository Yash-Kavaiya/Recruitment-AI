import React from 'react';
import { BarChart2, Star } from 'lucide-react';

interface SatisfactionMetricsProps {
  timeframe: string;
}

const mockData = {
  overall: 85,
  categories: [
    { name: "Work Environment", score: 4.2, responses: 156 },
    { name: "Management Support", score: 3.8, responses: 142 },
    { name: "Career Growth", score: 4.0, responses: 138 },
    { name: "Work-Life Balance", score: 3.9, responses: 145 },
    { name: "Team Collaboration", score: 4.3, responses: 150 },
    { name: "Company Culture", score: 4.1, responses: 160 },
    { name: "Benefits & Compensation", score: 3.7, responses: 155 },
    { name: "Professional Development", score: 4.0, responses: 140 }
  ],
  trends: {
    positive: 65,
    neutral: 25,
    negative: 10
  },
  monthlyTrend: [
    { month: "Jan", score: 82 },
    { month: "Feb", score: 84 },
    { month: "Mar", score: 85 },
    { month: "Apr", score: 83 },
    { month: "May", score: 85 }
  ]
};

export default function SatisfactionMetrics({ timeframe }: SatisfactionMetricsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Satisfaction Metrics</h3>
        <BarChart2 className="text-green-600" size={20} />
      </div>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-800 mb-1">{mockData.overall}%</div>
        <div className="text-sm text-gray-600">Overall Satisfaction Score</div>
      </div>

      <div className="space-y-4">
        {mockData.categories.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-800">{category.name}</span>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} />
                <span className="text-sm text-gray-600">{category.score}</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">{category.responses} responses</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-800 mb-2">Trends</h4>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Positive</span>
            <span>{mockData.trends.positive}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Neutral</span>
            <span>{mockData.trends.neutral}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Negative</span>
            <span>{mockData.trends.negative}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
