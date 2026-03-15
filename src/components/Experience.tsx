import { useTranslations } from 'next-intl';
import { experiences } from '@/data/experience';
import TechPill from './TechPill';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-[var(--foreground)]">
          <span className="font-mono text-base font-normal text-[var(--accent)]">02.</span>
          {t('title')}
        </h2>

        <div className="hover-dim mt-10 -mx-5 overflow-hidden">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-lg px-5 py-5 transition-colors duration-200 hover:bg-[var(--surface)]"
            >
              <div className="sm:grid sm:grid-cols-[160px_1fr] sm:gap-4">
                {/* Date & Location */}
                <div className="mb-2 sm:mb-0 sm:pt-0.5">
                  <p className="font-mono text-xs text-[var(--muted)]">
                    {t(`${exp.id}.date`)}
                  </p>
                  {t(`${exp.id}.location`) && (
                    <p className="font-mono text-xs text-[var(--muted)]">
                      {t(`${exp.id}.location`)}
                    </p>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-semibold leading-snug">
                    <span className="text-[var(--foreground)]">{t(`${exp.id}.role`)}</span>
                    <span className="text-[var(--muted)]"> · </span>
                    <span className="text-[var(--accent)]">{t(`${exp.id}.company`)}</span>
                  </h3>

                  <ul className="mt-2.5 space-y-1.5">
                    {Array.from({ length: exp.bulletCount }, (_, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--muted)] opacity-40" />
                        {t(`${exp.id}.bullet${i + 1}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.techs.map((tech) => (
                      <TechPill key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
