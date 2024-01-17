import styles from '../Header.module.scss';
import Link from 'next/link';

const SupportBtn = ({ support, donate }) => {
  return (
    <div className={styles.donate_link}>
      <Link href="/support" className={styles.support}>
        {support}
      </Link>

      <Link href="/donate" className={styles.donate}>
        {donate}
      </Link>
    </div>
  );
};

export default SupportBtn;
