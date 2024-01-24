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
          url: 'https://res.cloudinary.com/dzrjsjo7z/image/upload/v1700133880/ap3hds38ylmfxvf1vcbs.jpg',
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
