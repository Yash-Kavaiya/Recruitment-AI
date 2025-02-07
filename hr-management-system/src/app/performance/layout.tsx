import { BarChart2, Users, Settings, Home, ClipboardList, Clock, FileText } from "lucide-react";
import Link from "next/link";

export default function PerformanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-blue-600 font-medium">
            <Home size={20} />
            Back to Dashboard
          </Link>
        </div>
        
        <nav className="space-y-2">
          <NavItem icon={BarChart2} title="Overview" href="/performance" active />
          <NavItem icon={Users} title="Team Performance" href="/performance/team" />
          <NavItem icon={ClipboardList} title="Reviews" href="/performance/reviews" />
          <NavItem icon={Clock} title="Timesheets" href="/performance/timesheets" />
          <NavItem icon={FileText} title="Reports" href="/performance/reports" />
          <NavItem icon={Settings} title="Settings" href="/performance/settings" />
        </nav>
      </aside>
      
      <main className="flex-1 bg-gray-50">
        {children}
      </main>
    </div>
  );
}

const NavItem = ({ icon: Icon, title, href, active = false }: {
  icon: any;
  title: string;
  href: string;
  active?: boolean;
}) => (
  <Link
    href={href}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
      active 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    <Icon size={20} />
    <span>{title}</span>
  </Link>
);
