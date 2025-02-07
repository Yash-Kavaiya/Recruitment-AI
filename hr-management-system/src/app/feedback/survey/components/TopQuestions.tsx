import React from 'react';
import { MessageSquare, Star } from 'lucide-react';

const mockTopQuestions = [
  {
    question: "How can we improve the onboarding process for new team members?",
    importance: "high",
    context: "Based on recent feedback patterns"
  },
  {
    question: "What specific tools would help increase your productivity?",
    importance: "medium",
    context: "Derived from performance reviews"
  },
  {
    question: "How can we better support your professional development goals?",
    importance: "high",
    context: "Common theme in 1:1 meetings"
  },
  {
    question: "What aspects of our remote work policy need improvement?",
    importance: "medium",
    context: "Frequently discussed topic"
  },
  {
    question: "How can we enhance cross-team collaboration?",
    importance: "high",
    context: "Based on project retrospectives"
  }
];

export function TopQuestions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="text-green-600" size={20} />
        <h2 className="text-xl font-semibold text-gray-800">Top 5 Generated Questions</h2>
      </div>

      <div className="space-y-4">
        {mockTopQuestions.map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-green-600 font-medium border border-green-100">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 mb-2">{item.question}</p>
                <div className="flex items-center gap-4">
                  <span className={`text-sm ${
                    item.importance === 'high' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {item.importance.charAt(0).toUpperCase() + item.importance.slice(1)} Priority
                  </span>
                  <span className="text-sm text-gray-500">{item.context}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
