'use client';
import Link from "next/link";
import { 
  Bot, 
  UserSquare2, 
  ClipboardList, 
  BarChart2, 
  ArrowLeft,
  Home,
  Users,
  Settings,
  HelpCircle,
  Bell,
  MessageSquare
} from "lucide-react";

export default function FeedbackOverview() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-16 bg-white border-r border-gray-200 flex flex-col items-center py-8">
        <Link href="/" className="p-3 text-gray-500 hover:text-green-600 mb-8">
          <Home size={24} />
        </Link>
        
        <div className="flex-1 flex flex-col gap-4">
          <Link href="/feedback" className="p-3 text-green-600 bg-green-50 rounded-xl">
            <MessageSquare size={24} />
          </Link>
          <Link href="/team" className="p-3 text-gray-500 hover:text-green-600">
            <Users size={24} />
          </Link>
          <Link href="/notifications" className="p-3 text-gray-500 hover:text-green-600 relative">
            <Bell size={24} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <Link href="/help" className="p-3 text-gray-500 hover:text-green-600">
            <HelpCircle size={24} />
          </Link>
          <Link href="/settings" className="p-3 text-gray-500 hover:text-green-600">
            <Settings size={24} />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>

          <header className="mb-8 bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-2xl">
            <h1 className="text-4xl font-bold mb-2">Employee Feedback Transformation System</h1>
            <p className="text-green-100">A comprehensive, next-gen feedback loop for employee insights.</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeedbackLink 
              href="/feedback/virtual-assistant" 
              title="Virtual Assistant Interface" 
              description="AI-powered conversational feedback assistant"
              icon={Bot}
            />
            <FeedbackLink 
              href="/feedback/hr-desk" 
              title="HR Employee Desk" 
              description="Centralized HR request management"
              icon={UserSquare2}
            />
            <FeedbackLink 
              href="/feedback/survey" 
              title="Survey & Feedback System" 
              description="Automated survey generation and analysis"
              icon={ClipboardList}
            />
            <FeedbackLink 
              href="/feedback/analytics" 
              title="Analytics & Insights" 
              description="Real-time feedback metrics and trends"
              icon={BarChart2}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

const FeedbackLink = ({ 
  href, 
  title, 
  description, 
  icon: Icon 
}: { 
  href: string; 
  title: string; 
  description: string;
  icon: any;
}) => (
  <Link 
    href={href} 
    className="block p-6 bg-white rounded-xl shadow hover:shadow-md transition border border-transparent hover:border-green-100 group"
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 text-white
        group-hover:from-teal-600 group-hover:to-green-500 transition-all duration-300">
        <Icon size={24} />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600 ml-[56px]">{description}</p>
  </Link>
);