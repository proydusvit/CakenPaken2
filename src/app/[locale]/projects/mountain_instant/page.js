import Film from '@/blocks/Projects/Film/Film';

import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('film'),
  };
}
const Mountaininstant = () => {
  return <Film />;
};

export default Mountaininstant;
