'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical,
  MapPin,
  Briefcase,
  Clock,
  Users
} from 'lucide-react';
import jobData from './data.json';

export default function RecruitmentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');

  const departments = ['All', ...new Set(jobData.jobs.map(job => job.department))];

  const filteredJobs = jobData.jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || job.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Recruitment</h1>
          <p className="text-gray-600">Manage job postings and applications</p>
        </div>
        <Link 
          href="/recruitment/create-job"
          className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 font-medium flex items-center gap-2"
        >
          <Plus size={20} />
          Post New Job
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <button className="px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Filter size={20} />
              More Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Job Title</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Department</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Location</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Type</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Applicants</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-800">{job.title}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <Clock size={14} />
                        Posted {formatDate(job.posted)}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-gray-400" />
                      <span>{job.department}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {job.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-400" />
                      <span>{job.applicants}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical size={20} className="text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}