import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';
import './schedule.css';

export const SchedulePage = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <h1>This is Schedule</h1>
      <main className='schedule'>
        <section className='schedule_choose_lesson'>
          <div className='schedule_choose_lesson_select'></div>
          <button className='schedule_choose_lesson_button'>
            Изменить расписание
          </button>
        </section>
      </main>
    </>
  );
};
