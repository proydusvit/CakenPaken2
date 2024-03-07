import BorderWar from '@/blocks/Projects/EdgeOfWar/EdgeOfWar';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: ` ${t('border')} | ${t('cak')}`,
    description: ` ${t('border')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/projects/edge_of_war',
    },
    openGraph: {
      title: ` ${t('border')} | ${t('cak')}`,
      description: ` ${t('border')} | ${t('cak')}`,
      url: `www.cakenpaken/projects/edge_of_war`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const EdgeOfWar = () => {
  const t = useTranslations('Projects');
  return (
    <BorderWar
      projects={t('projects')}
      home={t('home')}
      border={t('border')}
      textB={t('textB')}
      titleB={t('titleB')}
    />
  );
};

export default EdgeOfWar;
