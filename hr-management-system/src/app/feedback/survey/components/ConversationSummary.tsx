import React from 'react';
import { MessageSquare, Star, ArrowRight, AlertCircle } from 'lucide-react';

const mockSummaries = [
  {
    topic: "Performance Review Feedback",
    summary: "Overall positive feedback with emphasis on technical skills. Areas for improvement include leadership and communication.",
    sentiment: "positive",
    keyPoints: [
      "Strong technical performance",
      "Good project delivery",
      "Communication needs improvement",
      "Leadership skills development suggested"
    ]
  },
  {
    topic: "Team Collaboration Discussion",
    summary: "Discussion focused on cross-team collaboration challenges and proposed solutions for better integration.",
    sentiment: "neutral",
    keyPoints: [
      "Better documentation needed",
      "Regular sync meetings suggested",
      "Tool standardization required",
      "Positive team spirit noted"
    ]
  }
];

export function ConversationSummary() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="text-green-600" size={20} />
        <h2 className="text-xl font-semibold text-gray-800">AI-Generated Summaries</h2>
      </div>

      <div className="space-y-6">
        {mockSummaries.map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.topic}</h3>
                <p className="text-gray-600">{item.summary}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                item.sentiment === 'positive' 
                  ? 'bg-green-100 text-green-800'
                  : item.sentiment === 'negative'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-800 flex items-center gap-2">
                <Star size={16} className="text-green-600" />
                Key Points
              </h4>
              <ul className="space-y-2">
                {item.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-gray-400 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="flex items-center gap-2 text-sm text-green-600 hover:text-green-800">
                <AlertCircle size={16} />
                View Full Conversation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
