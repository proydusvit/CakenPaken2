import DonateCaken from '@/blocks/BtnDonate/Donate/Donate';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Support' });

  return {
    title: t('suppotteam'),
    openGraph: {
      title: t('suppotteam'),
      description: 'Help us',
      url: `www.cakenpaken/donate`,
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

const Donate = () => {
  return <DonateCaken />;
};

export default Donate;
