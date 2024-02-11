import GalleryTrail from '@/blocks/Gallery/Trail/Trail';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: ` ${t('trail')} | ${t('cak')}`,
    description: ` ${t('trail')} | ${t('gallery')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/gallery/trail',
    },
    openGraph: {
      title: ` ${t('trail')} ${t('cak')}`,
      description: ` ${t('trail')} | ${t('gallery')} | ${t('cak')}`,
      url: `www.cakenpaken/gallery/trail`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Trail = () => {
  return <GalleryTrail />;
};

export default Trail;
