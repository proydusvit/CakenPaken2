'use client';
import styles from './About.module.scss';
import Image from 'next/image';
import SectionSecond from '@/components/Section/SectionSecond';
import SliderComponent from '@/components/slider/SliderComponent';
import { secondList, listItems } from './imgList';
import foto from '@/assets/imgAbout/foto.jpg';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { motion } from 'framer-motion';

const About = ({ home, about, caken, weare, yes, no, style }) => {
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
          '@id': `/about`,
          name: about,
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
      link: '/about',
      text: about,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        className={styles.mainFoto}
      >
        <h1> {about}</h1>
      </motion.div>

      <SectionSecond className={styles.section}>
        <BreadCrumbs list={breadCrumbsList} />
        <h2 className={styles.section__caken}> {caken}</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          <SliderComponent list={secondList} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          className={styles.section__list}
        >
          {secondList.map(({ img, id, alt }) => (
            <div key={id}>
              <Image
                className={styles.section__img}
                src={img}
                alt={alt}
                width={390}
                height={533}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          className={styles.box}
        >
          <h3 className={styles.team__text}>{weare}</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          className={styles.box}
        >
          <Image
            className={styles.box__foto}
            src={foto}
            alt="hiking"
            width={590}
            height={390}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
            className={styles.box__box}
          >
            <p className={styles.box__text}>{yes}</p>
            <p className={styles.box__text}>{no}</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          className={styles.box}
        >
          <h3 className={styles.minibox__text}>{style}</h3>
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
          className={styles.list}
        >
          {listItems.map(({ img, id, alt }) => (
            <div key={id} className={styles.list__item}>
              <Image
                className={styles.list__img}
                src={img}
                alt={alt}
                width={400}
                height={400}
              />
            </div>
          ))}
        </motion.div>
      </SectionSecond>
    </>
  );
};

export default About;
