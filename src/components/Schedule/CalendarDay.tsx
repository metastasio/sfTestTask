import './calendarDay.css';

type DayProps = {
  date: number;
  time1?: string;
  lesson1?: string;
  unpaid1?: boolean;
  upcoming1?: boolean;
  crossedOut1?: boolean;
  todays1?: boolean;
  unScheduled1?: boolean;
  time2?: string;
  lesson2?: string;
  unpaid2?: boolean;
  upcoming2?: boolean;
  crossedOut2?: boolean;
  todays2?: boolean;
  unScheduled2?: boolean;
};

export const CalendarDay = (props: DayProps) => {
  const { date, time1, time2, lesson1, lesson2 } =
    props;

  return (
    <div className='schedule_calendar_day'>
      <p className='schedule_calendar_day_date'>{date}</p>
      <div className='schedule_calendar_day_lesson upcoming unpaid'>
        <p className='schedule_calendar_day_lesson_time'>{time1}</p>
        <p className='schedule_calendar_day_lesson_title'>{lesson1}</p>
      </div>
      <div className='schedule_calendar_day_lesson upcoming unpaid'>
        <p className='schedule_calendar_day_lesson_time'>{time2}</p>
        <p className='schedule_calendar_day_lesson_title'>{lesson2}</p>
      </div>
    </div>
  );
};
