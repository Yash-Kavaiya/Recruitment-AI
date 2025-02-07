'use client';

import { ArrowLeft, Filter, Search, SortAsc } from 'lucide-react';
import Link from 'next/link';
import { SkillGapCard } from '../components/SkillGapCard';
import { skillGaps } from '../data/skills';

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <Link 
          href="/recommendations" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Recommendations</span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Skills Gap Analysis</h1>
        <p className="text-gray-600">Review and manage employee skill development needs</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-gray-800 mb-1">15</div>
          <div className="text-gray-600">Total Skill Gaps</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-gray-800 mb-1">8</div>
          <div className="text-gray-600">High Priority</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-gray-800 mb-1">75%</div>
          <div className="text-gray-600">Average Completion</div>
        </div>
      </div>

      <div className="mb-8 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
          <Filter size={20} />
          <span>Filter</span>
        </button>
        <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
          <SortAsc size={20} />
          <span>Sort</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGaps.map((gap) => (
          <SkillGapCard key={gap.id} {...gap} />
        ))}
      </div>
    </div>
  );
}
