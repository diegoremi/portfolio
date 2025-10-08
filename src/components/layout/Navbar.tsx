'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    return pathname === path
      ? 'text-[#4F46E5] font-bold'
      : 'text-gray-400 hover:text-white transition-colors';
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0D] border-b border-solid border-b-[#262626] px-10 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
          <Link href="/">Tech Portfolio</Link>
        </div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/" className={getLinkClassName('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={getLinkClassName('/projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/technologies" className={getLinkClassName('/technologies')}>
              Technologies
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getLinkClassName('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4F46E5] transition-colors">
            <SiGithub size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4F46E5] transition-colors">
            <SiLinkedin size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}