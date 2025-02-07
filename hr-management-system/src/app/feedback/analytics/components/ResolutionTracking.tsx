import React, { useState, useEffect } from 'react';
import { LineChart, Clock, AlertCircle } from 'lucide-react';

interface ResolutionTrackingProps {
  timeframe: string;
}

const mockData = {
  resolved: 142,
  pending: 23,
  overdue: 5,
  avgTime: "2.5 days",
  categories: [
    { name: "Technical Issues", count: 45, avgResolution: "1.8 days" },
    { name: "HR Queries", count: 38, avgResolution: "2.2 days" },
    { name: "Facilities", count: 32, avgResolution: "3.1 days" },
    { name: "Training", count: 27, avgResolution: "2.7 days" }
  ]
};

export function ResolutionTracking({ timeframe }: ResolutionTrackingProps) {
  const [data, setData] = useState(mockData);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        // Simulate real-time updates
        setData(prev => ({
          ...prev,
          resolved: prev.resolved + Math.floor(Math.random() * 2),
          pending: prev.pending + Math.floor(Math.random() * 2) - 1,
        }));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLive]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Clock className="text-green-600" size={20} />
          <h3 className="text-lg font-semibold text-gray-800">Resolution Tracking</h3>
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`px-3 py-1 rounded-full text-sm ${
            isLive 
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {isLive ? 'Live' : 'Paused'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-semibold text-gray-800">{data.resolved}</div>
          <div className="text-sm text-gray-600">Resolved</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-yellow-600">{data.pending}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-red-600">{data.overdue}</div>
          <div className="text-sm text-gray-600">Overdue</div>
        </div>
      </div>

      <div className="space-y-4">
        {data.categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-medium text-gray-800">{category.name}</div>
              <div className="text-sm text-gray-600">{category.count} issues</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800">Avg. Resolution</div>
              <div className="text-sm text-gray-600">{category.avgResolution}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Average Resolution Time: {data.avgTime}</span>
          <span className="flex items-center gap-1">
            <AlertCircle size={14} />
            {data.overdue} overdue tasks
          </span>
        </div>
      </div>
    </div>
  );
}
