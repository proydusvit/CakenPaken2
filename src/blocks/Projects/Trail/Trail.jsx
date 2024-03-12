'use client';
import styles from './Trail.module.scss';
import Section from '@/components/Section/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import SliderComponent from '@/components/slider/SliderComponent';

import { listItems, listSlider } from './fotoList';
import VideoPlayer from '@/components/Video/Videoplayer';

const Trail = ({ home, projects, textT, trail }) => {
  const youtubeVideoId = 'rTUaPPWdUgM?si=lEHMBiT71USE5uuS';

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
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `/projects/trail`,
          name: trail,
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
    {
      link: '/projects/trail',
      text: trail,
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
          >
            <h1 className={styles.name}>{trail}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
            className={styles.conception}
          >
            <h2 className={styles.conception__text}>{textT}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
          >
            <VideoPlayer videoId={youtubeVideoId} title={trail} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
          >
            <SliderComponent list={listSlider} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
            className={styles.parent}
          >
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
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      className={styles.img}
                      src={img}
                      alt={alt}
                      width={width}
                      height={height}
                    />
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Trail;
