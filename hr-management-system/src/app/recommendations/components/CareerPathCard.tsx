import React from 'react';
import { CareerPath } from '../types';
import { ChevronRight, Users, Trophy, Book } from 'lucide-react';

export function CareerPathCard({ 
  employeeName, 
  currentRole, 
  suggestedPath, 
  readiness, 
  skills,
  mentorAvailable 
}: CareerPath) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{employeeName}</h3>
        <p className="text-gray-500">{currentRole}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Trophy size={18} className="text-blue-600" />
          <span className="font-medium">Career Path</span>
        </div>
        <div className="flex items-center gap-2">
          {suggestedPath.map((path, index) => (
            <>
              <div className="text-sm">
                <div className="font-medium">{path.role}</div>
                <div className="text-gray-500">{path.timeframe}</div>
              </div>
              {index < suggestedPath.length - 1 && (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Book size={18} className="text-blue-600" />
          <span className="font-medium">Key Skills</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {skill.name} ({skill.proficiency}%)
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Users size={18} className="text-blue-600" />
          <span className={mentorAvailable ? "text-green-600" : "text-gray-500"}>
            {mentorAvailable ? "Mentor Available" : "No Mentor Available"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Readiness Score:</span>
          <span className="font-semibold">{readiness}%</span>
        </div>
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300">
        View Details
      </button>
    </div>
  );
}
