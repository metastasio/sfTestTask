import './remainingLessonItem.css'

type RemainingLessonItemProps = {
  name: string;
  count: number;
};

export const RemainingLessonItem = (props: RemainingLessonItemProps) => {
  return (
    <li>
      <p className='main_remaining_lessons_name'>{props.name}</p>
      <div className='main_remaining_lessons_count'>{props.count}</div>
    </li>
  );
};
