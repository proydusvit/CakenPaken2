import Mindproj from '@/blocks/Projects/Mind/Mind';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('mindS'),
  };
}
const Mind = () => {
  return <Mindproj />;
};

export default Mind;
