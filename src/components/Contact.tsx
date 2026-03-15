import { useTranslations } from 'next-intl';
import { LinkedInIcon, GithubIcon } from './Icons';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-[var(--foreground)]">
          <span className="font-mono text-base font-normal text-[var(--accent)]">05.</span>
          {t('title')}
        </h2>

        <p className="mt-8 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
          {t('description')}
        </p>

        <a
          href={`mailto:${t('email')}`}
          className="mt-6 inline-block font-mono text-base text-[var(--accent)] transition-colors duration-200 hover:text-[var(--accent-hover)]"
          aria-label="Email"
        >
          {t('email')}
        </a>

        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://linkedin.com/in/diegoremicio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/diegoremi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
