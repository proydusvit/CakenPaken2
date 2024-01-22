import Category from '@/blocks/Gallery/Category';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Gallery' });

  return {
    title: t('gallery'),
  };
}
const Gallery = () => {
  return <Category />;
};

export default Gallery;
