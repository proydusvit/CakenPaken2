import { Link } from '@/navigation';
import styles from './SupportAndDonate.module.scss';
import { usePathname } from '@/navigation';

const Switcher = ({ currentLanguage, setCurrentLanguage }) => {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {currentLanguage === 'en' && (
        <Link
          className={styles.lang}
          href={pathname}
          locale="uk"
          onClick={() => setCurrentLanguage('uk')}
        >
          EN
        </Link>
      )}
      {currentLanguage === 'uk' && (
        <Link
          className={styles.lang}
          href={pathname}
          locale="en"
          onClick={() => setCurrentLanguage('en')}
        >
          UA
        </Link>
      )}
    </div>
  );
};

export default Switcher;
