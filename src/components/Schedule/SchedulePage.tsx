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
            <CalendarDay date={26} />
            <CalendarDay date={27} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day inactive_month'>
              <p className='schedule_calendar_day_date'>27</p>
              <div className='schedule_calendar_day_lesson complete'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson complete'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={28} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day inactive_month'>
              <p className='schedule_calendar_day_date'>28</p>
              <div className='schedule_calendar_day_lesson crossedout'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson crossedout'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={29} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day inactive_month'>
              <p className='schedule_calendar_day_date'>29</p>
              <div className='schedule_calendar_day_lesson unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={1} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>1</p>
              <div className='schedule_calendar_day_lesson todays1'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson todays2'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={2} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>2</p>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={3} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>3</p>
              <div className='schedule_calendar_day_lesson upcoming'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
          </div>
          <div className='schedule_calendar_week'>
            <CalendarDay date={4} time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>4</p>
              <div className='schedule_calendar_day_lesson'>
                <p className='schedule_calendar_day_lesson_time'></p>
                <p className='schedule_calendar_day_lesson_title'></p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={5} />
            <CalendarDay date={6} time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>6</p>
              <div className='schedule_calendar_day_lesson'>
                <p className='schedule_calendar_day_lesson_time'></p>
                <p className='schedule_calendar_day_lesson_title'></p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={7} />
            <CalendarDay date={8} time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>8</p>
              <div className='schedule_calendar_day_lesson'>
                <p className='schedule_calendar_day_lesson_time'></p>
                <p className='schedule_calendar_day_lesson_title'></p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time upcoming'>
                  13:00-13:45
                </p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={9} />
            <CalendarDay date={10} />
          </div>
          <div className='schedule_calendar_week'>
            <CalendarDay date={11} />
            <CalendarDay date={12} />
            <CalendarDay date={13} />
            <CalendarDay date={14} time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>14</p>
              <div className='schedule_calendar_day_lesson'>
                <p className='schedule_calendar_day_lesson_time'></p>
                <p className='schedule_calendar_day_lesson_title'></p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={15} />
            <CalendarDay date={16} time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>16</p>
              <div className='schedule_calendar_day_lesson'>
                <p className='schedule_calendar_day_lesson_time'></p>
                <p className='schedule_calendar_day_lesson_title'></p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={17} />
          </div>
          <div className='schedule_calendar_week'>
            <CalendarDay date={18} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>18</p>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={19} />
            <CalendarDay date={20} />
            <CalendarDay date={21} />
            <CalendarDay date={22} />
            <CalendarDay date={23} time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>23</p>
              <div className='schedule_calendar_day_lesson'>
                <p className='schedule_calendar_day_lesson_time'></p>
                <p className='schedule_calendar_day_lesson_title'></p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
            <CalendarDay date={24} />
          </div>
          <div className='schedule_calendar_week last'>
            <CalendarDay date={25} />
            <CalendarDay date={26} />
            <CalendarDay date={27} />
            <CalendarDay date={28} />
            <CalendarDay date={29} />
            <CalendarDay date={30} />
            <CalendarDay date={31} time1='13:00-13:45' time2='13:00-13:45' />
            {/* <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>31</p>
              <div className='schedule_calendar_day_lesson upcoming unpaid'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
              <div className='schedule_calendar_day_lesson upcoming'>
                <p className='schedule_calendar_day_lesson_time'>13:00-13:45</p>
                <p className='schedule_calendar_day_lesson_title'>
                  Ментальная арифметика
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};
