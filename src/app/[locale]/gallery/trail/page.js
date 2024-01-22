import GalleryTrail from '@/blocks/Gallery/Trail/Trail';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('trail'),
  };
}
const Trail = () => {
  return <GalleryTrail />;
};

export default Trail;
