import BorderWar from '@/blocks/Projects/EdgeOfWar/EdgeOfWar';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: ` ${t('border')} | ${t('cak')}`,
    description: ` ${t('border')} | ${t('cak')}`,
    openGraph: {
      title: ` ${t('border')} | ${t('cak')}`,
      description: ` ${t('border')} | ${t('cak')}`,
      url: `www.cakenpaken/projects/edge_of_war`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const EdgeOfWar = () => {
  return <BorderWar />;
};

export default EdgeOfWar;
