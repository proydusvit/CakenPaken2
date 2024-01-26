import TrailR from '@/blocks/Projects/Trail/Trail';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: ` ${t('trail')} | ${t('cak')}`,
    description: ` ${t('trail')} | ${t('cak')}`,
    openGraph: {
      title: ` ${t('trail')} | ${t('cak')}`,
      description: ` ${t('trail')} | ${t('cak')}`,
      url: `www.cakenpaken/gallery/trail`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Trail = () => {
  return <TrailR />;
};

export default Trail;
