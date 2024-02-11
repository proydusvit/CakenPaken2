import Border from '@/blocks/Gallery/EdgeOfWar/EdgeOfWar';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: ` ${t('border')} |  ${t('cak')}`,
    description: ` ${t('border')} | ${t('gallery')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/gallery/edge_of_war',
    },
    openGraph: {
      title: ` ${t('border')} | ${t('cak')}`,
      description: ` ${t('border')} | ${t('gallery')} | ${t('cak')}`,
      url: `www.cakenpaken/gallery/edge_of_war`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const EdgeOfWar = () => {
  return <Border />;
};

export default EdgeOfWar;
