import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function CreateJobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link 
              href="/recruitment" 
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2 w-fit"
            >
              <ArrowLeft size={20} />
              Back to Recruitment
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Dashboard</Link>
              <ChevronRight size={16} />
              <Link href="/recruitment" className="hover:text-gray-900">Recruitment</Link>
              <ChevronRight size={16} />
              <span className="text-gray-900">Create Job</span>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
