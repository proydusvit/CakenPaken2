import Team from '@/blocks/Team/Team';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Team' });

  return {
    title: t('team'),
  };
}
const Crew = () => {
  return <Team />;
};

export default Crew;
