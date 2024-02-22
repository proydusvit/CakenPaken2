import Table from '@/blocks/Events/Events';
import Section from '@/components/Section/Section';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Events' });

  return {
    title: ` ${t('events')} | ${t('cak')}`,
    description: ` ${t('events')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/events',
    },
    openGraph: {
      title: ` ${t('events')} | ${t('cak')}`,
      description: `${t('events')} | ${t('cak')}`,
      url: `www.cakenpaken/events`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Events = () => {
  const data = [
    { name: 'Харків', date: '30 січня', time: '18:30', place: 'Пінтагон' },
    { name: 'Буковель', date: '15 лютого', time: '18:00', place: 'Бука' },
    {
      name: 'Івано-Франківськ',
      date: '22 лютого',
      time: '20:00',
      place: 'Театр Кіно "Люм`єр"',
    },
    {
      name: 'Львів',
      date: '29 лютого',
      time: '20:00',
      place: 'Планета Кіно (Forum Lviv)',
    },
    {
      name: 'Львів',
      date: '3 березня',
      time: '11:30',
      place: 'Планета Кіно (King Cross)',
    },
  ];
  return (
    <Section>
      <Table data={data} />
    </Section>
  );
};

export default Events;
