import { SkillGap, SkillLevel } from '../types';
import { ArrowRight, Target } from 'lucide-react';

export function SkillGapCard({
  employeeName,
  currentRole,
  targetRole,
  currentSkills,
  requiredSkills,
  completionRate,
  priority
}: SkillGap) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{employeeName}</h3>
          <div className="flex items-center gap-2 text-gray-500 mt-1">
            <span>{currentRole}</span>
            <ArrowRight size={16} />
            <span className="text-blue-600 font-medium">{targetRole}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          priority === 'high' ? 'bg-red-100 text-red-600' :
          priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
          'bg-green-100 text-green-600'
        }`}>
          {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
        </span>
      </div>

      <div className="space-y-4 mb-6">
        {[...currentSkills, ...requiredSkills].map((skill, index) => (
          <SkillProgressBar key={index} {...skill} />
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-2">
          <Target size={18} className="text-blue-600" />
          <span className="text-gray-600">Completion Rate:</span>
          <span className="font-semibold">{completionRate}%</span>
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}

function SkillProgressBar({ name, current, required }: SkillLevel) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{current}%/{required}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
          style={{ width: `${(current / required) * 100}%` }}
        />
      </div>
    </div>
  );
}
