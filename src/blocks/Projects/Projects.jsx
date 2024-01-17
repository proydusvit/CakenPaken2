import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Projects.module.scss';
// import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

// const breadCrumbsList = [
//   {
//     link: '/',
//     text: 'Головна',
//   },
//   {
//     link: '/projects',
//     text: 'Projects',
//   },
// ];

const Projects = () => {
  const t = useTranslations('Projects');

  return (
    <section className={styles.section}>
      <div style={{ display: 'block' }}>
        <h1 className={styles.name}>{t('projects')}</h1>
      </div>
      <Link className={styles.category} href="/projects/mountain_instant">
        {t('film')}
      </Link>
      <Link
        className={`${styles.category} ${styles.category_two}`}
        href="/projects/trail"
      >
        {t('trail')}
      </Link>
    </section>
  );
};

export default Projects;
