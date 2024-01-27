import { useTranslations } from 'next-intl';
import styles from './Category.module.scss';
import Section from '@/components/Section/Section';

import { Link } from '@/navigation';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
const Category = () => {
  const t = useTranslations('Gallery');

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
          '@id': `cakenpaken/gallery`,
          name: t('gallery'),
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
      link: '/gallery',
      text: t('gallery'),
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
        <h1 className={styles.title}> {t('gallery')}</h1>

        <div className={styles.section__link}>
          <Link className={styles.links} href="gallery/mountain_instant">
            <h3 className={styles.name}>{t('film')}</h3>
          </Link>

          <Link
            className={`${styles.trail} ${styles.links}`}
            href="gallery/trail"
          >
            <h3 className={styles.name}>{t('trail')}</h3>
          </Link>

          <Link
            className={`${styles.border} ${styles.links}`}
            href="gallery/edge_of_war"
          >
            <h3 className={styles.name}>{t('border')}</h3>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Category;
