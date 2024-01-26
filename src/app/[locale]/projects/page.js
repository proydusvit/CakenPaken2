import Project from '@/blocks/Projects/Projects';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });
  return {
    title: ` ${t('projects')} | ${t('cak')}`,
    description: `${t('projects')} | ${t('cak')}`,
    openGraph: {
      title: ` ${t('projects')} | ${t('cak')}`,
      description: ` ${t('projects')} | ${t('cak')}`,
      url: `www.cakenpaken/projects`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Projects = () => {
  return <Project />;
};

export default Projects;
