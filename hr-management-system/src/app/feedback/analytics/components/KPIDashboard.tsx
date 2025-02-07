import React from 'react';
import { Target, TrendingUp, TrendingDown } from 'lucide-react';

const mockKPIs = [
  {
    metric: "Employee Engagement",
    current: 87,
    target: 90,
    trend: "up",
    progress: 87
  },
  {
    metric: "Feedback Implementation Rate",
    current: 76,
    target: 85,
    trend: "up",
    progress: 76
  },
  {
    metric: "Response Time (hours)",
    current: 24,
    target: 18,
    trend: "down",
    progress: 65
  }
];

interface KPIDashboardProps {
  timeframe: string;
}

export default function KPIDashboard({ timeframe }: KPIDashboardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Key Performance Indicators</h3>
        <Target className="text-green-600" size={20} />
      </div>

      <div className="space-y-6">
        {mockKPIs.map((kpi, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-800">{kpi.metric}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {kpi.current}% / {kpi.target}%
                </span>
                {kpi.trend === 'up' ? (
                  <TrendingUp size={16} className="text-green-600" />
                ) : (
                  <TrendingDown size={16} className="text-red-600" />
                )}
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full"
                style={{ width: `${kpi.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
