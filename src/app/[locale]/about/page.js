import AboutUs from '@/blocks/About/About';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: ` ${t('about')} | ${t('cak')}`,
    description: ` ${t('about')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/about',
    },
    openGraph: {
      title: ` ${t('about')} | ${t('cak')}`,
      description: ` ${t('about')} | ${t('cak')}`,
      url: `www.cakenpaken/about`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const About = () => {
  return <AboutUs />;
};

export default About;
