'use client';

import styles from './Category.module.scss';
import Section from '@/components/Section/Section';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
const Category = ({ home, gallery, film, trail, border }) => {
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
          '@id': `gallery`,
          name: gallery,
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
      link: '/gallery',
      text: gallery,
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
          <h1 className={styles.title}> {gallery}</h1>
        </motion.div>
        <div className={styles.section__link}>
          <Link
            className={styles.links}
            rel="canonical"
            href="gallery/mountain_instant"
          >
            <span className={styles.name}>{film}</span>
          </Link>

          <Link
            className={`${styles.trail} ${styles.links}`}
            rel="canonical"
            href="gallery/trail"
          >
            <span className={styles.name}>{trail}</span>
          </Link>

          <Link
            rel="canonical"
            href="gallery/edge_of_war"
            className={`${styles.border} ${styles.links}`}
          >
            <span className={styles.name}>{border}</span>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Category;
