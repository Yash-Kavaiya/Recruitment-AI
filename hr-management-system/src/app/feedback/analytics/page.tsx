'use client';

import React, { useState } from 'react';
import { ArrowLeft, BarChart2, TrendingUp, Users, Clock, LineChart, Target, ArrowRight, RefreshCcw } from "lucide-react";
import Link from 'next/link';
import SatisfactionMetrics from './components/SatisfactionMetrics';
import { ResolutionTracking } from './components/ResolutionTracking';
import KPIDashboard from './components/KPIDashboard';
import NextActions from './components/NextActions';
import { AutomatedInsights } from './components/AutomatedInsights';

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('month');
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulated real-time update
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000); // Updates every 30 seconds
    return () => clearInterval(interval);
  }, []);

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
          <h1 className="text-3xl font-bold mb-2">Analytics & Insights</h1>
          <p className="text-green-100">Real-time feedback analysis and performance metrics</p>
        </div>
      </header>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
          <span className="text-sm text-gray-500 flex items-center gap-2">
            <RefreshCcw size={14} className="animate-spin" />
            Last updated: {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {/* Add export functionality */}}
            className="px-4 py-2 text-sm text-green-600 hover:text-green-700 border border-green-200 rounded-lg hover:border-green-300"
          >
            Export Report
          </button>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Employee Satisfaction"
          value="85%"
          trend="+5%"
          icon={Users}
          positive={true}
        />
        <MetricCard
          title="Response Rate"
          value="92%"
          trend="+3%"
          icon={BarChart2}
          positive={true}
        />
        <MetricCard
          title="Avg. Resolution Time"
          value="2.5 days"
          trend="-12%"
          icon={Clock}
          positive={true}
        />
        <MetricCard
          title="Action Items"
          value="24"
          trend="+8"
          icon={Target}
          positive={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SatisfactionMetrics timeframe={timeframe} />
        </div>
        <div>
          <NextActions />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ResolutionTracking timeframe={timeframe} />
        <KPIDashboard timeframe={timeframe} />
      </div>

      <AutomatedInsights timeframe={timeframe} />
    </div>
  );
}

const MetricCard = ({ 
  title, 
  value, 
  trend, 
  icon: Icon,
  positive 
}: { 
  title: string;
  value: string;
  trend: string;
  icon: any;
  positive: boolean;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-3 rounded-lg text-white">
        <Icon size={20} />
      </div>
      <h3 className="text-sm text-gray-600">{title}</h3>
    </div>
    <div className="flex items-end justify-between">
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
      <div className={`flex items-center gap-1 text-sm ${
        positive ? 'text-green-600' : 'text-red-600'
      }`}>
        {trend}
        <TrendingUp size={16} />
      </div>
    </div>
  </div>
);