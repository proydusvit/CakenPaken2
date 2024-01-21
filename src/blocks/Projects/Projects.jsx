import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import styles from './Projects.module.scss';
import Section from '@/components/Section/Section';
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
    <Section>
      <h1 className={styles.name}>{t('projects')}</h1>

      <Link
        className={styles.category}
        href="/projects/mountain_instant"
      ></Link>
      <Link
        className={`${styles.category} ${styles.category_two}`}
        href="/projects/trail"
      ></Link>
    </Section>
  );
};

export default Projects;
