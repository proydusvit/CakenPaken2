import { Link } from '@/navigation';
import styles from './SupportAndDonate.module.scss';
import { usePathname } from '@/navigation';

const Switcher = ({ currentLanguage, secondColor, setCurrentLanguage }) => {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {currentLanguage === 'en' && (
        <Link
          style={{ color: secondColor }}
          className={styles.lang}
          href={pathname}
          locale="uk"
          onClick={() => setCurrentLanguage('uk')}
        >
          UK
        </Link>
      )}
      {currentLanguage === 'uk' && (
        <Link
          style={{ color: secondColor }}
          className={styles.lang}
          href={pathname}
          locale="en"
          onClick={() => setCurrentLanguage('en')}
        >
          EN
        </Link>
      )}
    </div>
  );
};

export default Switcher;
