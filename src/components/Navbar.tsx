'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const sections = ['about', 'experience', 'skills', 'projects', 'contact'] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy: track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cvFile = `/cv/Diego_Remicio_CV_${locale.toUpperCase()}.pdf`;

  function handleNav(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--background)]/95 backdrop-blur-md shadow-sm'
          : 'bg-[var(--background)]'
      } border-b border-[var(--border)]`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActive('');
          }}
          className="text-lg font-bold text-[var(--foreground)] tracking-tight transition-colors hover:text-[var(--accent)]"
        >
          DR
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <li key={s}>
              <button
                onClick={() => handleNav(s)}
                className={`relative pb-1 text-sm transition-colors ${
                  active === s
                    ? 'text-[var(--foreground)] font-medium'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {t(s)}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[var(--accent)] transition-all duration-300 ${
                    active === s ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)] transition-all duration-200 hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
          >
            {t('downloadCV')}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label={open ? t('closeMenu') : t('openMenu')}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — animated height */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--border)] bg-[var(--background)] px-4 pb-4">
            <ul className="flex flex-col gap-3 pt-3">
              {sections.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav(s)}
                    className={`text-sm transition-colors ${
                      active === s
                        ? 'text-[var(--foreground)] font-medium'
                        : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    {t(s)}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {t('downloadCV')}
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
