'use client';
import Section from '@/components/Section/Section';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './EdgeOfWar.module.scss';
import SliderComponent from '@/components/slider/SliderComponent';
import VideoPlayer from '@/components/Video/Videoplayer';
import { listItems } from './fotoList';
const EdgeOfWar = ({ projects, home, border, textB, titleB }) => {
  const youtubeVideoId = '7-wZGcjFS-E?si=0IT1yGsESySSyIeg';

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
          '@id': `/projects/edge_of_war`,
          name: border,
        },
      },
    ],
  };

  const breadCrumbsList = [
    {
      link: `/`,
      text: home,
    },
    {
      link: `/projects`,
      text: projects,
    },
    {
      link: `/projects/edge_of_war`,
      text: border,
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
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <h1 className={styles.name}>{border}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
            className={styles.conception}
          >
            <h2 className={styles.conception__text}>{textB}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <VideoPlayer videoId={youtubeVideoId} title={border} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <p className={styles.title}>{titleB}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <SliderComponent list={listItems} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
            className={styles.parent}
          >
            <ul className={styles.list}>
              {listItems.map(({ img, alt }, index) => (
                <li key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      className={styles.img}
                      src={img}
                      alt={alt}
                      width={1000}
                      height={550}
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

export default EdgeOfWar;
