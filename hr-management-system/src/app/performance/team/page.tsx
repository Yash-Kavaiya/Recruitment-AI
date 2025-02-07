import { 
  BarChart2, 
  TrendingUp, 
  Users, 
  UserCheck,
  Star,
  Target,
  Activity,
  MessageSquare
} from "lucide-react";

const TeamMemberCard = ({ 
  name, 
  role, 
  performance, 
  avatar,
  metrics 
}: {
  name: string;
  role: string;
  performance: number;
  avatar: string;
  metrics: {
    title: string;
    value: string;
    change: string;
  }[];
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-start gap-4 mb-4">
      <img 
        src={avatar} 
        alt={name} 
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
      <div className="ml-auto flex items-center gap-1">
        <Star className="text-yellow-400 fill-yellow-400" size={16} />
        <span className="font-medium">{performance}</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index}>
          <p className="text-sm text-gray-600">{metric.title}</p>
          <p className="font-medium text-gray-800">{metric.value}</p>
          <span className="text-xs text-green-600">{metric.change}</span>
        </div>
      ))}
    </div>
  </div>
);

const TeamMetricCard = ({ title, value, change, icon: Icon }: {
  title: string;
  value: string;
  change: string;
  icon: any;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <div className="bg-blue-50 p-2 rounded-lg">
        <Icon className="text-blue-600" size={20} />
      </div>
    </div>
    <p className="text-2xl font-semibold text-gray-800 mb-1">{value}</p>
    <p className="text-sm text-green-600">{change}</p>
  </div>
);

export default function TeamPerformancePage() {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Senior Developer",
      performance: 4.8,
      avatar: "https://i.pravatar.cc/150?img=1",
      metrics: [
        { title: "Tasks Completed", value: "45", change: "+12% vs last month" },
        { title: "Code Quality", value: "96%", change: "+3% vs last month" },
        { title: "Team Contribution", value: "92%", change: "Consistent" },
        { title: "On-time Delivery", value: "98%", change: "+5% vs last month" }
      ]
    },
    {
      name: "Sarah Chen",
      role: "Product Designer",
      performance: 4.9,
      avatar: "https://i.pravatar.cc/150?img=2",
      metrics: [
        { title: "Projects Delivered", value: "12", change: "+2 vs last month" },
        { title: "Design Systems", value: "98%", change: "+4% vs last month" },
        { title: "Team Collaboration", value: "95%", change: "Consistent" },
        { title: "Client Satisfaction", value: "100%", change: "+2% vs last month" }
      ]
    },
    // Add more team members as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Team Performance</h1>
            <p className="text-gray-600">Collective and individual performance metrics</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <TeamMetricCard
          title="Team Performance Score"
          value="92.5%"
          change="+3.2% from last month"
          icon={BarChart2}
        />
        <TeamMetricCard
          title="Project Completion Rate"
          value="97.8%"
          change="Above target"
          icon={Target}
        />
        <TeamMetricCard
          title="Team Velocity"
          value="856 pts"
          change="+12% increase"
          icon={Activity}
        />
        <TeamMetricCard
          title="Collaboration Score"
          value="94.2%"
          change="Highly effective"
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <section className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Team Members</h2>
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Team Insights</h2>
          <div className="space-y-4">
            <InsightCard
              icon={TrendingUp}
              title="Growth Trajectory"
              description="Team showing consistent improvement in delivery speed and quality"
              color="blue"
            />
            <InsightCard
              icon={UserCheck}
              title="Skill Distribution"
              description="Well-balanced skill set across team members"
              color="green"
            />
            <InsightCard
              icon={MessageSquare}
              title="Communication"
              description="Strong internal communication patterns observed"
              color="purple"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

const InsightCard = ({ icon: Icon, title, description, color }: {
  icon: any;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple';
}) => {
  const colors = {
    blue: 'bg-blue-50 border-blue-100 text-blue-800',
    green: 'bg-green-50 border-green-100 text-green-800',
    purple: 'bg-purple-50 border-purple-100 text-purple-800',
  };

  return (
    <div className={`p-4 rounded-lg border ${colors[color]}`}>
      <div className="flex items-center gap-3 mb-2">
        <Icon size={20} />
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
};
