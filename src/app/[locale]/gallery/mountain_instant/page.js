import GalleryFilm from '@/blocks/Gallery/Film/Film';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('film'),
    openGraph: {
      title: t('film'),
      description: 'Гелерея Гірська мить',
      url: `www.cakenpaken/gallery/mountain_instant`,
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
const Film = () => {
  return <GalleryFilm />;
};

export default Film;
