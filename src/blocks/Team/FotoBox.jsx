import styles from './Team.module.scss';
import Image from 'next/image';
import Linktre from '@/assets/imgTeam/linkSvg.jsx';
import { useTranslations } from 'next-intl';
const FotoBox = ({ list }) => {
  const t = useTranslations('Team');
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {list.map(item => (
          <li key={item.id} className={styles.teamMember}>
            <Image
              src={item.img}
              alt={item.name}
              className={styles.img}
              width={403}
              height={403}
            />
            <p className={styles.memberName}>{t(item.name)}</p>
            <a className={styles.memberLink} target="_blank" href={item.social}>
              <Linktre />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FotoBox;
