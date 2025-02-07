import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const mockQuestions = [
  {
    id: 1,
    question: "How satisfied are you with the current work-life balance?",
    type: "rating",
    options: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    question: "What aspects of the company culture would you like to see improved?",
    type: "text"
  },
  {
    id: 3,
    question: "How well does your manager provide constructive feedback?",
    type: "rating",
    options: [1, 2, 3, 4, 5]
  }
];

export function SurveyForm() {
  const [questions, setQuestions] = useState(mockQuestions);
  const [responses, setResponses] = useState<Record<number, any>>({});

  const handleResponse = (questionId: number, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-green-600" size={20} />
        <h2 className="text-xl font-semibold text-gray-800">AI-Generated Survey</h2>
      </div>

      <form className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-800 font-medium mb-4">{q.question}</p>
            {q.type === 'rating' ? (
              <div className="flex gap-4">
                {q.options?.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleResponse(q.id, option)}
                    className={`w-12 h-12 rounded-lg font-medium ${
                      responses[q.id] === option
                        ? 'bg-green-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-green-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                rows={3}
                onChange={(e) => handleResponse(q.id, e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
                placeholder="Type your answer here..."
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
