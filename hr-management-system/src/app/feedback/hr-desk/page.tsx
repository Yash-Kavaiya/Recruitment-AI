'use client';

import React, { useState } from 'react';
import { ArrowLeft, Clock, CheckCircle2, XCircle, AlertCircle, Filter, Search } from "lucide-react";
import Link from 'next/link';

interface HRRequest {
  id: string;
  employeeName: string;
  department: string;
  requestType: string;
  status: 'pending' | 'approved' | 'rejected' | 'in-review';
  priority: 'high' | 'medium' | 'low';
  dateSubmitted: string;
  description: string;
}

const mockRequests: HRRequest[] = [
  {
    id: "HR001",
    employeeName: "John Doe",
    department: "Engineering",
    requestType: "Leave Extension",
    status: "pending",
    priority: "high",
    dateSubmitted: "2024-02-20",
    description: "Requesting extension of paternity leave by 2 weeks"
  },
  {
    id: "HR002",
    employeeName: "Jane Smith",
    department: "Marketing",
    requestType: "Performance Review",
    status: "in-review",
    priority: "medium",
    dateSubmitted: "2024-02-19",
    description: "Early performance review request for promotion consideration"
  },
  {
    id: "HR003",
    employeeName: "Michael Chen",
    department: "Sales",
    requestType: "Salary Review",
    status: "approved",
    priority: "medium",
    dateSubmitted: "2024-02-18",
    description: "Annual salary review request"
  },
  {
    id: "HR004",
    employeeName: "Sarah Johnson",
    department: "HR",
    requestType: "Training Request",
    status: "pending",
    priority: "low",
    dateSubmitted: "2024-02-17",
    description: "Leadership development program application"
  },
  {
    id: "HR005",
    employeeName: "David Williams",
    department: "Finance",
    requestType: "Grievance",
    status: "in-review",
    priority: "high",
    dateSubmitted: "2024-02-16",
    description: "Workplace environment concern"
  },
  {
    id: "HR006",
    employeeName: "Emily Brown",
    department: "Engineering",
    requestType: "Remote Work",
    status: "rejected",
    priority: "medium",
    dateSubmitted: "2024-02-15",
    description: "Request for permanent remote work arrangement"
  },
  {
    id: "HR007",
    employeeName: "James Wilson",
    department: "Marketing",
    requestType: "Benefits Query",
    status: "approved",
    priority: "low",
    dateSubmitted: "2024-02-14",
    description: "Healthcare benefits clarification"
  },
  {
    id: "HR008",
    employeeName: "Lisa Anderson",
    department: "Sales",
    requestType: "Transfer",
    status: "pending",
    priority: "high",
    dateSubmitted: "2024-02-13",
    description: "Department transfer request"
  },
  {
    id: "HR009",
    employeeName: "Robert Martinez",
    department: "IT",
    requestType: "Equipment",
    status: "approved",
    priority: "medium",
    dateSubmitted: "2024-02-12",
    description: "New laptop request"
  },
  {
    id: "HR010",
    employeeName: "Rachel Lee",
    department: "Finance",
    requestType: "Leave",
    status: "in-review",
    priority: "low",
    dateSubmitted: "2024-02-11",
    description: "Sabbatical leave request"
  },
  {
    id: "HR011",
    employeeName: "Thomas Garcia",
    department: "Engineering",
    requestType: "Certification",
    status: "approved",
    priority: "medium",
    dateSubmitted: "2024-02-10",
    description: "AWS certification program request"
  },
  {
    id: "HR012",
    employeeName: "Amanda White",
    department: "HR",
    requestType: "Complaint",
    status: "in-review",
    priority: "high",
    dateSubmitted: "2024-02-09",
    description: "Workplace harassment report"
  },
  {
    id: "HR013",
    employeeName: "Kevin Taylor",
    department: "Marketing",
    requestType: "Promotion",
    status: "pending",
    priority: "high",
    dateSubmitted: "2024-02-08",
    description: "Senior position application"
  },
  {
    id: "HR014",
    employeeName: "Maria Rodriguez",
    department: "Sales",
    requestType: "Compensation",
    status: "rejected",
    priority: "medium",
    dateSubmitted: "2024-02-07",
    description: "Commission structure review"
  },
  {
    id: "HR015",
    employeeName: "Daniel Kim",
    department: "IT",
    requestType: "Training",
    status: "approved",
    priority: "low",
    dateSubmitted: "2024-02-06",
    description: "Security certification course request"
  },
  {
    id: "HR016",
    employeeName: "Jennifer Moore",
    department: "Finance",
    requestType: "Flexible Hours",
    status: "pending",
    priority: "medium",
    dateSubmitted: "2024-02-05",
    description: "Modified work schedule request"
  },
  {
    id: "HR017",
    employeeName: "Christopher Lee",
    department: "Engineering",
    requestType: "Equipment",
    status: "approved",
    priority: "low",
    dateSubmitted: "2024-02-04",
    description: "Standing desk request"
  },
  {
    id: "HR018",
    employeeName: "Michelle Chang",
    department: "Marketing",
    requestType: "Leave",
    status: "in-review",
    priority: "medium",
    dateSubmitted: "2024-02-03",
    description: "Maternity leave application"
  },
  {
    id: "HR019",
    employeeName: "Ryan Peters",
    department: "Sales",
    requestType: "Benefits",
    status: "approved",
    priority: "low",
    dateSubmitted: "2024-02-02",
    description: "401k contribution change"
  },
  {
    id: "HR020",
    employeeName: "Jessica Wong",
    department: "IT",
    requestType: "Remote Work",
    status: "pending",
    priority: "high",
    dateSubmitted: "2024-02-01",
    description: "Hybrid work schedule request"
  }
];

export default function HRDeskPage() {
  const [requests, setRequests] = useState<HRRequest[]>(mockRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <Link 
          href="/feedback" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Feedback</span>
        </Link>
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl">
          <h1 className="text-3xl font-bold mb-2">HR Employee Desk</h1>
          <p className="text-green-100">Manage employee requests and feedback efficiently</p>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by employee name or request ID"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-500" />
            <select
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-review">In Review</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Request ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Employee</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Department</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Priority</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRequests.map((request) => (
                <RequestRow key={request.id} request={request} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const RequestRow = ({ request }: { request: HRRequest }) => {
  const statusIcons = {
    'pending': <Clock className="text-yellow-500" size={16} />,
    'approved': <CheckCircle2 className="text-green-500" size={16} />,
    'rejected': <XCircle className="text-red-500" size={16} />,
    'in-review': <AlertCircle className="text-blue-500" size={16} />
  };

  const priorityColors = {
    'high': 'bg-red-100 text-red-800',
    'medium': 'bg-yellow-100 text-yellow-800',
    'low': 'bg-green-100 text-green-800'
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-900">{request.id}</td>
      <td className="px-4 py-3 text-sm text-gray-900">{request.employeeName}</td>
      <td className="px-4 py-3 text-sm text-gray-600">{request.department}</td>
      <td className="px-4 py-3 text-sm text-gray-600">{request.requestType}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          {statusIcons[request.status]}
          <span className="text-sm capitalize">{request.status.replace('-', ' ')}</span>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[request.priority]}`}>
          {request.priority}
        </span>
      </td>
      <td className="px-4 py-3 text-sm text-gray-600">{request.dateSubmitted}</td>
      <td className="px-4 py-3">
        <button className="text-sm text-green-600 hover:text-green-800">View Details</button>
      </td>
    </tr>
  );
};