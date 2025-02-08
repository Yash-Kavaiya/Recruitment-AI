'use client';

import { memo } from 'react';
import Link from "next/link";
import { 
  Users, 
  BarChart2, 
  Award, 
  MessageSquare,
  Plus,
  ClipboardList,
  Calendar,
  LineChart,
  LucideIcon
} from "lucide-react";

interface Module {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

interface QuickAction {
  href: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const MODULES: Module[] = [
  {
    title: "Recruitment",
    description: "AI-powered recruitment system with automated JD creation and candidate matching",
    icon: Users,
    href: "/recruitment"
  },
  {
    title: "Performance",
    description: "Track and analyze employee performance with AI-driven metrics",
    icon: BarChart2,
    href: "/performance"
  },
  {
    title: "Recommendations",
    description: "Data-driven employee career progression and development insights",
    icon: Award,
    href: "/recommendations"
  },
  {
    title: "Feedback",
    description: "Comprehensive feedback system with AI-powered analysis",
    icon: MessageSquare,
    href: "/feedback"
  }
];

const QUICK_ACTIONS: QuickAction[] = [
  {
    href: "/recruitment/create-job",
    icon: Plus,
    title: "Create Job Posting",
    subtitle: "Post new positions"
  },
  {
    href: "/recruitment/applications",
    icon: ClipboardList,
    title: "Review Applications",
    subtitle: "25 pending reviews"
  },
  {
    href: "/recruitment/schedule",
    icon: Calendar,
    title: "Schedule Interviews",
    subtitle: "Manage calendar"
  },
  {
    href: "/performance/reviews",
    icon: LineChart,
    title: "Performance Reviews",
    subtitle: "Start evaluation"
  }
];

const ModuleCard = memo(({ title, description, icon: Icon, href }: Module) => (
  <Link href={href} className="block group" aria-label={title}>
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100 group-hover:bg-gradient-to-br from-white to-blue-50">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg text-white
          group-hover:from-indigo-600 group-hover:to-blue-500 transition-all duration-300">
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </Link>
));

const QuickActionButton = memo(({ href, icon: Icon, title, subtitle }: QuickAction) => (
  <Link href={href} className="block group" aria-label={title}>
    <div className="w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100 hover:bg-gradient-to-br from-white to-blue-50">
      <div className="flex items-start gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg text-white
          group-hover:from-indigo-600 group-hover:to-blue-500 transition-all duration-300">
          <Icon size={18} aria-hidden="true" />
        </div>
        <div>
          <span className="block font-medium text-gray-800">{title}</span>
          <span className="text-sm text-gray-500">{subtitle}</span>
        </div>
      </div>
    </div>
  </Link>
));

const NavButton = memo(({ active, children }: { active?: boolean; children: React.ReactNode }) => (
  <button 
    className={`px-6 py-2.5 rounded-lg transition-all duration-300 font-medium
      ${active 
        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-600' 
        : 'text-gray-700 hover:bg-white'
      }`}
  >
    {children}
  </button>
));

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
        <h1 className="text-4xl font-bold mb-2">HR Management Dashboard</h1>
        <p className="text-blue-100">AI-Powered Human Resources Management System</p>
      </header>

      <nav className="mb-8">
        <div className="flex gap-4">
          <NavButton active>Overview</NavButton>
          <NavButton>Analytics</NavButton>
          <NavButton>Settings</NavButton>
        </div>
      </nav>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((module, index) => (
            <ModuleCard key={module.href + index} {...module} />
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {QUICK_ACTIONS.map((action, index) => (
              <QuickActionButton key={action.href + index} {...action} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

ModuleCard.displayName = 'ModuleCard';
QuickActionButton.displayName = 'QuickActionButton';
NavButton.displayName = 'NavButton';
