import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import LettersToWomensTime from '@/blocks/Projects/LettersToWomensTime/LettersToWomensTime';

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
const LettersToWomensTimePage = () => {
  const t = useTranslations('Projects');
  return (
    <LettersToWomensTime
      home={t('home')}
      projects={t('projects')}
      mindS={t('women')}
      mind={t('women')}
      textM={t('textW')}
    />
  );
};

export default LettersToWomensTimePage;
