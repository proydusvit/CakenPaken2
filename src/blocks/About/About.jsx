import styles from './About.module.scss';
import Image from 'next/image';
import SectionSecond from '@/components/Section/SectionSecond';
import { useTranslations } from 'next-intl';
import SliderComponent from '@/components/slider/SliderComponent';
import { secondList, listItems } from './imgList';
import foto from '@/assets/imgAbout/foto.jpg';

const About = () => {
  const t = useTranslations('About');

  return (
    <>
      <div className={styles.mainFoto}>
        <h1> {t('about')}</h1>
      </div>

      <SectionSecond className={styles.section}>
        <h2 className={styles.section__caken}> {t('caken')}</h2>

        <SliderComponent list={secondList} />

        <div className={styles.section__list}>
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
        </div>

        <h3 className={styles.team__text}>{t('weare')}</h3>

        <div className={styles.box}>
          <Image
            className={styles.box__foto}
            src={foto}
            alt="hiking"
            width={590}
            height={390}
          />

          <div className={styles.box__box}>
            <p className={styles.box__text}>{t('yes')}</p>
            <p className={styles.box__text}>{t('no')}</p>
          </div>
        </div>

        <h3 className={styles.minibox__text}>{t('style')}</h3>

        <SliderComponent list={listItems} />

        <div className={styles.list}>
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
        </div>
      </SectionSecond>
    </>
  );
};

export default About;
