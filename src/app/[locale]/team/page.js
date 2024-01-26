import Team from '@/blocks/Team/Team';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Team' });
  return {
    title: ` ${t('team')} | ${t('cak')}`,
    description: ` ${t('team')} | ${t('cak')}`,
    openGraph: {
      title: ` ${t('team')} | ${t('cak')}`,
      description: ` ${t('team')} | ${t('cak')}`,
      url: `www.cakenpaken/team`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Crew = () => {
  return <Team />;
};

export default Crew;
