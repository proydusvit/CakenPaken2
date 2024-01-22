import BorderWar from '@/blocks/Projects/EdgeOfWar/EdgeOfWar';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('border'),
  };
}
const EdgeOfWar = () => {
  return <BorderWar />;
};

export default EdgeOfWar;
