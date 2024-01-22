import GalleryFilm from '@/blocks/Gallery/Film/Film';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('film'),
  };
}
const Film = () => {
  return <GalleryFilm />;
};

export default Film;
