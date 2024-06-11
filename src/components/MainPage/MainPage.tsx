import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';

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
    <>
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
          <button className='main_next_lesson_button'>Button</button>
        </section>

        <section className='main_hometask'>Домашние задания</section>

        <section className='main_teachers_report'>Отчеты от учителей</section>

        <section className='main_remaining_lessons'>
          <h2 className='main_remaining_lessons_title'>Баланс занятий</h2>
          <ul className='main_remaining_lessons_list'>
            <li>
              <p className='main_remaining_lessons_name'>
                Ментальная Арифметика
              </p>
              <div className='main_remaining_lessons_count'>32</div>
            </li>
            <li>
              <p className='main_remaining_lessons_name'>Программирование</p>
              <div className='main_remaining_lessons_count'>0</div>
            </li>
            <li>
              <p className='main_remaining_lessons_name'>Скорочтение</p>
              <div className='main_remaining_lessons_count'>4</div>
            </li>
            <li>
              <p className='main_remaining_lessons_name'>
                Ментальная Арифметика
              </p>
              <div className='main_remaining_lessons_count'>32</div>
            </li>
            <li>
              <p className='main_remaining_lessons_name'>Программирование</p>
              <div className='main_remaining_lessons_count'>0</div>
            </li>
            <li>
              <p className='main_remaining_lessons_name'>Скорочтение</p>
              <div className='main_remaining_lessons_count'>4</div>
            </li>
          </ul>
          <div className='main_remaining_lessons_button_wrapper'>
            <button className='main_remaining_lessons_button'>Button</button>
          </div>
        </section>

        <section className='main_upcoming_lessons'>
          <h2>Ближайшие уроки</h2>
          <ul className='main_upcoming_lessons_list'>
            <li>
              <div className='main_upcoming_lessons_date'>
                <p className='main_upcoming_lessons_day'>1</p>
                <p className='main_upcoming_lessons_month'>мая</p>
              </div>
              <p className='main_upcoming_lessons_name'>
                Ментальная Арифметика
              </p>
              <p className='main_upcoming_lessons_details_time'>14:00-14:25</p>
              <div className='main_upcoming_lessons_teacher'>
                <img src='/img/icon.svg' />
                <p className='main_upcoming_lessons_details_name'>
                  Белкина Инна
                </p>
              </div>
              <div className='main_upcoming_lessons_buttons'>
                <button>Button</button>
                <button className='active'>Button</button>
              </div>
            </li>
            <li>
              <div className='main_upcoming_lessons_date'>
                <p className='main_upcoming_lessons_day'>30</p>
                <p className='main_upcoming_lessons_month'>октября</p>
              </div>
              <p className='main_upcoming_lessons_name'>Программирование</p>

              <p className='main_upcoming_lessons_details_time'>11:00-11:11</p>
              <div className='main_upcoming_lessons_teacher'>
                <img src='/img/icon.svg' />
                <p className='main_upcoming_lessons_details_name'>
                  Животновская Оксана
                </p>
              </div>

              <div className='main_upcoming_lessons_buttons'>
                <button>Button</button>
                <button className='active'>Button</button>
              </div>
            </li>
            <li>
              <div className='main_upcoming_lessons_date'>
                <p className='main_upcoming_lessons_day'>16</p>
                <p className='main_upcoming_lessons_month'>ноября</p>
              </div>
              <p className='main_upcoming_lessons_name'>Скорочтение</p>

              <p className='main_upcoming_lessons_details_time'>09:00-09:45</p>
              <div className='main_upcoming_lessons_teacher'>
                <img src='/img/icon.svg' />
                <p className='main_upcoming_lessons_details_name'>Мин Елена</p>
              </div>

              <div className='main_upcoming_lessons_buttons'>
                <button>Button</button>
                <button className='active'>Button</button>
              </div>
            </li>
          </ul>
          <div className='main_upcoming_lessons_button_wrapper'>
            <button className='main_upcoming_lessons_button'>Button</button>
          </div>
        </section>
      </main>
    </>
  );
};
