'use client';
import { listTeam } from '../Team/listTeam'; // Імпортуємо список команди
import styles from '@/blocks/Merch/Merchid.module.scss';
import Section from '@/components/Section/Section';
import Image from 'next/image';

const MerchId = ({ id }) => {
  const did = id;

  const teamMember = listTeam.find(member => member.id === parseInt(did));

  if (!teamMember) {
    return <p>Член команди не знайдений</p>;
  }

  return (
    <Section>
      <h1>{teamMember.name}</h1>
      <Image
        src={teamMember.img}
        alt={teamMember.name}
        width={403}
        height={403}
      />
      <div className={styles.box}>
        <p>Social: {teamMember.name}</p>
        <p>Social: {teamMember.social}</p>
      </div>
    </Section>
  );
};

export default MerchId;
