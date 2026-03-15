import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { routing } from '@/i18n/routing';
import { getTranslations as getT } from 'next-intl/server';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'Angular',
      'TypeScript',
      'Senior Developer',
      'Frontend Engineer',
      'React',
      'Node.js',
      'Spain',
      'EU',
      'Remote',
    ],
    icons: {
      icon: [
        { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      shortcut: '/favicon/favicon.ico',
      apple: '/favicon/apple-touch-icon.png',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://diegoremicio.dev',
      type: 'website' as const,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const tNav = await getT({ locale, namespace: 'nav' });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
            >
              {tNav('skipToContent')}
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
