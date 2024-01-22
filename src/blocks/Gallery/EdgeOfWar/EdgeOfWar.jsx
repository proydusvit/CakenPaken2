import SectionSecond from '@/components/Section/SectionSecond';
import { useTranslations } from 'next-intl';
import styles from './edge.module.scss';
import Foto from '../Foto';
import { listFilm } from './list';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const EdgeOfWar = () => {
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
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `cakenpaken/gallery/edge_of_war`,
          name: t('border'),
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
      link: '/gallery/edge_of_wa',
      text: t('border'),
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
        <h1> {t('border')}</h1>
      </div>

      <SectionSecond>
        <BreadCrumbs list={breadCrumbsList} />
        <Foto image={listFilm} />
      </SectionSecond>
    </>
  );
};
export default EdgeOfWar;
