import { useTranslations } from 'next-intl';
import styles from './Film.module.scss';

import Section from '@/components/Section/Section';
import { listItems } from './fotoMList';
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
      link: `/`,
      text: t('home'),
    },
    {
      link: `/projects`,
      text: t('projects'),
    },
    {
      link: `/projects/mountain_instant`,
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

      {/* <div className={styles.mainFoto}></div> */}
      <Section>
        <BreadCrumbs list={breadCrumbsList} />
        <div className={styles.box}>
          <h1 className={styles.name}>{t('film')}</h1>

          <h2 className={styles.conception}>{t('textF')}</h2>

          <div className={styles.video}>
            <iframe
              className={styles.frame}
              width="1065"
              height="550"
              src={`https://www.youtube.com/embed/ElKO3_Ovxgw?si=4i7EY7ezUIERFOHK`}
              title="Гірська мить"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder={0}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <p className={styles.title}>{t('title')}</p>
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
        </div>
      </Section>
    </>
  );
};

export default Film;
