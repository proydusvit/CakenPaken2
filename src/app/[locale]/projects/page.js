import Project from '@/blocks/Projects/Projects';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });
  return {
    title: ` ${t('projects')} | ${t('cak')}`,
    description: `${t('projects')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/projects',
    },
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
const websiteJsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Проєкти',
  description: 'Проєкти',
  url: 'https://www.cakenpaken.com/projects',
};
const Projects = () => {
  const t = useTranslations('Projects');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        key="website-jsonld"
      />
      <Project home={t('home')} projects={t('projects')} />
    </>
  );
};

export default Projects;
