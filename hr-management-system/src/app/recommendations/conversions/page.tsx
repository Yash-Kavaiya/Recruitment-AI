'use client';

import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import { ConversionCard } from '../components/ConversionCard';
import { conversions } from '../data/conversions';

export default function ConversionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <Link 
          href="/recommendations" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-4 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Recommendations</span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Contract to Permanent Conversions</h1>
        <p className="text-gray-600 mt-2">Review and manage contractor conversion recommendations</p>
      </header>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
            <SlidersHorizontal size={18} />
            <span>Sort</span>
          </button>
        </div>
        <div className="text-sm text-gray-500">
          Showing {conversions.length} recommendations
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conversions.map((conversion) => (
          <ConversionCard key={conversion.id} {...conversion} />
        ))}
      </div>
    </div>
  );
}
