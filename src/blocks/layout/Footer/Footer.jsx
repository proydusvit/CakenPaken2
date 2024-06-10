import { Link } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import Logo from './Logo_footer.png';

const Footer = () => {
  const t = useTranslations('Common');

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.box}>
          <Link rel="canonical" href="/about" className={styles.link}>
            {t('about')}
          </Link>
          <Link rel="canonical" href="/projects" className={styles.link}>
            {t('projects')}
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/@CAKENPAKEN"
            className={styles.link}
          >
            YouTube
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/cakenpaken/"
            className={styles.link}
          >
            Instagram
          </Link>
        </div>
        <div className={styles.footer_img}>
          <Image src={Logo} width={245} height={91} alt="caken_logo" />
        </div>
        <div className={styles.develop}>
          <div className={styles.develop_conact}>
            <p className={styles.develop_conact_text}>{t('open')}</p>
            <p className={styles.develop_mail}>{t('contactus')}</p>
            <span className={styles.develop_span}>
              <Link target="_blank" href="mailto:pakencaken@gmail.com">
                pakencaken@gmail.com
              </Link>
            </span>
          </div>
          <div className={styles.developers}>
            <Link target="_blank" href="https://linktr.ee/CakenPakenStudio">
            ⓒ 2024, CakenPakenStudio
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
