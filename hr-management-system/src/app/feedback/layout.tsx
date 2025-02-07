'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 border-r bg-white p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Feedback</h2>
        <ul className="space-y-2">
          <NavItem href="/feedback" active={pathname === '/feedback'}>Overview</NavItem>
          <NavItem href="/feedback/virtual-assistant" active={pathname === '/feedback/virtual-assistant'}>Virtual Assistant</NavItem>
          <NavItem href="/feedback/hr-desk" active={pathname === '/feedback/hr-desk'}>HR Employee Desk</NavItem>
          <NavItem href="/feedback/survey" active={pathname === '/feedback/survey'}>Survey & Feedback</NavItem>
          <NavItem href="/feedback/analytics" active={pathname === '/feedback/analytics'}>Analytics & Insights</NavItem>
        </ul>
      </nav>
      <main className="flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
}

const NavItem = ({
  children,
  href,
  active = false,
}: {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}) => (
  <li>
    <Link
      href={href}
      className={`block px-4 py-2 rounded-lg transition-colors ${
        active ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
      }`}
    >
      {children}
    </Link>
  </li>
);
