import { useTranslations } from 'next-intl';
import styles from './Film.module.scss';

import SectionSecond from '@/components/Section/SectionSecond';
import { listItems } from './fotoList';
import Image from 'next/image';

import SliderComponent from '@/components/slider/SliderComponent';
import VideoPlayer from '@/components/Video/Videoplayer';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const Film = () => {
  const t = useTranslations('Projects');

  const youtubeVideoId = 'ElKO3_Ovxgw?si=4i7EY7ezUIERFOHK';
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
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `cakenpaken/projects/mountain_instant`,
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
      link: '/projects',
      text: t('projects'),
    },
    {
      link: '/projects/mountain_instant',
      text: t('film'),
    },
  ];
  return (
    <div>
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

        <div className={styles.conception}>
          <h3 className={styles.conception__name}>{t('conception')}</h3>
          <p className={styles.conception__text}>{t('textF')}</p>
        </div>

        <SliderComponent list={listItems} />

        <ul className={styles.list}>
          {listItems.map(({ id, img, alt }) => (
            <li key={id}>
              <Image
                className={styles.img}
                src={img}
                alt={alt}
                width={390}
                height={380}
              />
            </li>
          ))}
        </ul>

        <h4 className={styles.title}>{t('title')}</h4>
        <VideoPlayer videoId={youtubeVideoId} />
      </SectionSecond>
    </div>
  );
};

export default Film;
