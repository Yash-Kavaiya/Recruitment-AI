'use client';

import React, { useState } from 'react';
import { ArrowLeft, Send, Bot, User, Sparkles } from "lucide-react";
import Link from 'next/link';

interface Message {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function VirtualAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: "Hello! I'm your HR Virtual Assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        type: 'assistant',
        content: getAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <Link 
          href="/feedback" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Feedback</span>
        </Link>
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl">
          <h1 className="text-3xl font-bold mb-2">HR Virtual Assistant</h1>
          <p className="text-green-100">AI-powered assistant for instant HR support and feedback</p>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="h-[600px] overflow-y-auto p-6">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
        </div>

        <div className="p-4 border-t border-gray-100">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message here..."
              className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const MessageBubble = ({ message }: { message: Message }) => (
  <div className={`flex gap-3 mb-4 ${message.type === 'user' ? 'justify-end' : ''}`}>
    {message.type === 'assistant' && (
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white">
        <Bot size={16} />
      </div>
    )}
    <div
      className={`max-w-[70%] p-4 rounded-xl ${
        message.type === 'user'
          ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white'
          : 'bg-gray-100 text-gray-800'
      }`}
    >
      {message.content}
    </div>
    {message.type === 'user' && (
      <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white">
        <User size={16} />
      </div>
    )}
  </div>
);

// AI response simulation
function getAIResponse(input: string): string {
  const responses = [
    "I understand your concern. Let me help you with that.",
    "Based on our HR policies, here's what you need to know...",
    "I've analyzed your feedback and here are some suggestions...",
    "Let me check the relevant information for you...",
    "I can help you process that request. Here's what we need to do..."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}