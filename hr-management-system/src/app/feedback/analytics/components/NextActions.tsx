import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

const mockActions = [
  {
    id: 1,
    title: "Review Team Communication Patterns",
    impact: "high",
    context: "Based on recent feedback trends",
    deadline: "Next 48 hours"
  },
  {
    id: 2,
    title: "Schedule Leadership Training",
    impact: "medium",
    context: "Skills gap analysis",
    deadline: "This week"
  },
  {
    id: 3,
    title: "Address Work-Life Balance Concerns",
    impact: "high",
    context: "Employee satisfaction metrics",
    deadline: "Next week"
  }
];

export default function NextActions() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Best Actions</h3>
      <div className="space-y-4">
        {mockActions.map((action) => (
          <div key={action.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-3 mb-2">
              <AlertCircle 
                size={18} 
                className={action.impact === 'high' ? 'text-red-500' : 'text-yellow-500'} 
              />
              <div>
                <h4 className="font-medium text-gray-800">{action.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{action.context}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">Due: {action.deadline}</span>
              <button className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center gap-1">
                Take Action
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
