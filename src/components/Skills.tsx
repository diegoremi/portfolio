import { useTranslations } from 'next-intl';
import { skillCategories } from '@/data/skills';
import TechPill from './TechPill';

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-[var(--foreground)]">
          <span className="font-mono text-base font-normal text-[var(--accent)]">03.</span>
          {t('title')}
        </h2>

        <div className="mt-10 space-y-6">
          {skillCategories.map((cat) => (
            <div key={cat.labelKey} className="sm:grid sm:grid-cols-[120px_1fr] sm:items-baseline sm:gap-4">
              <h3 className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-[var(--muted)] sm:mb-0">
                {t(cat.labelKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <TechPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
