'use client';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';

import styles from './Projects.module.scss';
import Section from '@/components/Section/Section';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const Projects = ({ home, projects }) => {
  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        item: {
          '@id': `/`,
          name: home,
        },
      },
      {
        '@type': 'ListItem',
        position: '2',
        item: {
          '@id': `/projects`,
          name: projects,
        },
      },
    ],
  };
  const breadCrumbsList = [
    {
      link: '/',
      text: home,
    },
    {
      link: '/projects',
      text: projects,
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
        >
          <h1 className={styles.name}>{projects}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
        >
          <Link
            rel="canonical"
            className={styles.category}
            href="/projects/mountain_instant"
            aria-label="mountain_instant"
          ></Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
        >
          <Link
            rel="canonical"
            className={`${styles.category} ${styles.category_two}`}
            href="/projects/trail"
            aria-label="trail"
          ></Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
        >
          <Link
            rel="canonical"
            className={`${styles.category} ${styles.category_three}`}
            href="/projects/edge_of_war"
            aria-label="edge_of_war"
          ></Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
        >
          <Link
            rel="canonical"
            className={`${styles.category} ${styles.category_mind}`}
            href="/projects/mind"
            aria-label="mind"
          ></Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
        >
          <Link
            rel="canonical"
            className={`${styles.category} ${styles.category_women}`}
            href="/projects/letters_to_womens_time"
            aria-label="LettersToWomensTime"
          ></Link>
        </motion.div>
      </Section>
    </>
  );
};

export default Projects;
