import TrailR from '@/blocks/Projects/Trail/Trail';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('trail'),
  };
}
const Trail = () => {
  return <TrailR />;
};

export default Trail;
