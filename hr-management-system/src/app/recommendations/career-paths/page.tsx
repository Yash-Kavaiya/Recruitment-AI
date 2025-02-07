'use client';

import { ArrowLeft, Filter, Search, SortAsc } from 'lucide-react';
import Link from 'next/link';
import { CareerPathCard } from '../components/CareerPathCard';
import { careerPaths } from '../data/career-paths';

export default function CareerPathsPage() {
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
        <h1 className="text-2xl font-bold text-gray-800">Career Path Analysis</h1>
        <p className="text-gray-600">View and manage employee career progression paths</p>
      </header>

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
        {careerPaths.map((path) => (
          <CareerPathCard key={path.id} {...path} />
        ))}
      </div>
    </div>
  );
}
