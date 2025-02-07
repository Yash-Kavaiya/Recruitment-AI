import React from 'react';
import { BarChart2, TrendingUp, ThumbsUp, ThumbsDown } from 'lucide-react';

const mockSentimentData = {
  positive: 65,
  neutral: 25,
  negative: 10,
  topTopics: [
    { topic: "Work Environment", sentiment: 4.2 },
    { topic: "Management Support", sentiment: 3.8 },
    { topic: "Career Growth", sentiment: 4.0 },
    { topic: "Work-Life Balance", sentiment: 3.5 }
  ]
};

export function SentimentChart() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="text-green-600" size={20} />
            <h3 className="font-medium text-gray-800">Positive</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{mockSentimentData.positive}%</p>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-yellow-600" size={20} />
            <h3 className="font-medium text-gray-800">Neutral</h3>
          </div>
          <p className="text-3xl font-bold text-yellow-600">{mockSentimentData.neutral}%</p>
        </div>
        
        <div className="bg-red-50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsDown className="text-red-600" size={20} />
            <h3 className="font-medium text-gray-800">Negative</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">{mockSentimentData.negative}%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">Topic-wise Sentiment</h3>
        <div className="space-y-4">
          {mockSentimentData.topTopics.map((topic, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">{topic.topic}</span>
                <span className="text-sm font-medium text-gray-800">{topic.sentiment}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-green-600 to-teal-600 rounded-full"
                  style={{ width: `${(topic.sentiment / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
