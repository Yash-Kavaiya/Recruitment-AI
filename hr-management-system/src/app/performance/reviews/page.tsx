import { Calendar, Star, UserCheck, Search } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Performance Reviews</h1>
        <p className="text-gray-600">Schedule and manage employee performance reviews</p>
      </header>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search reviews..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Review
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              employee: "Alex Thompson",
              role: "Senior Developer",
              date: "March 15, 2024",
              type: "Quarterly Review",
              status: "Scheduled"
            },
            {
              employee: "Sarah Chen",
              role: "Product Designer",
              date: "March 18, 2024",
              type: "Annual Review",
              status: "Pending"
            }
          ].map((review, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-2 rounded-full">
                  <UserCheck className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{review.employee}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-medium text-gray-800">{review.date}</p>
                  <p className="text-sm text-gray-600">{review.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  review.status === 'Scheduled' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
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
