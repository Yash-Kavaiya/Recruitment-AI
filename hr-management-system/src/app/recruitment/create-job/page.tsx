'use client';

import { useState } from 'react';
import { 
  ArrowLeft,
  ArrowRight,
  ClipboardList,
} from 'lucide-react';
import GeneratedContent from './components/GeneratedContent';

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
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<{
    jobDescription: string;
    interviewQuestions: {
      technical: string[];
      behavioral: string[];
    };
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const handleGenerateJD = async () => {
    setIsGenerating(true);
    setError(null);

    // Validate form data
    if (!formData.jobTitle || !formData.department || !formData.seniority || !formData.employmentType) {
      setError('Please fill in all required fields');
      setIsGenerating(false);
      return;
    }

    if (formData.responsibilities.length === 0 || formData.qualifications.length === 0) {
      setError('Please select at least one responsibility and qualification');
      setIsGenerating(false);
      return;
    }

    try {
      const response = await fetch('/api/recruitment/generate-jd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate job description');
      }

      if (!data.jobDescription || !data.interviewQuestions) {
        throw new Error('Invalid response format');
      }

      setGeneratedContent({
        jobDescription: data.jobDescription,
        interviewQuestions: data.interviewQuestions
      });
      setStep(5);
    } catch (error: any) {
      console.error('Error generating JD:', error);
      setError(error.message || 'Failed to generate job description. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const renderFormStep = () => {
    switch(step) {
      case 1:
        return (
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
        );
      case 2:
        return (
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
        );
      case 3:
        return (
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
        );
      case 4:
        return (
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
        );
      case 5:
        return (
          <GeneratedContent
            jobDescription={generatedContent?.jobDescription || ''}
            interviewQuestions={generatedContent?.interviewQuestions || { technical: [], behavioral: [] }}
            isLoading={isGenerating}
          />
        );
      default:
        return null;
    }
  };

  const renderError = () => {
    if (!error) return null;
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
        <p>{error}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Create Job Description</h1>
          <p className="text-gray-400">AI-powered JD creation system</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 border border-gray-700">
          {renderError()}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-400">Step {step} of 4</span>
              <span className="text-sm font-medium text-blue-400">{step * 25}% Complete</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
                style={{ width: `${step * 25}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Update input and select styles */}
            <style jsx global>{`
              input, select {
                @apply bg-gray-800 border-gray-700 text-gray-100 !important;
              }
              input::placeholder {
                @apply text-gray-500 !important;
              }
              .checkbox-label {
                @apply bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300 !important;
              }
            `}</style>
            {renderFormStep()}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            {step > 1 && step !== 5 && (
              <button
                onClick={handleBack}
                className="px-6 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 text-gray-300"
              >
                <ArrowLeft size={20} />
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 ml-auto"
              >
                Next
                <ArrowRight size={20} />
              </button>
            ) : step === 4 ? (
              <button
                onClick={handleGenerateJD}
                disabled={isGenerating}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 ml-auto disabled:opacity-50"
              >
                {isGenerating ? 'Generating...' : 'Generate JD'}
                <ClipboardList size={20} />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
