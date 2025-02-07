import { RecommendationCard as RecommendationCardType } from '../types';

export function RecommendationCard({ title, count, description, category, priority }: RecommendationCardType) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-sm
          ${priority === 'high' ? 'bg-red-100 text-red-600' :
            priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
            'bg-green-100 text-green-600'}`}>
          {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
        </span>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-blue-600 font-medium">{count} employees</span>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}