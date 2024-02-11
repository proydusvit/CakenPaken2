import DonateCaken from '@/blocks/BtnDonate/Donate/Donate';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Support' });

  return {
    title: ` ${t('suppotteam')} | ${t('cak')}`,
    description: ` ${t('suppotteam')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/donate',
    },
    openGraph: {
      title: ` ${t('suppotteam')} | ${t('cak')}`,
      description: ` ${t('suppotteam')} | ${t('cak')}`,
      url: `www.cakenpaken/donate`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}

const Donate = () => {
  return <DonateCaken />;
};

export default Donate;
