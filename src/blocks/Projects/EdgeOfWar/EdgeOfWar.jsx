import Section from '@/components/Section/Section';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './EdgeOfWar.module.scss';
import SliderComponent from '@/components/slider/SliderComponent';
import VideoPlayer from '@/components/Video/Videoplayer';
import { listItems } from './fotoList';
const EdgeOfWar = () => {
  const t = useTranslations('Projects');

  const youtubeVideoId = '7-wZGcjFS-E?si=0IT1yGsESySSyIeg';

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
          '@id': `cakenpaken/projects/edge_of_war`,
          name: t('border'),
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
      link: `/projects/edge_of_war`,
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
      <Section>
        <BreadCrumbs list={breadCrumbsList} />
        <div className={styles.box}>
          <h1 className={styles.name}>{t('border')}</h1>

          <div className={styles.conception}>
            <h2 className={styles.conception__text}>{t('textB')}</h2>
          </div>

          <VideoPlayer videoId={youtubeVideoId} title={t('border')} />

          <p className={styles.title}>{t('titleB')}</p>
          <SliderComponent list={listItems} />

          <div className={styles.parent}>
            <ul className={styles.list}>
              {listItems.map(({ img, alt }, index) => (
                <li key={index}>
                  <Image
                    className={styles.img}
                    src={img}
                    alt={alt}
                    // width={width}
                    // height={height}
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

export default EdgeOfWar;
