import Category from '@/blocks/Gallery/Category';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Gallery' });
  return {
    title: t('gallery'),
    openGraph: {
      title: t('gallery'),
      description: 'Гелерея CakenPaken',
      url: `www.cakenpaken/about`,
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
const Gallery = () => {
  return <Category />;
};

export default Gallery;
