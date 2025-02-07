'use client';
import Link from "next/link";
import { Bot, UserSquare2, ClipboardList, BarChart2, ArrowLeft } from "lucide-react";

export default function FeedbackOverview() {
  return (
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