import SupportUkraine from '@/blocks/BtnDonate/SupportUkraine/SupportUkraine';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Support' });

  return {
    title: t('donation'),
  };
}
const Support = () => {
  return <SupportUkraine />;
};

export default Support;
