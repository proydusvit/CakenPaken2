import { notFound } from 'next/navigation';
import '../../styles/global.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import Header from '@/blocks/layout/Header/Header';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/blocks/layout/Footer/Footer';
import Support from '@/blocks/layout/SupportAndDonate/SupportAndDonate';

export const metadata = {
  title: 'Cakenpaken',
  description: 'Cakenpaken',
};

// const locales = ['en', 'uk'];

// export function generateStaticParams() {
//   return locales.map((locale) => ({locale}));
// }

export default function LocaleLayout({ children, params }) {
  const locale = useLocale();
  const t = useTranslations('Common');
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>

      <body>
        <Header
          projects={t('projects')}
          shop={t('shop')}
          events={t('events')}
          about={t('about')}
          crew={t('crew')}
          gallery={t('gallery')}
          support={t('support')}
          donate={t('donate')}
        />

        <Support support={t('support')} donate={t('donate')} />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
