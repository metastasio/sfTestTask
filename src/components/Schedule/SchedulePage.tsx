import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';
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
            <div className='schedule_calendar_day inactive_month'>
              <p className='schedule_calendar_day_date'>26</p>
            </div>
            <div className='schedule_calendar_day inactive_month'>
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
            </div>
            <div className='schedule_calendar_day inactive_month'>
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
            </div>
            <div className='schedule_calendar_day inactive_month'>
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
            </div>
            <div className='schedule_calendar_day'>
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
            </div>
            <div className='schedule_calendar_day weekend'>
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
            </div>
            <div className='schedule_calendar_day weekend'>
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
            </div>
          </div>
          <div className='schedule_calendar_week'>
            <div className='schedule_calendar_day'>
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
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>5</p>
            </div>
            <div className='schedule_calendar_day'>
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
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>7</p>
            </div>
            <div className='schedule_calendar_day'>
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
            </div>
            <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>9</p>
            </div>
            <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>10</p>
            </div>
          </div>
          <div className='schedule_calendar_week'>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>11</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>12</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>13</p>
            </div>
            <div className='schedule_calendar_day'>
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
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>15</p>
            </div>
            <div className='schedule_calendar_day weekend'>
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
            </div>
            <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>17</p>
            </div>
          </div>
          <div className='schedule_calendar_week'>
            <div className='schedule_calendar_day'>
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
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>19</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>20</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>21</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>22</p>
            </div>
            <div className='schedule_calendar_day weekend'>
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
            </div>
            <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>24</p>
            </div>
          </div>
          <div className='schedule_calendar_week last'>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>25</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>26</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>27</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>28</p>
            </div>
            <div className='schedule_calendar_day'>
              <p className='schedule_calendar_day_date'>29</p>
            </div>
            <div className='schedule_calendar_day weekend'>
              <p className='schedule_calendar_day_date'>30</p>
            </div>
            <div className='schedule_calendar_day weekend'>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
