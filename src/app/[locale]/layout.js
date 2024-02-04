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
import { GoogleAnalytics } from '@next/third-parties/google';
export const metadata = {
  title: 'CakenPaken',
  description: 'CakenPaken',
  // viewport:
  //   'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
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

        <meta
          name="google-site-verification"
          content="Oj3W6yNvEyIBpdkspMFsIineMFPdMQiVK3Hr-eeZasg"
        />
        <link rel="canonical" href="https://www.cakenpaken.com" />
        <link
          rel="alternate"
          hreflang="en-US"
          href="https://www.cakenpaken.com/en-EN"
        />
        <link
          rel="alternate"
          hreflang="de-DE"
          href="https://www.cakenpaken.com/uk-UK"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
        />

        <link
          rel="stylesheet"
          media="print"
          // onLoad="this.onload=null;this.removeAttribute('media');"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzrjsjo7z/image/upload/v1706289851/rkhnc0xe3c2b7fnzgf6o.jpg"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          />
        </noscript>
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
        <GoogleAnalytics gaId="G-3LJC7W91KP" />
        <SpeedInsights />
      </body>
    </html>
  );
}
