import SectionSecond from '@/components/Section/SectionSecond';
import { useTranslations } from 'next-intl';
import styles from './Film.module.scss';
import Foto from '../Foto';
import { listFilm } from './list';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const GalleryFilm = () => {
  const t = useTranslations('Gallery');

  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        item: {
          '@id': `/`,
          name: t('home'),
        },
      },
      {
        '@type': 'ListItem',
        position: '2',
        item: {
          '@id': `/gallery`,
          name: t('gallery'),
        },
      },
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `/gallery/mountain_instant`,
          name: t('film'),
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
    {
      link: '/gallery/mountain_instant',
      text: t('film'),
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <div className={styles.mainFoto}>
        <h1> {t('film')}</h1>
      </div>

      <SectionSecond>
        <BreadCrumbs list={breadCrumbsList} />
        <Foto image={listFilm} />
      </SectionSecond>
    </>
  );
};
export default GalleryFilm;
