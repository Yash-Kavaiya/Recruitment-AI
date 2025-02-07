'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function RecommendationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 border-r bg-white p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recommendations</h2>
        <ul className="space-y-2">
          <NavItem href="/recommendations" exact active={pathname === '/recommendations'}>Overview</NavItem>
          <NavItem href="/recommendations/conversions" active={pathname === '/recommendations/conversions'}>Conversions</NavItem>
          <NavItem href="/recommendations/career-paths" active={pathname === '/recommendations/career-paths'}>Career Paths</NavItem>
          <NavItem href="/recommendations/skills" active={pathname === '/recommendations/skills'}>Skill Analysis</NavItem>
        </ul>
      </nav>
      <main className="flex-1 bg-gray-50">
        {children}
      </main>
    </div>
  );
}

const NavItem = ({ 
  children, 
  href, 
  active = false,
  exact = false 
}: { 
  children: React.ReactNode; 
  href: string; 
  active?: boolean;
  exact?: boolean;
}) => (
  <li>
    <Link
      href={href}
      className={`block px-4 py-2 rounded-lg transition-colors ${
        active 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
      }`}
    >
      {children}
    </Link>
  </li>
);