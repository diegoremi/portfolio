import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-[var(--foreground)]">
          <span className="font-mono text-base font-normal text-[var(--accent)]">01.</span>
          {t('title')}
        </h2>

        <div className="mt-8 flex flex-col gap-10 md:flex-row md:gap-12">
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-[var(--muted)] md:flex-1">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>

          <div className="mx-auto w-[200px] shrink-0 md:mx-0 md:w-[240px]">
            <div className="about-photo-wrapper relative">
              <Image
                src="/foto_diego_2026.jpeg"
                alt={t('photoAlt')}
                width={240}
                height={240}
                className="relative z-10 rounded-sm grayscale-[20%] transition-all duration-300 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
