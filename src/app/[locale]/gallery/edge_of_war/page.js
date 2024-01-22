import Border from '@/blocks/Gallery/EdgeOfWar/EdgeOfWar';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('border'),
  };
}
const EdgeOfWar = () => {
  return <Border />;
};

export default EdgeOfWar;
