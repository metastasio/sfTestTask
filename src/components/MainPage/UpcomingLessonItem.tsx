import { Button } from '../Button/Button';

import './upcomingLessonItem.css'

type UpcomingLessonItemProps = {
  day: number;
  month: string;
  lesson: string;
  time: string;
  teacher: string;
};

export const UpcomingLessonItem = (props: UpcomingLessonItemProps) => {
  const { day, time, month, lesson, teacher } = props;
  return (
    <li>
      <div className='main_upcoming_lessons_date'>
        <p className='main_upcoming_lessons_day'>{day}</p>
        <p className='main_upcoming_lessons_month'>{month}</p>
      </div>
      <p className='main_upcoming_lessons_name'>{lesson}</p>
      <p className='main_upcoming_lessons_details_time'>{time}</p>
      <div className='main_upcoming_lessons_teacher'>
        <img src='/img/icon.svg' />
        <p className='main_upcoming_lessons_details_name'>{teacher}</p>
      </div>
      <div className='main_upcoming_lessons_buttons'>
        <Button content='Button' classes='button_lessons_mini' />
        <Button content='Button' classes='button_lessons_mini active' />
      </div>
    </li>
  );
};
