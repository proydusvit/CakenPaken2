import AboutUs from '@/blocks/About/About';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: t('about'),
    openGraph: {
      title: t('about'),
      description: 'Що таке CakenPaken',
      url: `www.cakenpaken/about`,
      siteName: 'CakenPaken',
      // images: [
      //   {
      //     url: '/favicon/android-chrome-512x512.png',
      //     width: 512,
      //     height: 512,
      //   },
      //   {
      //     url: '/favicon/android-chrome-192x192.png',
      //     width: 192,
      //     height: 192,
      //   },
      // ],
      locale: locale,
      type: 'website',
    },
  };
}
const About = () => {
  return <AboutUs />;
};

export default About;
