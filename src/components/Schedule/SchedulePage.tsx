import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';
import { CalendarDay } from './CalendarDay';
import './schedule.css';

export const SchedulePage = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <main className='schedule'>
        <section className='schedule_choose_lesson'>
          <label className='sr_only' htmlFor='lessons'>
            Выбрать предмет
          </label>
          <select
            className='schedule_choose_lesson_select'
            name='lessons'
            id='lessons'
          >
            <option value=''>Выбрать предмет</option>
            <option value='dog'>Ментальная арифметика</option>
            <option value='cat'>Программирование</option>
            <option value='hamster'>Скорочтение</option>
          </select>

          <Button
            content='Изменить расписание'
            classes='button_secondary_schedule'
          />
        </section>

        <div className='schedule_calendar_header_nav'>
          <button className='schedule_calendar_header_prev'></button>
          <p className='schedule_calendar_header_currernt'>Март 2024</p>
          <button className='schedule_calendar_header_next'></button>
        </div>
        <div className='schedule_calendar_header_today_span'>
          <Button content='Сегодня' classes='button_schedule_mini' />
          <button className='schedule_calendar_header_info'></button>
        </div>

        <section className='schedule_calendar_wrapper'>
          <div className='schedule_calendar_header'>
            <div className='schedule_calendar_weekday'>Пн</div>
            <div className='schedule_calendar_weekday'>Вт</div>
            <div className='schedule_calendar_weekday'>Ср</div>
            <div className='schedule_calendar_weekday'>Чт</div>
            <div className='schedule_calendar_weekday'>Пт</div>
            <div className='schedule_calendar_weekday'>Сб</div>
            <div className='schedule_calendar_weekday'>Вс</div>
          </div>
          <div className='schedule_calendar_week'>
            <CalendarDay
              date={26}
              monthType='inactive_month'
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={27}
              monthType='inactive_month'
              time1='13:00-13:45'
              lesson1='Ментальная арифметика'
              type1={{ complete: true }}
              time2='13:00-13:45'
              lesson2='Ментальная арифметика'
              type2={{ complete: true }}
            />
            <CalendarDay
              date={28}
              monthType='inactive_month'
              time1='13:00-13:45'
              time2='13:00-13:45'
              lesson1='Ментальная арифметика'
              type1={{ crossedout: true }}
              lesson2='Ментальная арифметика'
              type2={{ crossedout: true }}
            />
            <CalendarDay
              date={29}
              monthType='inactive_month'
              time1='13:00-13:45'
              time2='13:00-13:45'
              lesson1='Ментальная арифметика'
              lesson2='Ментальная арифметика'
              type1={{ unpaid: true }}
              type2={{ unpaid: true }}
            />
            <CalendarDay
              date={1}
              time1='13:00-13:45'
              time2='13:00-13:45'
              lesson1='Ментальная арифметика'
              lesson2='Ментальная арифметика'
              type1={{ todays1: true }}
              type2={{ todays2: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={2}
              time1='13:00-13:45'
              time2='13:00-13:45'
              lesson1='Ментальная арифметика'
              lesson2='Ментальная арифметика'
              type1={{ upcoming: true, unpaid: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={3}
              time1='13:00-13:45'
              time2='13:00-13:45'
              lesson1='Ментальная арифметика'
              lesson2='Ментальная арифметика'
              type1={{ upcoming: true }}
              type2={{ upcoming: true }}
            />
          </div>
          <div className='schedule_calendar_week'>
            <CalendarDay
              date={4}
              time2='13:00-13:45'
              lesson2='Ментальная арифметика'
              type1={{ unscheduled: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              date={5}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={6}
              time2='13:00-13:45'
              lesson2='Ментальная арифметика'
              type1={{ unscheduled: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              date={7}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={8}
              time2='13:00-13:45'
              lesson2='Ментальная арифметика'
              type1={{ unscheduled: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={9}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={10}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
          </div>
          <div className='schedule_calendar_week'>
            <CalendarDay
              date={11}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={12}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={13}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={14}
              time2='13:00-13:45'
              type1={{ unscheduled: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              date={15}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={16}
              time2='13:00-13:45'
              type1={{ unscheduled: true, weekend: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={17}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
          </div>
          <div className='schedule_calendar_week'>
            <CalendarDay
              date={18}
              time1='13:00-13:45'
              time2='13:00-13:45'
              lesson2='Ментальная арифметика'
              type1={{ unscheduled: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              date={19}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={20}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={21}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={22}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={23}
              time2='13:00-13:45'
              lesson2='Ментальная арифметика'
              type1={{ unscheduled: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={24}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
          </div>
          <div className='schedule_calendar_week last'>
            <CalendarDay
              date={25}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={26}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={27}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={28}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              date={29}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={30}
              type1={{ unscheduled: true }}
              type2={{ unscheduled: true }}
            />
            <CalendarDay
              dayType='weekend'
              date={31}
              time1='13:00-13:45'
              time2='13:00-13:45'
              lesson1='Ментальная арифметика'
              lesson2='Ментальная арифметика'
              type1={{ upcoming: true, unpaid: true }}
              type2={{ upcoming: true, unpaid: true }}
            />
          </div>
        </section>
      </main>
    </>
  );
};
