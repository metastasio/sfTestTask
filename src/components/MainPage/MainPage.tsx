import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';
import { Button } from '../Button/Button';
import { RemainingLessonItem } from './RemainingLessonItem';
import { UpcomingLessonItem } from './UpcomingLessonItem';

import './mainpage.css';

export const MainPage = () => {
  const deadline = 'September, 11, 2024';
  const time = Date.parse(deadline) - Date.now();
  const currentDay = Math.floor(time / (1000 * 60 * 60 * 24));
  const currentHours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const currentMinutes = Math.floor((time / 1000 / 60) % 60);
  const { userName } = useAppSelector((state) => state.user);
  const [days, setDays] = useState(currentDay);
  const [hours, setHours] = useState(currentHours);
  const [minutes, setMinutes] = useState(currentMinutes);

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();
    if (days > 0 || hours > 0 || minutes > 0) {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main_container'>
      <Header userName={userName} />
      <MainMenu />
      <main className='main_page'>
        <section className='main_page_adv1'>
          <p className='main_page_adv1_title'>
            До 31 декабря любой курс со скидкой 20%
          </p>
          <p className='main_page_adv1_content'>
            До конца года у вас есть уникальная возможность воспользоваться
            нашей новогодней скидкой 20% на любой курс!
          </p>
        </section>

        <section className='main_next_lesson'>
          <p className='main_next_lesson_title'>
            Следующее занятие начнется через:
          </p>
          <p className='main_next_lesson_timer'>
            {days}
            <span className='main_next_lesson_timer_unit'>д</span>
            {hours}
            <span className='main_next_lesson_timer_unit'>ч</span>
            {minutes}
            <span className='main_next_lesson_timer_unit'>мин</span>
          </p>
          <Button content='Button' classes='button_dashed' />
        </section>

        <section className='main_hometask'>Домашние задания</section>

        <section className='main_teachers_report'>Отчеты от учителей</section>

        <section className='main_remaining_lessons'>
          <h2 className='main_remaining_lessons_title'>Баланс занятий</h2>
          <ul className='main_remaining_lessons_list'>
            <RemainingLessonItem name='Ментальная Арифметика' count={32} />
            <RemainingLessonItem name='Программирование' count={0} />
            <RemainingLessonItem name='Скорочтение' count={4} />
            <RemainingLessonItem name='Ментальная Арифметика' count={32} />
            <RemainingLessonItem name='Программирование' count={0} />
            <RemainingLessonItem name='Скорочтение' count={4} />
          </ul>
          <div className='main_remaining_lessons_button_wrapper'>
            <Button content='Button' classes='button_secondary' />
          </div>
        </section>

        <section className='main_upcoming_lessons'>
          <h2>Ближайшие уроки</h2>
          <ul className='main_upcoming_lessons_list'>
            <UpcomingLessonItem
              day={1}
              month='мая'
              lesson='Ментальная Арифметика'
              time='14:00-14:25'
              teacher='Белкина Инна'
            />
            <UpcomingLessonItem
              day={30}
              month='октября'
              lesson='Программирование'
              time='11:00-11:11'
              teacher='Животновская Оксана'
            />
            <UpcomingLessonItem
              day={16}
              month='ноября'
              lesson='Скорочтение'
              time='09:00-09:45'
              teacher='Мин Елена'
            />
          </ul>
          <div className='main_upcoming_lessons_button_wrapper'>
            <Button content='Button' classes='button_secondary' />
          </div>
        </section>
      </main>
    </div>
  );
};
