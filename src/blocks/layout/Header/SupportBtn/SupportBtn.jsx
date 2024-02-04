import styles from '../Header.module.scss';
import { Link } from '@/navigation';

const SupportBtn = ({ support, donate, isClicked }) => {
  return (
    <div className={styles.donate_link}>
      <Link
        rel="canonical"
        href="/support"
        onClick={isClicked}
        className={styles.support}
      >
        {support}
      </Link>

      <Link
        rel="canonical"
        href="/donate"
        onClick={isClicked}
        className={styles.donate}
      >
        {donate}
      </Link>
    </div>
  );
};

export default SupportBtn;
