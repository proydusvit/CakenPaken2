import { useTranslations } from 'next-intl';
import styles from './Trail.module.scss';
import Section from '@/components/Section/Section';

import Image from 'next/image';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import SliderComponent from '@/components/slider/SliderComponent';

import { listItems, listSlider } from './fotoList';
import VideoPlayer from '@/components/Video/Videoplayer';

const Trail = () => {
  const t = useTranslations('Projects');
  const youtubeVideoId = 'rTUaPPWdUgM?si=lEHMBiT71USE5uuS';

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
          '@id': `cakenpaken/projects/trail`,
          name: t('trail'),
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
      link: '/projects/trail',
      text: t('trail'),
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
        {/* <BackLink
          link={'/projects'}
          back={t('projects')}
          current={t('trail')}
        /> */}
        <BreadCrumbs list={breadCrumbsList} />
        <div className={styles.box}>
          <h1 className={styles.name}>{t('trail')}</h1>

          <div className={styles.conception}>
            <h2 className={styles.conception__text}>{t('textT')}</h2>
          </div>

          <VideoPlayer videoId={youtubeVideoId} />

          
          <SliderComponent list={listSlider} />

          <div className={styles.parent}>
            <ul className={styles.list}>
              {listItems.map(({ id, img, alt, width, height }, index) => (
                <li
                  key={id}
                  className={
                    index === 0
                      ? styles.div1
                      : index === 1
                        ? styles.div2
                        : styles.div3
                  }
                >
                  <Image
                    className={styles.img}
                    src={img}
                    alt={alt}
                    width={width}
                    height={height}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Trail;
