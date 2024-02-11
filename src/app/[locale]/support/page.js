import SupportUkraine from '@/blocks/BtnDonate/SupportUkraine/SupportUkraine';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Support' });

  return {
    title: ` ${t('donation')} | ${t('cak')}`,
    description: ` ${t('donation')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/support',
    },
    openGraph: {
      title: ` ${t('donation')} | ${t('cak')}`,
      description: ` ${t('donation')} | ${t('cak')}`,
      url: `www.cakenpaken/support`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Support = () => {
  return <SupportUkraine />;
};

export default Support;
