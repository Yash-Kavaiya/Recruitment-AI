import { Clock, Calendar, BarChart2, AlertTriangle, Briefcase, Users, ArrowUp, ArrowDown } from "lucide-react";

const mockWeeklyData = [
  { day: 'Monday', hours: 8.5, tasks: 12 },
  { day: 'Tuesday', hours: 7.8, tasks: 9 },
  { day: 'Wednesday', hours: 8.2, tasks: 11 },
  { day: 'Thursday', hours: 8.0, tasks: 8 },
  { day: 'Friday', hours: 7.5, tasks: 7 },
];

const mockProjects = [
  { name: 'Project Alpha', hours: 24.5, progress: 75 },
  { name: 'Project Beta', hours: 12.3, progress: 45 },
  { name: 'Project Gamma', hours: 8.2, progress: 30 },
];

export default function TimesheetsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Timesheet Analysis</h1>
        <p className="text-gray-600">AI-powered timesheet tracking and analysis</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Weekly Hours"
          value="38.5"
          trend="+2.5"
          trendUp={true}
          icon={Clock}
        />
        <MetricCard
          title="Tasks Completed"
          value="47"
          trend="+12"
          trendUp={true}
          icon={Briefcase}
        />
        <MetricCard
          title="Team Efficiency"
          value="92%"
          trend="-3%"
          trendUp={false}
          icon={Users}
        />
        <MetricCard
          title="Overtime Hours"
          value="4.5"
          trend="+1.5"
          trendUp={false}
          icon={AlertTriangle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Weekly Summary</h2>
          <div className="space-y-4">
            {mockWeeklyData.map((day, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-24 text-gray-600">{day.day}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">{day.hours} hours</span>
                    <span className="text-sm text-gray-600">{day.tasks} tasks</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `${(day.hours / 9) * 100}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Project Allocation</h2>
          <div className="space-y-6">
            {mockProjects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.hours} hours logged</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Task Timeline</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 text-sm text-gray-600">
                  {`${9 + index}:00`}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Task {index + 1}</h4>
                  <p className="text-sm text-gray-600">Project {['Alpha', 'Beta', 'Gamma'][index % 3]}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {['In Progress', 'Completed', 'Planned'][index % 3]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Team Activity</h2>
          <div className="space-y-4">
            {['John', 'Sarah', 'Mike', 'Emma'].map((name, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm">
                    {name[0]}
                  </div>
                  <span className="font-medium text-gray-800">{name}</span>
                </div>
                <span className="text-sm text-gray-600">Active now</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const MetricCard = ({ title, value, trend, trendUp, icon: Icon }: {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: any;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="text-blue-600" size={20} />
      </div>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
    <div className="flex items-end justify-between">
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
      <div className={`flex items-center gap-1 text-sm ${
        trendUp ? 'text-green-600' : 'text-red-600'
      }`}>
        {trend}
        {trendUp ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      </div>
    </div>
  </div>
);
