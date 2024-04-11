import Table from '@/blocks/Events/Events';
import Section from '@/components/Section/Section';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Events');
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
    {
      name: 'Київ',
      date: '21 березня',
      time: '19:30',
      place: 'ТЦ Гулівер, кінотеатр Oскар',
    },
    {
      name: 'Житомир',
      date: '4 квітня ',
      time: '18:30 ',
      place: 'Кінотеатр ім. Івана Франка ',
    },
    {
      name: 'Дніпро',
      date: '8 квітня',
      time: '18:30',
      place: 'Планета Кіно Appolo',
    },
    {
      name: 'Умань',
      date: '22 квітня ',
      time: '18:30',
      place: 'Кінотеатр Фільмакс',
    },
  ];
  return (
    <Section>
      <Table
        data={data}
        home={t('home')}
        events={t('events')}
        event={t('Event')}
      />
    </Section>
  );
};

export default Events;
