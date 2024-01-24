import AboutUs from '@/blocks/About/About';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: t('about'),
    openGraph: {
      title: t('about'),
      description: 'Що таке CakenPaken!',
      url: `www.cakenpaken/about`,
      siteName: 'CakenPaken',
      images: [
        {
          url: '../../../assets/imgAbout/Image_About.webp',
          width: 192,
          height: 192,
        },
      ],
      locale: locale,
      type: 'website',
    },
  };
}
const About = () => {
  return <AboutUs />;
};

export default About;
