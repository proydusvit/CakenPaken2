import Team from '@/blocks/Team/Team';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Team' });
  return {
    title: ` ${t('team')} | ${t('cak')}`,
    description: ` ${t('team')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/team',
    },
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
  const t = useTranslations('Team');
  return (
    <Team
      home={t('home')}
      teamt={t('team')}
      joined={t('joined')}
      Bombar={'Bombar'}
      Arsen={'Arsen'}
      Kolisnyk={'Kolisnyk'}
      Savchuk={'Savchuk'}
      Yavych={'Yavych'}
      Meloy={'Meloy'}
      Natali={'Natali'}
      Stas={'Stas'}
      Sopot={'Sopot'}
      Chycha={'Chycha'}
    />
  );
};

export default Crew;
