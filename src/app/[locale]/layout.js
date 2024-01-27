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
  title: 'CakenPaken',
  description: 'CakenPaken',
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function LocaleLayout({ children, params }) {
  const locale = useLocale();
  const t = useTranslations('Common');

  const websiteJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: 'CakenPaken',
    url: 'https://www.cakenpaken.com/',
  };

  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          key="website-jsonld"
        />
        {/* <meta property="og:title" content="Link preview title" />
        <meta property="og:image" content="Link preview image URL" />
        <meta property="og:description" content="Link preview description" />
        <meta property="og:url" content="Canonical link preview URL" /> */}
        <meta
          name="google-site-verification"
          content="Oj3W6yNvEyIBpdkspMFsIineMFPdMQiVK3Hr-eeZasg"
        />
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
        {/* <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
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
