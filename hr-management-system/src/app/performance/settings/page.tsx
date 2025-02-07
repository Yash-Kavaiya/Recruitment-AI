import { 
  Bell, 
  Gauge, 
  Lock,
  Mail,
  Eye,
  Users,
  BarChart,
  Save
} from "lucide-react";

const SettingsSection = ({ 
  title, 
  description, 
  children 
}: { 
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600 text-sm mb-6">{description}</p>
    {children}
  </section>
);

const Toggle = ({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) => (
  <label className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
    <span className="text-gray-700">{label}</span>
    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="peer invisible w-0 h-0"
      />
      <span className="absolute inset-0 cursor-pointer rounded-full bg-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-blue-600" />
      <span className="absolute inset-y-1 start-1 w-4 h-4 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-6" />
    </div>
  </label>
);

const Select = ({ label, options }: { label: string; options: string[] }) => (
  <div className="py-3 border-b border-gray-100 last:border-0">
    <label className="block text-gray-700 mb-2">{label}</label>
    <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-800">
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Performance Settings</h1>
        <p className="text-gray-600">Configure performance tracking and analysis preferences</p>
      </header>

      <div className="space-y-6">
        <SettingsSection 
          title="Notification Preferences"
          description="Configure how you want to receive performance-related notifications"
        >
          <div className="space-y-1">
            <Toggle label="Email notifications for performance updates" defaultChecked />
            <Toggle label="Weekly performance digest" defaultChecked />
            <Toggle label="Team performance alerts" />
            <Toggle label="Goal completion notifications" defaultChecked />
          </div>
        </SettingsSection>

        <SettingsSection
          title="Performance Metrics"
          description="Customize which metrics to track and display"
        >
          <div className="space-y-4">
            <Select 
              label="Default View Period"
              options={["Weekly", "Monthly", "Quarterly", "Yearly"]}
            />
            <Select
              label="Performance Rating Scale"
              options={["1-5 Scale", "1-10 Scale", "Percentage"]}
            />
            <div className="space-y-1">
              <Toggle label="Track productivity metrics" defaultChecked />
              <Toggle label="Include peer reviews" defaultChecked />
              <Toggle label="AI-powered insights" defaultChecked />
              <Toggle label="Attendance tracking" />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection
          title="Privacy Settings"
          description="Control who can view performance data"
        >
          <div className="space-y-4">
            <Select
              label="Performance Data Visibility"
              options={["Team Leaders Only", "Department Wide", "Organization Wide"]}
            />
            <div className="space-y-1">
              <Toggle label="Anonymous peer reviews" defaultChecked />
              <Toggle label="Share achievements publicly" />
              <Toggle label="Allow AI analysis" defaultChecked />
            </div>
          </div>
        </SettingsSection>

        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Save size={18} />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
