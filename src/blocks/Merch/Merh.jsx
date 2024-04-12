import Section from '@/components/Section/Section';
import styles from '@/blocks/Merch/Merch.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { listTeam } from '../Team/listTeam';

const Merh = () => {
  return (
    <Section>
      <h1 className={styles.name}>Мерч</h1>
      <ul className={styles.list}>
        {listTeam.map(item => (
          <li key={item.id} className={styles.teamMember}>
            <Link href={`merch/${item.id}`}>
              <Image
                src={item.img}
                alt={item.name}
                className={styles.img}
                width={403}
                height={403}
              />
            </Link>
            <p className={styles.memberName}>{item.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Merh;
