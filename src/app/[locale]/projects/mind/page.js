import Mindproj from '@/blocks/Projects/Mind/Mind';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });
  return {
    title: ` ${t('mindS')} | ${t('cak')}`,
    description: ` ${t('mindS')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/projects/mind',
    },
    openGraph: {
      title: ` ${t('mindS')} | ${t('cak')}`,
      description: ` ${t('mindS')} | ${t('cak')}`,
      url: `www.cakenpaken/projects/mind`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Mind = () => {
  const t = useTranslations('Projects');
  return (
    <Mindproj
      home={t('home')}
      projects={t('projects')}
      mindS={t('mindS')}
      mind={t('mind')}
      textM={t('textM')}
    />
  );
};

export default Mind;
