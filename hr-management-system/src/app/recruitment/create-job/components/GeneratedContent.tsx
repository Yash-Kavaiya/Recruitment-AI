'use client';

import { useState } from 'react';
import { 
  Copy, 
  Check,
  FileText,
  MessageSquare,
  Loader2
} from 'lucide-react';

interface GeneratedContentProps {
  jobDescription: string;
  interviewQuestions: {
    technical: string[];
    behavioral: string[];
  };
  isLoading: boolean;
}

export default function GeneratedContent({
  jobDescription,
  interviewQuestions,
  isLoading
}: GeneratedContentProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'jd' | 'questions'>('jd');

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('jd')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeTab === 'jd' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FileText size={20} />
          Job Description
        </button>
        <button
          onClick={() => setActiveTab('questions')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeTab === 'questions' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <MessageSquare size={20} />
          Interview Questions
        </button>
      </div>

      {activeTab === 'jd' ? (
        <div className="relative">
          <button
            onClick={() => handleCopy(jobDescription)}
            className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {copied ? <Check className="text-green-600" /> : <Copy />}
          </button>
          <div className="prose max-w-none">
            {jobDescription.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Questions</h3>
            <ul className="space-y-3">
              {interviewQuestions.technical.map((q, i) => (
                <li key={i} className="p-3 bg-gray-50 rounded-lg">{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Behavioral Questions</h3>
            <ul className="space-y-3">
              {interviewQuestions.behavioral.map((q, i) => (
                <li key={i} className="p-3 bg-gray-50 rounded-lg">{q}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
