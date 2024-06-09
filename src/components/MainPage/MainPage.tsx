import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';

import './mainpage.css';

export const MainPage = () => {
  return (
    <>
      <Header />
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
          <p className='main_next_lesson_timer'>SET TIMER!!</p>
          <button className='main_next_lesson_button'>Button</button>
        </section>

        <section className='main_hometask'>Домашние задания</section>

        <section className='main_teachers_report'>Отчеты от учителей</section>
        
        <section className='main_remaining_lessons'>
          <h2 className='main_remaining_lessons_title'>Баланс занятий</h2>
          <ul className='main_remaining_lessons_list'>
            <li>
              <p className='main_remaining_lessons_name'></p>
              <div className='main_remaining_lessons_count'></div>
            </li>
            <li>
              <p className='main_remaining_lessons_name'></p>
              <div className='main_remaining_lessons_count'></div>
            </li>
            <li>
              <p className='main_remaining_lessons_name'></p>
              <div className='main_remaining_lessons_count'></div>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
    </>
  );
};
