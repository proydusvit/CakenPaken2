import DonateCaken from '@/blocks/BtnDonate/Donate/Donate';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Support' });

  return {
    title: t('suppotteam'),
  };
}
const Donate = () => {
  return <DonateCaken />;
};

export default Donate;
