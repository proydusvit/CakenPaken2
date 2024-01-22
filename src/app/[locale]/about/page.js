import AboutUs from '@/blocks/About/About';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: t('about'),
  };
}
const About = () => {
  return <AboutUs />;
};

export default About;
