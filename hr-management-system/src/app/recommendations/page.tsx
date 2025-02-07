'use client';

import React from 'react';
import { Star, ArrowUpRight, BookOpen, Users, ArrowLeft, Brain, Trophy, Cpu } from "lucide-react";
import Link from 'next/link';
import { StatCard } from './components/StatCard';
import { recommendations } from './data/recommendations';
import { RecommendationCard } from './components/RecommendationCard';

export default function RecommendationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl relative">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-4xl font-bold mb-2">Employee Recommendations Engine</h1>
        <p className="text-blue-100">Make data-driven decisions about employee career progression</p>
      </header>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Brain}
            title="AI-based Ranking"
            description="Smart conversion opportunity analysis"
          />
          <FeatureCard
            icon={Trophy}
            title="Contract Insights"
            description="Data-driven renewal recommendations"
          />
          <FeatureCard
            icon={ArrowUpRight}
            title="Career Pathways"
            description="Performance-based progression paths"
          />
          <FeatureCard
            icon={Cpu}
            title="Skills Analysis"
            description="Automated gap identification"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Pending Reviews" value="24" icon={Star} />
        <StatCard title="Career Progressions" value="8" icon={ArrowUpRight} />
        <StatCard title="Skill Gaps" value="15" icon={BookOpen} />
        <StatCard title="Conversion Ready" value="5" icon={Users} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => (
          <RecommendationCard key={index} {...rec} />
        ))}
      </div>
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg text-white w-fit mb-4">
      <Icon size={20} />
    </div>
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);