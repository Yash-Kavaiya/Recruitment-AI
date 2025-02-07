import { 
  BarChart2, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  Users,
  Calendar,
  Award
} from "lucide-react";

const MetricCard = ({ title, value, change, icon: Icon }: {
  title: string;
  value: string;
  change: string;
  icon: any;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <h3 className="text-2xl font-semibold text-gray-800">{value}</h3>
        <span className="text-sm text-green-600">{change}</span>
      </div>
      <div className="bg-blue-50 p-3 rounded-lg">
        <Icon className="text-blue-600" size={24} />
      </div>
    </div>
  </div>
);

const PerformanceCategory = ({ title, score, description }: {
  title: string;
  score: number;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="flex items-center gap-2 mb-2">
      <div className="flex-1 h-2 bg-gray-100 rounded-full">
        <div 
          className="h-2 bg-blue-600 rounded-full"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-600">{score}%</span>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function PerformancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Performance Management</h1>
        <p className="text-gray-600">AI-Powered performance tracking and analysis</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Productivity Score"
          value="87.5%"
          change="+2.5% from last month"
          icon={BarChart2}
        />
        <MetricCard
          title="Time Tracking"
          value="42.3h"
          change="Weekly average"
          icon={Clock}
        />
        <MetricCard
          title="Policy Compliance"
          value="98.2%"
          change="Above target"
          icon={CheckCircle}
        />
        <MetricCard
          title="Areas for Improvement"
          value="3"
          change="Action required"
          icon={AlertTriangle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Category Performance</h2>
          <div className="space-y-6">
            <PerformanceCategory
              title="Work Quality"
              score={92}
              description="Consistently high-quality deliverables"
            />
            <PerformanceCategory
              title="Time Management"
              score={85}
              description="Good time allocation and deadline adherence"
            />
            <PerformanceCategory
              title="Team Collaboration"
              score={88}
              description="Effective communication and teamwork"
            />
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Productivity Patterns</h3>
              <p className="text-sm text-blue-600">Peak performance observed during morning hours. Consider scheduling important tasks during this period.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Skill Development</h3>
              <p className="text-sm text-green-600">Strong progress in technical skills. Recommended focus on leadership development.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h3 className="font-medium text-purple-800 mb-2">Collaboration Analysis</h3>
              <p className="text-sm text-purple-600">High engagement in cross-functional projects. Continue fostering team interactions.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ActionButton
            icon={Calendar}
            title="Schedule Review"
            description="Set up performance discussion"
          />
          <ActionButton
            icon={Users}
            title="Team Analytics"
            description="View team performance"
          />
          <ActionButton
            icon={Award}
            title="Set Goals"
            description="Update objectives"
          />
          <ActionButton
            icon={TrendingUp}
            title="Progress Report"
            description="Generate detailed report"
          />
        </div>
      </section>
    </div>
  );
}

const ActionButton = ({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) => (
  <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-left">
    <div className="flex items-center gap-3">
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <Icon className="text-blue-600" size={20} />
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </button>
);
