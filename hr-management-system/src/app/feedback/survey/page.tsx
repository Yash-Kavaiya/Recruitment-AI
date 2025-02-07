'use client';

import React, { useState } from 'react';
import { ArrowLeft, Brain, MessageSquare, BarChart2, Sparkles, Send } from "lucide-react";
import Link from 'next/link';
import { SentimentChart } from './components/SentimentChart';
import { TopQuestions } from './components/TopQuestions';
import { SurveyForm } from './components/SurveyForm';
import { ConversationSummary } from './components/ConversationSummary';

export default function SurveyPage() {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <Link 
          href="/feedback" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Feedback</span>
        </Link>
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl">
          <h1 className="text-3xl font-bold mb-2">AI-Powered Survey System</h1>
          <p className="text-green-100">Generate contextual surveys and analyze feedback with AI</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          icon={Brain}
          title="AI-Generated Questions"
          value="24"
          subtitle="Last 7 days"
        />
        <StatCard 
          icon={MessageSquare}
          title="Responses Analyzed"
          value="142"
          subtitle="This month"
        />
        <StatCard 
          icon={BarChart2}
          title="Sentiment Score"
          value="8.4"
          subtitle="Average rating"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-100">
          <nav className="flex gap-4 px-6">
            {['form', 'sentiment', 'summary', 'questions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-4 font-medium ${
                  activeTab === tab
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'form' && <SurveyForm />}
          {activeTab === 'sentiment' && <SentimentChart />}
          {activeTab === 'summary' && <ConversationSummary />}
          {activeTab === 'questions' && <TopQuestions />}
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ icon: Icon, title, value, subtitle }: {
  icon: any;
  title: string;
  value: string;
  subtitle: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-3 rounded-lg text-white">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-semibold text-gray-800">{value}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  </div>
);