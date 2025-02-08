import { Calendar, Star, UserCheck, Search } from "lucide-react";

const mockReviews = [
  {
    employee: "Alex Thompson",
    role: "Senior Developer",
    date: "March 15, 2024",
    type: "Quarterly Review",
    status: "Scheduled",
    department: "Engineering"
  },
  {
    employee: "Sarah Chen",
    role: "Product Designer",
    date: "March 18, 2024",
    type: "Annual Review",
    status: "Pending",
    department: "Design"
  },
  {
    employee: "Michael Rodriguez",
    role: "Sales Manager",
    date: "March 10, 2024",
    type: "Performance Improvement",
    status: "Completed",
    department: "Sales"
  },
  {
    employee: "Emma Wilson",
    role: "Marketing Specialist",
    date: "March 20, 2024",
    type: "Mid-Year Review",
    status: "Scheduled",
    department: "Marketing"
  },
  {
    employee: "James Lee",
    role: "Technical Lead",
    date: "March 12, 2024",
    type: "Promotion Review",
    status: "In Progress",
    department: "Engineering"
  },
  {
    employee: "Lisa Anderson",
    role: "HR Coordinator",
    date: "March 25, 2024",
    type: "Quarterly Review",
    status: "Pending",
    department: "Human Resources"
  },
  {
    employee: "David Miller",
    role: "Financial Analyst",
    date: "March 16, 2024",
    type: "Annual Review",
    status: "Scheduled",
    department: "Finance"
  },
  {
    employee: "Sophie Taylor",
    role: "UX Researcher",
    date: "March 22, 2024",
    type: "Performance Review",
    status: "Pending",
    department: "Design"
  },
  {
    employee: "Ryan Parker",
    role: "DevOps Engineer",
    date: "March 14, 2024",
    type: "Quarterly Review",
    status: "Completed",
    department: "Engineering"
  },
  {
    employee: "Amanda White",
    role: "Content Strategist",
    date: "March 19, 2024",
    type: "Mid-Year Review",
    status: "Scheduled",
    department: "Marketing"
  }
];

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Performance Reviews</h1>
        <p className="text-gray-600">Schedule and manage employee performance reviews</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Reviews" value="42" status="default" />
        <StatCard title="Scheduled" value="15" status="scheduled" />
        <StatCard title="Completed" value="18" status="completed" />
        <StatCard title="Pending" value="9" status="pending" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, role, or department..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500">
              <option value="">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Review
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {mockReviews.map((review, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-2 rounded-full">
                  <UserCheck className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{review.employee}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{review.role}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{review.department}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-medium text-gray-800">{review.date}</p>
                  <p className="text-sm text-gray-600">{review.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(review.status)}`}>
                  {review.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, status }: { title: string; value: string; status: string }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-100">
    <h3 className="text-sm text-gray-600 mb-1">{title}</h3>
    <p className={`text-2xl font-semibold ${
      status === 'completed' ? 'text-green-600' :
      status === 'pending' ? 'text-yellow-600' :
      status === 'scheduled' ? 'text-blue-600' :
      'text-gray-800'
    }`}>{value}</p>
  </div>
);

const getStatusStyle = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'scheduled':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'in progress':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
