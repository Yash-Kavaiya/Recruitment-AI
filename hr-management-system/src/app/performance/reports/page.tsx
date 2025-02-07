import { FileText, Download, Filter } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Performance Reports</h1>
        <p className="text-gray-600">Generate and analyze detailed performance reports</p>
      </header>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-gray-50">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last Quarter</option>
              <option>Custom Range</option>
            </select>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter size={18} />
              Filters
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Download size={18} />
            Export All
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Team Performance Summary",
              type: "Monthly Report",
              date: "March 2024",
              size: "2.4 MB"
            },
            {
              title: "Individual Metrics Analysis",
              type: "Quarterly Report",
              date: "Q1 2024",
              size: "4.1 MB"
            },
            {
              title: "Project Delivery Assessment",
              type: "Custom Report",
              date: "Last 30 Days",
              size: "1.8 MB"
            }
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{report.title}</h3>
                  <p className="text-sm text-gray-600">{report.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-gray-600">{report.date}</p>
                  <p className="text-sm text-gray-400">{report.size}</p>
                </div>
                <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <Download size={18} className="text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
