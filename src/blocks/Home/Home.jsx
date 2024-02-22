import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import styles from './Home.module.scss';
import Sponsor from './Sponsor/Sponsor';
import Help from './Help/Help';

import Image from 'next/image';
import { useLocale } from 'next-intl';

import Soon from '@/assets/imgHome/svg/soon';
import Skoro from '@/assets/imgHome/svg/skoro';

import Prod from '../../assets/imgHome/Card_Projects.webp';
import Merch from '../../assets/imgHome/Card_Merch.webp';
import Gallery from '../../assets/imgHome/Card_Gallery.webp';
import About from '../../assets/imgHome/Card_About.webp';
import Crew from '../../assets/imgHome/Card_Crew.webp';

const Home = () => {
  const t = useTranslations('Home');
  const locale = useLocale();
  const isEnglish = locale === 'en';

  return (
    <section>
      <h1 className={styles.caken}>{t('cak')}</h1>
      <div className={styles.box}>
        <Link rel="canonical" href="/projects" className={styles.content}>
          <span className={styles.text}>{t('projects')}</span>
          <Image
            src={Prod}
            fill
            className={styles.img}
            placeholder="blur"
            alt="Projects"
          />
        </Link>
        <div className={styles.content}>
          <div
            className={styles.svgbox}
            // style={{ zIndex: '222', position: 'relative' }}
          >
            <span className={styles.texts}> {t('merch')}</span>

            <div className={styles.soon}>
              {isEnglish ? <Soon /> : <Skoro />}
            </div>
          </div>
          <Image
            src={Merch}
            fill
            className={styles.img}
            placeholder="blur"
            alt="Merch"
          />
        </div>

        <Link rel="canonical" className={styles.projects} href="/gallery">
          <span className={styles.text}>{t('gallery')}</span>
          <Image
            src={Gallery}
            fill
            className={styles.img}
            placeholder="blur"
            alt="Gallery"
          />
        </Link>
        <Help />

        <Link
          rel="canonical"
          href="/team"
          className={`${styles.content} ${styles.content_img__crew} `}
        >
          <span className={styles.text}>{t('crew')}</span>
          <Image
            src={Crew}
            fill
            className={styles.img}
            placeholder="blur"
            alt="Crew"
          />
        </Link>

        <Link rel="canonical" href="/about" className={styles.content}>
          <span className={styles.text}>{t('about')}</span>
          <Image
            src={About}
            fill
            className={styles.img}
            placeholder="blur"
            alt="About"
          />
        </Link>
        <Sponsor />
      </div>
    </section>
  );
};

export default Home;
// import { Link } from '@/navigation';
// import { useTranslations } from 'next-intl';
// import styles from './Home.module.scss';
// import Sponsor from './Sponsor/Sponsor';
// import Help from './Help/Help';
// import Soon from '@/assets/imgHome/svg/soon';
// import Skoro from '@/assets/imgHome/svg/skoro';

// import { useLocale } from 'next-intl';

// const Home = () => {
//   const t = useTranslations('Home');
//   const locale = useLocale();
//   const isEnglish = locale === 'en';

//   return (
//     <section>
//       <div className={styles.box}>
//         <Link
//           loading="lazy"
//           href="/projects"
//           className={`${styles.content} ${styles.content_img__gallery}`}
//         >
//           {t('projects')}
//         </Link>
//         <div
//           className={`${styles.content} ${styles.content_img}`}
//           loading="lazy"
//         >
//           <div>
//             <p> {t('merch')}</p>

//             <div className={styles.soon}>
//               {isEnglish ? <Soon /> : <Skoro />}
//             </div>
//           </div>
//         </div>

//         <Link className={styles.projects} href="/gallery" loading="lazy">
//           {t('gallery')}
//         </Link>
//         <Help />
//         <Link
//           loading="lazy"
//           href="/team"
//           className={`${styles.content} ${styles.content_img__crew} `}
//         >
//           {t('crew')}
//         </Link>
//         <Link
//           loading="lazy"
//           href="/about"
//           className={`${styles.content} ${styles.content_img__about}`}
//         >
//           {t('about')}
//         </Link>

//         <Sponsor />
//       </div>
//     </section>
//   );
// };

// export default Home;
