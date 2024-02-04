import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import styles from './Projects.module.scss';
import Section from '@/components/Section/Section';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const Projects = () => {
  const t = useTranslations('Projects');
  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        item: {
          '@id': `cakenpaken`,
          name: t('home'),
        },
      },
      {
        '@type': 'ListItem',
        position: '2',
        item: {
          '@id': `cakenpaken/projects`,
          name: t('projects'),
        },
      },
    ],
  };
  const breadCrumbsList = [
    {
      link: '/',
      text: t('home'),
    },
    {
      link: '/projects',
      text: t('projects'),
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />

      <Section>
        <BreadCrumbs list={breadCrumbsList} />
        <h1 className={styles.name}>{t('projects')}</h1>

        <Link
          rel="canonical"
          className={styles.category}
          href="/projects/mountain_instant"
          aria-label="mountain_instant"
        ></Link>
        <Link
          rel="canonical"
          className={`${styles.category} ${styles.category_two}`}
          href="/projects/trail"
          aria-label="trail"
        ></Link>
        <Link
          rel="canonical"
          className={`${styles.category} ${styles.category_three}`}
          href="/projects/edge_of_war"
          aria-label="edge_of_war"
        ></Link>
        <Link
          rel="canonical"
          className={`${styles.category} ${styles.category_mind}`}
          href="/projects/mind"
          aria-label="mind"
        ></Link>
      </Section>
    </>
  );
};

export default Projects;
