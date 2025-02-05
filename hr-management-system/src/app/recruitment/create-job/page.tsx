'use client';

import { useState } from 'react';
import { 
  ArrowLeft,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Clock,
  ClipboardList,
  Building
} from 'lucide-react';

interface FormData {
  department: string;
  seniority: string;
  employmentType: string;
  responsibilities: string[];
  qualifications: string[];
  jobTitle: string;
  location: string;
  salary: string;
}

export default function CreateJobDescription() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    department: '',
    seniority: '',
    employmentType: '',
    responsibilities: [],
    qualifications: [],
    jobTitle: '',
    location: '',
    salary: ''
  });

  const departments = [
    'Engineering',
    'Marketing',
    'Sales',
    'Human Resources',
    'Finance',
    'Operations',
    'Product',
    'Design',
    'Customer Support',
    'Legal'
  ];

  const seniorityLevels = [
    'Entry-level',
    'Mid-level',
    'Senior',
    'Lead',
    'Management',
    'Director',
    'Executive'
  ];

  const employmentTypes = [
    'Full-Time',
    'Part-Time',
    'Contract',
    'Temporary',
    'Internship',
    'Remote'
  ];

  const commonResponsibilities = [
    'Project Management',
    'Team Leadership',
    'Strategic Planning',
    'Client Relations',
    'Technical Development',
    'Product Development',
    'Market Research',
    'Data Analysis',
    'Customer Support',
    'Quality Assurance'
  ];

  const qualificationOptions = [
    "Bachelor's Degree",
    "Master's Degree",
    'PhD',
    'MBA',
    '2+ years experience',
    '5+ years experience',
    '10+ years experience',
    'Professional Certification',
    'Industry Knowledge',
    'Technical Skills'
  ];

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Job Description</h1>
        <p className="text-gray-600">AI-powered JD creation system</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">Step {step} of 4</span>
            <span className="text-sm font-medium text-blue-600">{step * 25}% Complete</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${step * 25}%` }}
            />
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="e.g., Senior Software Engineer"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seniority Level
              </label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
                value={formData.seniority}
                onChange={(e) => setFormData({ ...formData, seniority: e.target.value })}
              >
                <option value="">Select Seniority Level</option>
                {seniorityLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type
              </label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
                value={formData.employmentType}
                onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
              >
                <option value="">Select Employment Type</option>
                {employmentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="e.g., New York, NY (or Remote)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary Range
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="e.g., $80,000 - $120,000"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Responsibilities
              </label>
              <div className="grid grid-cols-2 gap-3">
                {commonResponsibilities.map(resp => (
                  <label key={resp} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.responsibilities.includes(resp)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            responsibilities: [...formData.responsibilities, resp]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            responsibilities: formData.responsibilities.filter(r => r !== resp)
                          });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm">{resp}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Qualifications
              </label>
              <div className="grid grid-cols-2 gap-3">
                {qualificationOptions.map(qual => (
                  <label key={qual} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.qualifications.includes(qual)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            qualifications: [...formData.qualifications, qual]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            qualifications: formData.qualifications.filter(q => q !== qual)
                          });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm">{qual}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 ml-auto"
            >
              Next
              <ArrowRight size={20} />
            </button>
          ) : (
            <button
              onClick={() => console.log(formData)}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 ml-auto"
            >
              Generate JD
              <ClipboardList size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
