'use client';
import styles from './Film.module.scss';
import { motion } from 'framer-motion';
import Section from '@/components/Section/Section';
import { listItems } from './fotoMList';
import Image from 'next/image';

import SliderComponent from '@/components/slider/SliderComponent';

import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const Film = ({ title, textF, film, home, projects }) => {
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
          '@id': `/projects/mountain_instant`,
          name: film,
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
      link: `/projects/mountain_instant`,
      text: film,
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
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <h1 className={styles.name}>{film}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <h2 className={styles.conception}>{textF}</h2>
          </motion.div>

          <motion.div
            className={styles.video}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
          >
            <iframe
              className={styles.frame}
              width="1065"
              height="550"
              src={`https://www.youtube.com/embed/ElKO3_Ovxgw?si=4i7EY7ezUIERFOHK`}
              title="Гірська мить"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          >
            <p className={styles.title}>{title}</p>
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
          >
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
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Film;
