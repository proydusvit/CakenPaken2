import TrailR from '@/blocks/Projects/Trail/Trail';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: ` ${t('trail')} | ${t('cak')}`,
    description: ` ${t('trail')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/projects/trail',
    },
    openGraph: {
      title: ` ${t('trail')} | ${t('cak')}`,
      description: ` ${t('trail')} | ${t('cak')}`,
      url: `www.cakenpaken/projects/trail`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Trail = () => {
  const t = useTranslations('Projects');
  return (
    <>
      <TrailR
        home={t('home')}
        projects={t('projects')}
        trail={t('trail')}
        textT={t('textT')}
      />
    </>
  );
};

export default Trail;
