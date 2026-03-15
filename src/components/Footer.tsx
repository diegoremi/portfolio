import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] px-6 py-6 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-[var(--muted)]">
          {t('copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
