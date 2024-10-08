'use client';
import styles from './LettersToWomensTime.module.scss';
import { motion } from 'framer-motion';
import Section from '@/components/Section/Section';

import Image from 'next/image';
import foto from '@/assets/imgProjects/women.webp';
import SliderComponent from '@/components/slider/SliderComponent';
import VideoPlayer from '@/components/Video/Videoplayer';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const LettersToWomensTime = ({ home, projects, mindS, mind, textM }) => {
  //   const youtubeVideoId = 'VCCpXunj-MY?si=A5WYlPQDworJloKV"';

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
          '@id': `/projects/letters_to_womens_time`,
          name: mindS,
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
      link: `/projects/letters_to_womens_time`,
      text: mindS,
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
          >
            <h1 className={styles.name}>{mind}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
            className={styles.conception}
          >
            <h2 className={styles.conception__text}>{textM}</h2>
          </motion.div>

          {/* <h2 className={styles.conceptions}>{t('textM')}</h2> */}
          <motion.div
            className={styles.imgbox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
          >
            <Image src={foto} width={910} height={550} className={styles.img} />
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.35, ease: 'easeInOut' }}
          >
            <SliderComponent list={listItems} />
          </motion.div> */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
          >
            <ul className={styles.list}>
              {listItems.map(({ id, img, alt }) => (
                <li key={id}>
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
                      width={590}
                      height={780}
                    />
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div> */}
        </div>
      </Section>
    </>
  );
};

export default LettersToWomensTime;
