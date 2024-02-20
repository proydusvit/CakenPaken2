import { useTranslations } from 'next-intl';
import styles from './Mind.module.scss';

import Section from '@/components/Section/Section';
import { listItems } from './fotoList';
import Image from 'next/image';

import SliderComponent from '@/components/slider/SliderComponent';
import VideoPlayer from '@/components/Video/Videoplayer';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const Mind = () => {
  const t = useTranslations('Projects');

  const youtubeVideoId = 'VCCpXunj-MY?si=A5WYlPQDworJloKV"';

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
          '@id': `/projects`,
          name: t('projects'),
        },
      },
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `/projects/mind`,
          name: t('mindS'),
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
      link: `/projects/mind`,
      text: t('mindS'),
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
          <h1 className={styles.name}>{t('mind')}</h1>

          <h2 className={styles.conception}>{t('textM')}</h2>

          <VideoPlayer videoId={youtubeVideoId} title={t('mind')} />

          <SliderComponent list={listItems} />
          <ul className={styles.list}>
            {listItems.map(({ id, img, alt }) => (
              <li key={id}>
                <Image
                  className={styles.img}
                  src={img}
                  alt={alt}
                  width={590}
                  height={780}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Mind;
