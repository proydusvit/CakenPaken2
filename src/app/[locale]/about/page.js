import AboutUs from '@/blocks/About/About';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('About');
  return (
    <AboutUs
      home={t('home')}
      about={t('about')}
      caken={t('caken')}
      weare={t('weare')}
      yes={t('yes')}
      no={t('no')}
      style={t('style')}
    />
  );
};

export default About;
