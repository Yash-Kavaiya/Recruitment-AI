import { Clock, Calendar, BarChart2, AlertTriangle } from "lucide-react";

export default function TimesheetsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Timesheet Analysis</h1>
        <p className="text-gray-600">AI-powered timesheet tracking and analysis</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Today's Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Hours Logged</span>
              <span className="font-medium text-gray-800">6.5 / 8.0</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '81.25%' }} />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Team Average</span>
              <span className="text-blue-600">7.2 hours</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
              <p className="text-sm text-yellow-800">
                Detected unusual working pattern on weekends. Consider reviewing work-life balance.
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800">
                Productivity peaks observed between 9 AM - 11 AM.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
              Submit Timesheet
            </button>
            <button className="w-full px-4 py-2 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
              View Reports
            </button>
            <button className="w-full px-4 py-2 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
              Request Time Off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
