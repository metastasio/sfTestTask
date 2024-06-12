import cn from 'classnames';

import './calendarDay.css';

type DayProps = {
  date: number;
  time1?: string;
  lesson1?: string;
  type1?: { [key: string]: boolean };
  time2?: string;
  lesson2?: string;
  type2?: { [key: string]: boolean };
  dayType?: string;
  monthType?: string;
};

export const CalendarDay = (props: DayProps) => {
  const {
    date,
    time1,
    time2,
    lesson1,
    lesson2,
    type1,
    type2,
    dayType,
    monthType,
  } = props;
  const dayClassNames = cn('schedule_calendar_day', dayType, monthType);
  const lesson1ClassNames = cn('schedule_calendar_day_lesson', type1);
  const lesson2ClassNames = cn('schedule_calendar_day_lesson', type2);

  return (
    <div className={dayClassNames}>
      <p className='schedule_calendar_day_date'>{date}</p>
      <div className={lesson1ClassNames}>
        <p className='schedule_calendar_day_lesson_time'>{time1}</p>
        <p className='schedule_calendar_day_lesson_title'>{lesson1}</p>
      </div>
      <div className={lesson2ClassNames}>
        <p className='schedule_calendar_day_lesson_time'>{time2}</p>
        <p className='schedule_calendar_day_lesson_title'>{lesson2}</p>
      </div>
    </div>
  );
};
