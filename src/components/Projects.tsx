import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { projects } from '@/data/projects';
import TechPill from './TechPill';
import { GithubIcon } from './Icons';

export default function Projects() {
  const t = useTranslations('projects');
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-[var(--foreground)]">
          <span className="font-mono text-base font-normal text-[var(--accent)]">04.</span>
          {t('title')}
        </h2>

        {/* Featured projects with screenshots */}
        <div className="mt-10 space-y-12">
          {featured.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--card)] transition-colors duration-200 hover:border-[var(--accent)]/30"
            >
              {p.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={t(`${p.id}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[var(--background)]/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
              )}

              <div className="px-5 py-5 sm:px-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-[var(--foreground)]">
                        {t(`${p.id}.title`)}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                        {t('freelanceWork')}
                      </span>
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                      {t(`${p.id}.description`)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.techs.map((tech) => (
                        <TechPill key={tech} name={tech} />
                      ))}
                    </div>
                  </div>

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
                      aria-label={`GitHub: ${t(`${p.id}.title`)}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <h3 className="mt-16 font-mono text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              {t('otherProjects')}
            </h3>

            <div className="hover-dim mt-4 -mx-5 overflow-hidden">
              {other.map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg px-5 py-5 transition-colors duration-200 hover:bg-[var(--surface)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--foreground)]">
                        {t(`${p.id}.title`)}
                      </h4>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                        {t(`${p.id}.description`)}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.techs.map((tech) => (
                          <TechPill key={tech} name={tech} />
                        ))}
                      </div>
                    </div>

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
                        aria-label={`GitHub: ${t(`${p.id}.title`)}`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
