import Project from '@/blocks/Projects/Projects';
import { getTranslations } from 'next-intl/server';
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
  name: t('projects'),
  description: t('projects'),
  url: 'https://www.cakenpaken.com/projects',
};
const Projects = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        key="website-jsonld"
      />
      <Project />
    </>
  );
};

export default Projects;
