import Project from '@/blocks/Projects/Projects';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: t('projects'),
  };
}
const Projects = () => {
  return <Project />;
};

export default Projects;
