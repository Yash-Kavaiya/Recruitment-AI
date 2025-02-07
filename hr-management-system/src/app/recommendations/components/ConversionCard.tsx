import { Conversion } from '../types';
import { ArrowRight, Award, Clock, Gauge } from 'lucide-react';

export function ConversionCard({ 
  employeeName, 
  currentRole, 
  proposedRole, 
  contractDuration, 
  performance, 
  skillMatch,
  recommendation 
}: Conversion) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{employeeName}</h3>
          <div className="flex items-center gap-2 text-gray-500 mt-1">
            <span>{currentRole}</span>
            <ArrowRight size={16} />
            <span className="text-blue-600 font-medium">{proposedRole}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          recommendation === 'highly_recommended' ? 'bg-green-100 text-green-600' :
          recommendation === 'recommended' ? 'bg-blue-100 text-blue-600' :
          'bg-yellow-100 text-yellow-600'
        }`}>
          {recommendation.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex items-center gap-2">
          <Clock className="text-gray-400" size={18} />
          <div>
            <div className="text-sm text-gray-500">Duration</div>
            <div className="font-medium">{contractDuration} months</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Award className="text-gray-400" size={18} />
          <div>
            <div className="text-sm text-gray-500">Performance</div>
            <div className="font-medium">{performance}%</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="text-gray-400" size={18} />
          <div>
            <div className="text-sm text-gray-500">Skill Match</div>
            <div className="font-medium">{skillMatch}%</div>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300">
        View Details
      </button>
    </div>
  );
}
