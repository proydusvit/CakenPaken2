import { useTranslations } from 'next-intl';
import styles from './Category.module.scss';
import { listCategory } from './galleryList';
import { Link } from '@/navigation';

const Category = () => {
  const t = useTranslations('Gallery');

  return (
    <section className={styles.section}>
      <h1 className={styles.title}> {t('gallery')}</h1>

      <div className={styles.section__link}>
        <Link className={styles.links} href="gallery/mountain_instant">
          <h3 className={styles.name}>{t('film')}</h3>
        </Link>

        <Link
          className={`${styles.trail} ${styles.links}`}
          href="gallery/trail"
        >
          <h3 className={styles.name}>{t('trail')}</h3>
        </Link>

        {/* <Link
          className={`${styles.trail} ${styles.links}`}
          href="gallery/"
        >
          <h3 className={styles.name}>{t('trail')}</h3>
        </Link> */}
      </div>
    </section>
  );
};

export default Category;
//  <section className={styles.section}>
//    <h1 className={styles.title}> {t('gallery')}</h1>

//    <ul className={styles.section__link}>
//      <li>
//        <Link href="gallery/mountain_instant" className={styles.links}>
//          <h3 className={styles.name}>{t('film')}</h3>
//        </Link>
//      </li>
//      <li>
//        <Link
//          href="gallery/trail"
//          className={`${styles.links} ${styles.trail}`}
//        >
//          <h3 className={styles.name}>{t('trail')}</h3>
//        </Link>
//      </li>
//    </ul>
//  </section>;
